var express = require('express');
var Movies = require('../model/movies');
var router = express.Router();

router.get('/movies', (req, res) => {
    // will call model functions 
    return res.json({ message: "Route to Get all Movies" });
});

// to insert will need to make post instead
router.get('/movies/insert', (req, res) => {
    return res.json({ message: "Insert movie route" });
});

module.exports = router