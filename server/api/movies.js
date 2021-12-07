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
    movieName = req.body.title
    var facts = [
        "SELECT description FROM movies WHERE title= '" + movieName +"'",
        "SELECT name FROM characters INNER JOIN (SELECT charID FROM inmovie INNER JOIN movies ON inmovie.movieID = movies.movieID WHERE movies.title='" + movieName +"') As b ON characters.charID = b.charID",
        "SELECT name FROM actors INNER JOIN (SELECT actorID FROM inmovie INNER JOIN movies ON inmovie.movieID = movies.movieID WHERE movies.title='" + movieName +"') As b ON actors.actorID = b.actorID",
        "SELECT value, length FROM (SELECT RANK() OVER (ORDER BY movies.length DESC) As value, length, title FROM movies) as Temp WHERE Temp.title='" + movieName + "'",
        "SELECT max(age) FROM actors INNER JOIN (SELECT actorID FROM inmovie INNER JOIN movies ON inmovie.movieID = movies.movieID WHERE movies.title='" + movieName + "') As b ON actors.actorID = b.actorID"
    ]
    var movieName = req.body.title;
    db.query(facts.join(';'), function(err, result) {
        if (err) throw err
        return res.end(JSON.stringify(result));
    })
});
module.exports = router