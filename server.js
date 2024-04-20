const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const itemsData = JSON.parse(fs.readFileSync("items.json", "utf-8"));

app.use(cors());
app.get("/api/items", (req, res) => {
  res.json(itemsData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
