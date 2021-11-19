var express = require('express');
var cCharacters = require('../model/characters');
var router = express.Router();

router.get('/characters', (req, res) => {
    // will call model functions 
    return res.json({ message: "Route to Get all characters" });
});

// to insert will need to make post instead
router.get('/characters/insert', (req, res) => {
    return res.json({ message: "Insert actor characters" });
});

module.exports = router