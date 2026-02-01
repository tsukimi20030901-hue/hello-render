const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// ★ 環境変数を取得
const message = process.env.MESSAGE;

app.get("/", (req, res) => {
  res.send(`環境変数の値：${message}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
