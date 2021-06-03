const jwt = require('jsonwebtoken')
const userSchemacopy = require('../models/signUpModel')

const UserInfo = async(req,res) => { 
    const cookieInToken = req.cookies.cookieKey
    const decodedToken =  jwt.decode(cookieInToken,process.env.TOKEN_SECRET)
    const userInfo = await userSchemacopy.findOne({_id:decodedToken._id})
    if(!userInfo) return res.status(400).json({error: "User is not authorized"})

    userInfo.password= undefined;
    res.status(200).json({user: userInfo})
}
module.exports = {UserInfo}