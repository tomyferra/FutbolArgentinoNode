// conexion a la base de datos
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const source = process.env.TEAMS_URI

const connectDB = async () => {
  try {
    await mongoose.connect(source)
    console.log('MongoDB connected')
  } catch (err) {
    console.error('MongoDB connection error:', err)
    process.exit(1) // Exit process with failure
  }
}

export default connectDB
