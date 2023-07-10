//module
const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//port num
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

//routes
const dbConnect =require('./config/db-connect.js');
const landRoute = require('./routes/landing.js');
const postRoute = require('./routes/post.js');

//route setup
app.use('/', landRoute);
app.use('/blog-list', postRoute);

//middle ware
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

//mongo
mongoose.set('strictQuery', true);
mongoose.connect(dbConnect.url)
    .then(() => {
        console.log("Connected to MongoDB");
  })
    .catch((err) => {
        console.log("Connection failed:", err);
  });

// run server
app.listen(PORT, () => {
    console.log(`Serving running on port # ${PORT}!`);
  });