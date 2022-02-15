const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const cors = require('cors')

// Load config
dotenv.config({ path: './config/config.env' })

const app = express()
connectDB()

//middleware
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port: ${PORT}`))