const http = require("http");
const fs = require("fs");

const handleProduct = require("./product");

const server = http.createServer((req, res) => {

  // ✅ WHATWG URL API
  const myURL = new URL(req.url, `http://${req.headers.host}`);
  const pathname = myURL.pathname;

  // ✅ convert query params to object
  const query = Object.fromEntries(myURL.searchParams.entries());

  if (pathname === "/product") {

    // log search
    const log = `Product: ${query.name}, Price: ${query.price}, Discount: ${query.discount}\n`;
    fs.appendFile("searches.txt", log, (err) => {
      if (err) console.log("Error writing file:", err);
    });

    handleProduct(req, res, query);

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 page not found");
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
