const express = require("express");
const responseTime = require("./responseTime");

const app = express();
const PORT = 3000;

// Use middleware
app.use(responseTime);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Akash" },
        { id: 2, name: "Rahul" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
