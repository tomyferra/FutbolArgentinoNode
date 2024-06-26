import mongoose from 'mongoose'
const { Schema } = mongoose

const LeaderboardSchema = new Schema({
  Name: { type: String, required: true },
  Score: { type: Number, required: true }
}, { collection: 'leaderboard' })

export default mongoose.model('leaderboard', LeaderboardSchema)
