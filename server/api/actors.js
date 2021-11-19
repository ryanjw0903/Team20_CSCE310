var express = require('express');
var Actors = require('../model/actors');
var router = express.Router();

router.get('/actors', (req, res) => {
    // will call model functions 
    return res.json({ message: "Route to Get all actors" });
});

// to insert will need to make post instead
router.get('/actors/insert', (req, res) => {
    return res.json({ message: "Insert actor route" });
});

module.exports = router