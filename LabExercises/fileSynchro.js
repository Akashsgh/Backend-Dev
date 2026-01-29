const fs = require("fs");
const path = require("path");

const sourceDir = "source";
const targetDir = "target";

if (!fs.existsSync(sourceDir)) {
  console.log("Source directory does not exist");
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
  console.log("Target directory created");
}

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.log("Error reading source directory:", err.message);
    return;
  }

  files.forEach((file) => {
    const sourceFile = path.join(sourceDir, file);
    const targetFile = path.join(targetDir, file);

    if (!fs.existsSync(targetFile)) {
      fs.copyFile(sourceFile, targetFile, (err) => {
        if (err) {
          console.log("Error copying file:", err.message);
        } else {
          console.log("Copied:", file);
        }
      });
    }
  });
  console.log("Synchronization completed");
});
