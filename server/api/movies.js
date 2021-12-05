var express = require('express');
const db = require('../database/db');
var router = express.Router();

router.get('/movies', (req, res) => {
    // will call model functions 
    db.query('SELECT * FROM movies', function(err, result) {
        if (err) throw err
        return res.end(JSON.stringify(result));
      })
});

// to insert will need to make post instead
router.get('/movies/insert', (req, res) => {
    return res.json({ message: "Insert movie route" });
});

module.exports = router