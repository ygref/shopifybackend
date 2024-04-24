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

app.get("/api/items/barcode/:barcode", (req, res) => {
  const barcode = req.params.barcode;
  const item = itemsData.find((item) => item.barcode === barcode);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Item Not Found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
