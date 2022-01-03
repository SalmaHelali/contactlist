const mongoose = require('mongoose')

const Contact = require('../models/Contact')
const contactSchema= new mongoose.Schema({

name : {type:String , required:true} ,
age:Number ,
email : {type:String , unique:true , required:true}


})

module.exports = mongoose.model("Contact", contactSchema)