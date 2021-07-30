const express = require('express');
const mongoose = require('mongoose');
const uri = require('./config/keys_dev').uri;

// Import Routes
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
// const comments = require('./routes/api/comments');

// App
const app = express();

// Allow for data to have body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connecting from MERN Tutorial example
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));


const port = 5000;

// Use Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
// app.use('/api/comments', comments);

// Make server start on this port (localhost/5000)
app.listen(
    port, 
    () => console.log(`Server started on port: ${port}`)
);
