const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const shipmentData = JSON.parse(fs.readFileSync("shipment.json", "utf-8"));

app.use(cors());
app.get("/api/shipment", (req, res) => {
  res.json(shipmentData);
});

app.get("/api/shipment/:id", (req, res) => {
  const shipmentId = req.params.id;
  const shipment = shipmentData.find((shipment) => shipment.shipmentId === shipmentId);
  if (shipment) {
    res.json(shipment);
  } else {
    res.status(404).json({ error: "Shipment not Found" });
  }
});
// app.get("/api/items/barcode/:barcode", (req, res) => {
//   const barcode = req.params.barcode;
//   const item = itemsData.find((item) => item.barcode === barcode);
//   if (item) {
//     res.json(item);
//   } else {
//     res.status(404).json({ error: "Shipment not Found" });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
