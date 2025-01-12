const connection = require("../db/conn");

function index(req, res) {
  res.json({
    message: "OK",
  });
}

module.exports = { index };
