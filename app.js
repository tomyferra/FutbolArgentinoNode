import express from 'express'
import morgan from 'morgan'
import path from 'path'
import dbConnect from './database.js'
import team from './models/teams.js'
import leaderboard from './models/leaderboard.js'
import { fileURLToPath } from 'url' // To handle __dirname with ES6 modules

const app = express()
const port = process.env.PORT || 5001
// Middlewares
app.use(morgan('dev'))

// Enable CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

// Middleware
app.use(express.json()) // For parsing application/json
app.use(express.urlencoded({ extended: true })) // For parsing application/x-www-form-urlencoded

// Routes
// app.use('/api/teams', require('./routes/teamsRoutes'))
// app.use('/api/leaderboard',require('./routes/leaderboardRoutes'))
dbConnect()

// Api home page
app.get('/api/teams', async (req, res) => {
  const teams = await team.find()
  res.json(teams)
})
// Api home page
app.get('/api/leaderboard', async (req, res) => {
  const leaderboardData = await leaderboard.find()
  res.json(leaderboardData)
})

// Static Files
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})
