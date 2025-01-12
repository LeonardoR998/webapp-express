const connection = require("../db/conn");

function index(req, res) {
  const sql = "SELECT * FROM `movies`";
  connection.query(sql, (err, results) => {
    res.json({
      status: "OK",
      movies: results,
    });
  });
}

function show(req, res) {
  const movieId = req.params.id;

  const sqlMovie = "SELECT * FROM `movies` WHERE id = ?";

  connection.query(sqlMovie, [movieId], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: "KO",
        message: "Database query failed",
      });
    }
    const [movie] = results;

    res.json({
      status: "OK",
      movie,
    });
  });
}

module.exports = { index, show };
