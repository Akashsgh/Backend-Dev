const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");

const inputPath = path.join(__dirname, "input.txt");
const transformPath = path.join(__dirname, "transformOutput.txt");

const readStream = fs.createReadStream(inputPath);
const writeStream = fs.createWriteStream(transformPath);

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const transformedData = chunk.toString().toUpperCase();
    callback(null, transformedData);
  }
});

// connect streams
readStream
  .pipe(upperCaseTransform)
  .pipe(writeStream);

writeStream.on("finish", () => {
  console.log("File transformed to uppercase successfully ✅");
});
