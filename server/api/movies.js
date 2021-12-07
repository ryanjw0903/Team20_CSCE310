var express = require('express');
const db = require('../database/db');
var router = express.Router();

router.get('/allMovies', (req, res) => {
    // will call model functions 
    db.query('SELECT * FROM movies', function(err, result) {
        if (err) throw err
        return res.end(JSON.stringify(result));
      })
});


router.post('/movie', (req, res) => {
    // will call model functions 
    var movieName = req.body.title;
    db.query("SELECT * FROM movies WHERE title= '" + movieName +"'", function(err, result) {
        if (err) throw err
        return res.end(JSON.stringify(result));
      })
});
module.exports = router