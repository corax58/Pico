require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT




//routers
const albums = require('./routes/albums');

const app = express();

//middlewares
app.use(cors());
app.use(express.urlencoded({extended: true,}));
app.use(express.json());
  

//routes
app.use('/albums/', albums);


//connect to the database
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connected");
    //starting server
    app.listen(PORT,()=>{
console.log('listening on http://localhost:'+PORT);


});
}).catch((err)=>{
    console.log(err);
})

