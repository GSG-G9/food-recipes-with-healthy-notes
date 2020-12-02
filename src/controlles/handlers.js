const fetch = require("node-fetch");
const path = require("path");
const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
};


const getHealthData1=()=>5
module.exports = { getHome ,getHealthData1};
