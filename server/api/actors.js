var express = require('express');
const db = require('../database/db');
var router = express.Router();

router.get('/actors', (req, res) => {
    db.query('SELECT * FROM actors', function(err, result) {
        if (err) throw err
        return res.end(JSON.stringify(result));
      })
});

// to insert will need to make post instead
router.get('/actors/insert', (req, res) => {
    return res.json({ message: "Insert actor route" });
});

module.exports = router