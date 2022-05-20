const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username:{
    type: String, 
    unique: true,
    required: true,
    trim: true
  },
  email:{
    type: String,
    unique:true,
    required: true,
    match:[]
  },
  thoughts:[],
  friends:[this]
})

userSchema.virtual('friendCount').get(function() {
  return this.friends.length
});

const User = mongoose.model('User', userSchema)

module.exports = User