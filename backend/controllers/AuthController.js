const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchemacopy = require('../models/signUpModel')
const {signUpValidation, loginValidation} = require('../controllers/validations')

const register =  async (req , res) => {

    //Check valid of form
    const {error} = await signUpValidation(req.body)
    if(error) return (res.status(400).send(error.details[0].message))

    //Check if the email or user is exists
    const emailExisted = await userSchemacopy.findOne({email: req.body.email})
    if(emailExisted) return (res.status(422).json({message: "Email is already exist", statusCode: 422}))

    //Check if username is exists
    const usernameExisted = await userSchemacopy.findOne({username: req.body.username})
    if(usernameExisted) return (res.status(422).json({message: "Username is already exist", statusCode: 422}))

    //Hash pw
    const hashedPass = await bcrypt.hash(req.body.password, 10)  

    let signUpInfo = new userSchemacopy({
      username:req.body.username,
      email:req.body.email,
      password:hashedPass})
  
    signUpInfo.save()
    .then(data => {res.json({message: 'User added suceessfully!', data})})
    .catch(errors =>{res.status(400).send(errors)})   

    // res.status(200).send("Successfully create an account")
  
}

const login = async (req, res) => {
  
  //Check Login valid of form
  const {error} = await loginValidation(req.body)
  if(error) return (res.status(400).send(error.details[0].message))

  //Check username in MB database
  const userExisted = await userSchemacopy.findOne({$or: [{email: req.body.username}, {username: req.body.username}]})
  if(!userExisted) return (res.status(422).json({message: "Email or username isn't matched with any our record", statusCode: 422}))

  //Compare password
  const isValidPass = await bcrypt.compare(req.body.password, userExisted.password)
  if(!isValidPass) return (res.status(400).json({message: "Invalid Password"}))

  //If everything above Ok then create token
  const token = jwt.sign({_id: userExisted._id}, process.env.TOKEN_SECRET)
    
    let expireDay = new Date();
    expireDay.setDate(expireDay.getDate()+1);
    
    // Create a Cookie
    res.cookie('cookieKey', token,{
        expires: expireDay,
        // secure: req.secure || req.headers['x-forwarded-proto'] ==='https',
        httpOnly:true,
        sameSite: 'lax',
    });

    //Hide pw from backend
    userExisted.password= undefined;
    res.status(200).json({
        status: 'success',
        token: token,
        data: {userExisted} 
    });
}



module.exports = {register, login}