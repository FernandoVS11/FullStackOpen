const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogRouter = require('./controllers/blogs')

const app = express()

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch(err => console.error(err))

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

module.exports = app
