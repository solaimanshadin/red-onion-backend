const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3200;

const uri = process.env.DB_PATH;
let client = new MongoClient(uri , {useNewUrlParser:true});


/********************************
             All Routes
*********************************/
app.get('/' , (req, res) => {
    res.send("Welcome to Red Onion Backend Server");
})

const foods = [{name: 'am'} , {name: 'jam'} , {name:'kathal'} ,{name: 'lichuu'} ];

app.get('/foods' , (req, res) => {
    res.send(foods);
})

app.get('/food/:foodId', (req ,res) => {
    const foodId = req.params.foodId;
    res.send(foods[foodId]);
})

app.listen(port, err => {
    err ? console.log(err) : console.log("Listing for port :" , port);
})