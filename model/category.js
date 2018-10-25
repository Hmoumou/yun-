const mongoose = require('mongoose')

const category = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    }

       
},{versionKey:false, timestamps:{ createdAt: 'createdTime',updatedAt:'updateTime' }})

module.exports = mongoose.model('category', category)