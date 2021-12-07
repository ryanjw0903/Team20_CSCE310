var express = require('express');
const db = require('../database/db');
var router = express.Router();

router.get('/allCharacters', (req, res) => {
    db.query('SELECT * FROM characters', function(err, result) {
        if (err) throw err
        return res.end(JSON.stringify(result));
      })
});

module.exports = router