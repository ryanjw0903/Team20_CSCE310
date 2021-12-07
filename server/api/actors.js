var express = require('express');
const db = require('../database/db');
var router = express.Router();

router.get('/allActors', (req, res) => {
    db.query('SELECT * FROM actors', function(err, result) {
        if (err) throw err
        return res.end(JSON.stringify(result));
      })
});

module.exports = router