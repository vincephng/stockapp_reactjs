const joi = require('@hapi/joi')
const jwt = require('jsonwebtoken')
const userSchemacopy = require('../models/signUpModel')

const signUpValidation = (data) =>{
    const registerSchema = joi.object({
        username: joi.string().required(),
        email: joi.string().min(3).required(),
        password: joi.string().min(6).required()
    })
    return registerSchema.validate(data)
}

const loginValidation = (data) => {
    const loginSchema = joi.object({
        username: joi.string().allow(null, ""),
        email: joi.string().allow(null,''),
        password: joi.string().min(6).required()
    })
    return loginSchema.validate(data)
}
const validateToken = async(req,res,next) =>{
    const isCookie = req.cookies.cookieKey

    
    if(!isCookie) return res.status(401).json({error: "User is not authenticated!"})
    
    try{
    const validToken = jwt.verify(isCookie, process.env.TOKEN_SECRET)
        if(validToken){
            req.authenticated = true;
            // const decodedToken =  jwt.decode(isCookie,process.env.TOKEN_SECRET)
            // const userInfo = await userSchemacopy.findOne({_id:decodedToken._id})
            // res.status(200).json({user: userInfo})
            return next()
        }
    }catch(err){
        return res.status(400).json({error: err, cookie: isCookie});
    }
}

module.exports = {signUpValidation, loginValidation, validateToken}

