function handleProduct(req, res, query) {
  const name = query.name || "Unknown";
  const price = Number(query.price) || 0;
  const discount = Number(query.discount) || 0;

  const finalPrice = price - (price * discount) / 100;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
      <h2>Product: ${name}</h2>
      <p>Price: &#8377;${price}</p>
      <p>Discount: ${discount}%</p>
      <p><b>Final Price: &#8377;${finalPrice}</b></p>
  `);
}

module.exports = handleProduct;
