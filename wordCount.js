const fs = require("fs");

const inputFile = "input.txt";
const outputFile = "wordCountOutput.txt";

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err.message);
    return;
  }

  
  const words = data.trim().split(/\s+/);
  const wordCount = data.trim().length === 0 ? 0 : words.length;

  const result = `Total Words: ${wordCount}\n`;

  fs.writeFile(outputFile, result, "utf8", (err) => {
    if (err) {
      console.log("Error writing file:", err.message);
      return;
    }

    console.log("✅ Word count saved to:", outputFile);
  });
});
