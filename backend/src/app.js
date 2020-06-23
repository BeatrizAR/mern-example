require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

//configuraciones

app.set('port', process.env.PORT)

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/', require('./routes/userRoute'))


module.exports = app;