const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();

//allows to make posts requests
server.use(express.json());


//connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },
() => console.log('connected to DB'));





//import routes
const authRoute = require('./routes/auth')


server.use('/api/user', authRoute);



server.listen('5000', console.log('server up and runnning on port 5000'))