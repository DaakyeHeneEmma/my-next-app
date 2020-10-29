// import mongoose from "mongoose"
const mongoose = require('mongoose')
const express = require('express')

const app = express();

const url = 'mongodb://localhost/test'

mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true})

const db = mongoose.connection;
db.on('open', ()=>{
    console.log('conected');
})

const userRoute = require('../server/models/user')
app.use('/users', userRoute)

app.listen(9000, ()=>{
console.log("server started");
})