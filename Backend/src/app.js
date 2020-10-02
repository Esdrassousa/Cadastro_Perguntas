const express = require('express')
const bodyparser =  require('body-parser')
var cors = require('cors');
const mysql = require('mysql2')





const app = express()
app.use(cors());


//call routes
const TemasRoute = require('./routes/Temas-router')
const RespostarRouter = require('./routes/Resposta-route');
const ProblemasRoute = require('./routes/Problemas-route')


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))


app.use('/Temas' , TemasRoute);
app.use('/Resposta' , RespostarRouter);
app.use('/Problemas' , ProblemasRoute);
module.exports = app;