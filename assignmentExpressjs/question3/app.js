const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


app.get("/contact", (req, res) => {
    res.render("contact");
});


app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    res.send("Form submitted successfully");
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/contact");
});
