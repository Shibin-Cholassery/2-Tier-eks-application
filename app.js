const express = require('express')
const db = require('./queries')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const port = process.env.PORT

var cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/v1/app', (req, res) => {
  res.status(200).json({ status: 1, message: 'Hello DevOps :)' })
})

app.get('/v1/users', db.getUsers)

app.get('/health', (req, res) => {
  res.status(200).send()
})
app.listen(port, () => {
  console.log(`Devops App listening at http://localhost:${port}`)
})
