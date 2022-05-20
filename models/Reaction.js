const mongoose = require('mongoose')
const dateTime = require('../utils/dateTime')

const reactionSchema = new mongoose.Schema({
  reactionId:{
    type: schema.types.objectId(),
    default: ()=>new types.objectId()
  },
  reactionBody:{
    type:String,
    required:true,
    minlength:1,
    maxlength:280
  },
  username:{
    type:String,
    required:true
  },
  createdAt:{
    type:date,
    default:date.now,
    get:(timeStamp)=>dateTime(timeStamp)
  }
})
module.exports=reactionSchema