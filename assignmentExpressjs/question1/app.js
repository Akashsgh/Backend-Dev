const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Express Server</h1>");
});

app.get("/product", (req, res) => {
    const searchItem = req.query.search;
    res.send(`<h1>Product Page: ${searchItem} mobile phone</h1>`);
});

app.get("/profile/:username", (req, res) => {
    res.send(`<h1>Profile Page of ${req.params.username}</h1>`);
});

app.get("/users", (req, res) => {
    const dataPath = path.join(__dirname, "students.json");
    const users = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    let filteredUsers = users;
    const { name, id } = req.query;

    if (name) {
        filteredUsers = filteredUsers.filter(user =>
            user.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (id) {
        filteredUsers = filteredUsers.filter(user =>
            user.id == id
        );
    }

    res.json(filteredUsers);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
