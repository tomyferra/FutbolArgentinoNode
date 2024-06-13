import express from 'express'
import morgan from 'morgan'
import path from 'path'
import dbConnect from './database.js'
import team from './models/teams.js'
import { fileURLToPath } from 'url' // To handle __dirname with ES6 modules

const app = express()
// settings
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
app.get('/teams', async (req, res) => {
  console.log('getting')
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS')
  const teams = await team.find().limit(5)
  res.json(teams)
  console.log('running....')
})

// Static Files
// app.use(express.static(path.join(__dirname, 'public')))
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})
