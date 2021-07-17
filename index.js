const express = require('express') // import express
const cors = require('cors') // import cors
const mongoose = require('mongoose') // import mongoose
require('dotenv/config')


const app = express()
app.use(express.json())
app.use(cors())
// connect to mongo database
mongoose
    .connect(process.env.DB_CONNECTION,{
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false
    })
    .then(() => app.listen(5000, (req, res) => {
        console.log('Houston were connected')
    }))
    .catch(err => console.log(err))
// use the country routes
const countryRoute = require('./src/routes/countryRoute')
app.use(countryRoute)

