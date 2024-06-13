const express = require ('express');
const morgan  = require('morgan');
const path = require('path');
const {mongoose} = require('../database')
const app = express();

const cors = require('cors');

//settings
var port = process.env.PORT || 5001
// app.set('port', process.env.PORT || 5001);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded


//Routes
app.use('/api/v1/teams',require('../routes/teamsRoutes'));
// app.use('/api/leaderboard',require('./routes/leaderboardRoutes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
})