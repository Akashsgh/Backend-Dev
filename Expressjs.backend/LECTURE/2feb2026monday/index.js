//2 Feburary 2026 Monday
const express = require("express");
const app = express();

const students = [
  { id: 1, name: "RAM", branch: "ECE", address: "Delhi" },
  { id: 2, name: "GITA", branch: "CSE", address: "UP" },
  { id: 3, name: "SHYAM", branch: "CSE", address: "Bihar" },
  { id: 4, name: "SITA", branch: "ME", address: "MP" }
];

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});


app.get("/students", (req, res) => {
  res.json(students);
});


app.get("/student/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(s => s.id === id);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

app.get("/search/student", (req, res) => {
  const branch = req.query.branch;

  if (!branch) {
    return res.json({ message: "Please provide branch query" });
  }

  const result = students.filter(
    s => s.branch.toLowerCase() === branch.toLowerCase()
  );

  if (result.length > 0) {
    res.json(result);
  } else {
    res.json({ message: "No students found for this branch" });
  }
});


app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
