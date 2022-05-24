const User = require('../models')

const userControl={
  getUser(req,res){
    User.find({})
    .then(userData=>res.json(userData))
    .catch(err=>{res.status(400).json(err)
    })
  },
getUserById({params},res) {
  User.findOne({_id: params.id})
  .then(userData=>res.json(userData))
  .catch(err=>{res.status(400).json(err)
  })
},
createUser({ body }, res) {
  User.create(body)
  .then(userData=> res.json(userData))
  .catch(err => res.status(400).json(err))
},
updateUser({ params, body }, res) {
  User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
  .then(userData =>  userData ? res.json(userData) : res.status(404).json({ message: user404Message(params.id) }))
  .catch(err => res.status(400).json(err))
},




}