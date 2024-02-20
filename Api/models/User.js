
const mongoose = require('mongoose');


const newShima = new mongoose.Schema({
 

    Username : String,
    LastName: String,
    Email : String,
    password: String



})

const collection = mongoose.model("collection", newShima)

module.exports=collection;