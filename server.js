const path = require("path");
const express = require("express");
require('dotenv').config();

const DIST_DIR = path.join(__dirname, "dist"),
  PORT = 3000,
  app = express();

app.use(express.static(DIST_DIR));

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

const server = app.listen(PORT,
  () => console.log(`ece's weather app listening at http://localhost:${server.address().port}`)
);