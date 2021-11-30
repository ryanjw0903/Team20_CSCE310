const express = require('express'); //backend server
const bodyParser = require('body-parser'); // http interpataions of data from front to backend
const PORT = process.env.PORT || 5000; // which port exprress is on
var movies = require('./api/movies');
var actors = require('./api/actors');
var characters = require('./api/characters');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(movies);
app.use(actors);
app.use(characters);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
})

module.exports = app;

