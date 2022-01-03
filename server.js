const express = require('express')
const connectdb = require('./config/mongoDb')
const ContactRoute = require('./routees/Contact')
require("dotenv").config()
const app = express()
connectdb()


app.use(express.json)
app.use('/api/contacts', ContactRoute )



app.listen(process.env.port , ()=>console.log (`port is running on port ${process.env.port}`) )