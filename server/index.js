require('dotenv').config()
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');

const app = express()
const PORT = process.env.PORT
const AtlasURl = process.env.Url


app.use(cors());
app.use(express.json());
app.use('/users', userRouter)

mongoose.connect(AtlasURl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Mongo atlas connection'))
.catch(err => console.log(err));



app.listen(PORT, console.log(`PORT${PORT}`))