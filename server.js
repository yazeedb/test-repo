const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.json({ success: true });
});

app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(Number(port), () => {
  console.log("Listening on port", port);
});
