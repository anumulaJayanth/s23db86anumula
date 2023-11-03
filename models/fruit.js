const mongoose = require("mongoose")
const fruitSchema = mongoose.Schema({
name: String,
color: String,
price: Number
})
module.exports = mongoose.model("fruit", 
fruitSchema)