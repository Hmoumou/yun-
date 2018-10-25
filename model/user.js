const mongoose = require('mongoose')

const user = new mongoose.Schema({
        avatar:String,
        username:String,
        email:{
            type:String,
            //唯一且必须
            unique:true,
            required:true
        },
        password:String,
        desc:String,
},{versionKey:false, timestamps:{ createdAt: 'createdTime',updatedAt:'updateAtTime' }})

module.exports = mongoose.model('user',user)