const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This is REST API working for Data Intimate Interview",
  });
});

app.listen(3000, () => {
  console.log("Server Up and Running!!!");
});
