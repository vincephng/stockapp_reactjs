const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    fullname: {type: String},
    username: {type:String, require: true},
    email: {type:String, require:true},
    password: {type:String, require: true},
    symbolStock: {type:Array,default: []},
    dateSignUp: {type: Date, default: Date.now }
})

module.exports = mongoose.model('signupTable', userSchema)