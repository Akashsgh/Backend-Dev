const fs = require("fs");

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "read":
    readFile(args[1]);
    break;

  case "write":
    writeFile(args[1], args[2]);
    break;

  case "copy":
    copyFile(args[1], args[2]);
    break;

  case "delete":
    deleteFile(args[1]);
    break;

  case "list":
    listDirectory(args[1]);
    break;

  default:
    console.log("Invalid command");
}

// READ FILE
function readFile(fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) return console.log(err.message);
    console.log(data);
  });
}

// WRITE FILE
function writeFile(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) return console.log(err.message);
    console.log("File written");
  });
}

// COPY FILE
function copyFile(src, dest) {
  fs.copyFile(src, dest, (err) => {
    if (err) return console.log(err.message);
    console.log("File copied");
  });
}

// DELETE FILE
function deleteFile(fileName) {
  fs.unlink(fileName, (err) => {
    if (err) return console.log(err.message);
    console.log("File deleted");
  });
}

// LIST DIRECTORY
function listDirectory(dir = ".") {
  fs.readdir(dir, (err, files) => {
    if (err) return console.log(err.message);
    files.forEach(f => console.log(f));
  });
}
