const mongoose = require('mongoose')
const Schema = mongoose.Schema

const article = new mongoose.Schema({
       title: String,
       content: String,//富文本
       contentText: String,//非富文本
       author:{
        type: Schema.Types.ObjectId,
        ref:'user'
       },
       category:{
        type: Schema.Types.ObjectId,
        ref:'category'
       },
       readnumber:{//阅读数
           type:Number,
           default:0
       },
       commonnum:{//回复数
        type:Number,
        default:0
       }
    

},{versionKey:false, timestamps:{ createdAt: 'createdTime',updatedAt:'updateTime' }})

module.exports = mongoose.model('article',article)