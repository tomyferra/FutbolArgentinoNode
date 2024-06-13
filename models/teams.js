const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamsSchema = new Schema({
  Name: {type : String, required: true},
  Country: {type : String},
  Logo: {type : String},
  City: {type : String},
  StadiumName: {type: String},
  StadiumImg: {type: String},
  StadiumCaoacity: {type: Number},
  id: {type: Number}
}, { collection: 'teams' })

module.exports = mongoose.model('team',TeamsSchema);