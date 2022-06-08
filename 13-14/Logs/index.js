require("dotenv").config();

const express = require('express');
const app = express();


const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI,(err) => {
    if(err) console.log(err);
    else console.log("Database is Connected");
});


app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server Is Running on PORT ${process.env.PORT}`);
})