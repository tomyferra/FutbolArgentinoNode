// conexion a la base de datos
const mongoose = require('mongoose');
require('dotenv').config();
const source = process.env.TEAMS_URI;
mongoose.connect(source)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;