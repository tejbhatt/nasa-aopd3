const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const mongo = require('./src/packages/database/mongo/models');
const apodRoute = require('./src/routes/apod.routes');
const { PORT } = require('./config/config');
const moongoose = require('moongoose');
var cors = require('cors');
const download = require('image-downloader');



const app = express();

//const DB = 'mongodb+srv://tej_bhatt:Kali%40007@cluster0.ixjhz.mongodb.net/apodnasa?retryWrites=true&w=majority'

//moongoose.connect(DB).then(() => {
  ///  console.log('connection successfull');
//}).catch((err) =>console.log('not connection successfull'));

//timeout of 5 sec
app.use((req, res, next) => {
    res.setTimeout(5000, () => {
        res.status(408).json({ message: "Request Timeout" });
    });
    next();
})

//parser for json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

//route
app.use('/', apodRoute)

//mongo connection
mongo.connect()
app.use(cors({
    origin:"*",}));

//app listining at port ...
app.listen(PORT, () => {
    console.log({ level: "info", message: `listening at http://localhost:${PORT}` });
});