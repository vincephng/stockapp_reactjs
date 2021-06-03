const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv')
dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = (req,res) => {
    const email = req.body.email
    const msg = {
        to: email, 
        from: 'vinc3nguyen@gmail.com', 
        template_id: 'd-38701ba88336452c858b3eeb485632e2'
      }
      
      sgMail
        .send(msg)
        .then((response) => {
          if(response[0].statusCode == 202){
              
              res.status(202).send("Email was sent")
          }
          console.log(response[0].statusCode,response[0].headers)
        })
        .catch((error) => {
          console.error(error)
        })
 
}

module.exports = {sendEmail}