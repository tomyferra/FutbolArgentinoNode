
const morgan  = require('morgan');
const path = require('path');
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
require('dotenv').config()

// Connect to MongoDB
mongoose.connect(process.env.TEAMS_URI)
    .then(() => console.log('MongoDB conectada correctamente'))
    .catch(err => console.error('MongoDB error:', err));

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

// Basic route
app.get('/', (req, res) => {
    console.log(TEAMS_URI)
    res.send('Hello, World!');
});


//Routes
app.use('/api/teams',require('./routes/teamsRoutes'));
// app.use('/api/leaderboard',require('./routes/leaderboardRoutes'));


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
})