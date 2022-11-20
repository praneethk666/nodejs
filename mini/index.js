const express = require('express');
const mongoose = require('mongoose');
const res = require('express/lib/response');
const app = express();
const cors = require('cors'); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
mongoose.connect('mongodb://localhost/authdata');
mongoose.Promise = global.Promise;
//app.get('/sex',(req,res) => res.send('API WORKING'));
app.use('/apii',require('./routes/apii'));
app.use(function(req,res){
    res.status(422).send({error:err.message});
})
app.listen(process.env.port||4001,function(){
    console.log('Now listening for requests');
})


