const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/book-e-sell?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const express = require('express');




const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Coonected Successfully");
    })
}
module.exports = connectToMongo;
