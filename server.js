const express = require('express');
const mongoose = require('mongoose');
const uri = require('./config/keys_dev').uri;
const { MongoClient } = require('mongodb');

// Connecting to mongoDB database (from the Atlas example)
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const app = express();

// Allow for data to have body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connecting from MERN Tutorial example
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));


const port = 5000;

// Make server start on this port (localhost/5000)
app.listen(
    port, 
    () => console.log(`Server started on port: ${port}`)
);
