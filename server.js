require('dotenv').config() //Load all the env variables

const express = require('express')
const app = express()
const mongoose = require('mongoose')

//connecting to the databse
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
//connecting to the srever
app.listen(3000, () => console.log('server started'))

//setting up the server to accept JSON
app.use(express.json())

//routes
const exampleRouter = require('./routes/example')
//passing the path
app.use('/example', exampleRouter)


 