const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.post("/contact", (req, res) => {
    res.send("Form submitted");
});


app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
