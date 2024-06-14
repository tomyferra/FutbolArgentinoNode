import mongoose from 'mongoose'
const { Schema } = mongoose

const TeamsSchema = new Schema({
  Name: { type: String, required: true },
  Country: { type: String },
  Logo: { type: String },
  City: { type: String },
  StadiumName: { type: String },
  StadiumImg: { type: String },
  StadiumCaoacity: { type: Number }
}, { collection: 'teams' })

export default mongoose.model('team', TeamsSchema)
