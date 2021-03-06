const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose =require('mongoose');

//const db = require('./db')
const pincodeRouter = require('./routes/pincode-router')

mongoose.connect("mongodb+srv://admin:admin@cluster0.1xkaw.mongodb.net/pincodes?retryWrites=true&w=majority", {useUnifiedTopology: true,useNewUrlParser: true});
const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', pincodeRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
