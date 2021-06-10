const jwt = require("jsonwebtoken")
const userSchemacopy = require('../models/signUpModel')


const addingTicker = async(req,res) =>{
    const cookie = req.cookies.cookieKey
    const decodedToken= jwt.decode(cookie,process.env.TOKEN_SECRET)
    
    const user = await userSchemacopy.findOne({_id:decodedToken._id})
    if(!user) return res.status(400).json({error: "User is not authorized"})

    await userSchemacopy.updateOne({_id:decodedToken._id},{ $addToSet:{"symbolStock":req.body.ticker}})
                    .then(response => (res.status(200).send(response)))
                    .catch(err => (res.status(400).json(err)))
    
}

const removingTicker = async(req,res) =>{
    const cookie = req.cookies.cookieKey
    const decodedToken= jwt.decode(cookie,process.env.TOKEN_SECRET)

    const user = await userSchemacopy.findOne({_id:decodedToken._id})
    if(!user) return res.status(400).json({error: "User is not authorized"})
    
    await userSchemacopy.updateOne({_id:decodedToken._id},{ $pull:{"symbolStock":{$in: [req.body.ticker]}}})
                    .then(response => (res.status(200).send("Successfuly remove")))
                    .catch(err => (res.stattus(400).json(err)))
}

module.exports = {addingTicker,removingTicker}