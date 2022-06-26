const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// For testing purposes
app.get("/", (req, res) => {
  res.send("<h2>It seems to be working!</h2>");
});

app.listen(PORT, () => {
  console.log(`PAI is listening on port ${PORT}.`);
});
