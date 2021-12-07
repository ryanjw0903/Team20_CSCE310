var express = require('express');
const db = require('../database/db');
var router = express.Router();

router.get('/alCharacters', (req, res) => {
    db.query('SELECT * FROM characters', function(err, result) {
        if (err) throw err
        return res.end(JSON.stringify(result));
      })
});

// to insert will need to make post instead
router.get('/characters/insert', (req, res) => {
    return res.json({ message: "Insert actor characters" });
});

module.exports = router