const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// ルート
app.get("/", (req, res) => {
  res.send("Hello, Render!");
});

// /api/hello
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API!" });
});

// /about
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
