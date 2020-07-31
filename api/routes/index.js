const express = require('express');
const { check, validationResult } = require('express-validator/check');
const colors = require('colors/safe');
const router = express.Router();
const nodemailer = require('nodemailer');

function getrandom(){    var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);    return random_string;}
console.log(getrandom())
router.get('/shortUrl', (req,res)=>{

})


router.post('/send', (req, res) => {

  if(req.body.type=="invoice"){
    if(req.body.firstName==""|| req.body.lastName==""){
      console.log("must not empty")
     }else{
   
       const output = `
       <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
       <html><body>
         <p>thanks for being a client for Mybosphorus</p>
         <h3>Your order summary</h3>
         <ul style="list-decoration:none;text-decoration:none">  
           <li> first Name: ${req.body.firstName}</li>
           <li>last Name: ${req.body.lastName}</li>
           <li>Company: ${req.body.company}</li>
           <li>Email: ${req.body.email}</li>
           <li>Phone: ${req.body.phone}</li>
           <li>Country : ${req.body.country}</li>
           <li>Address : ${req.body.address}</li>
           <li>Suite : ${req.body.secondAddress}</li>
           <li>Suite : ${req.body.city}</li>
           <li>Suite : ${req.body.zip}</li>
           
         </ul>
         <p>${req.body.notes}</p>
         
         <li><a href="${req.body.linkk}"> download the invoice</a>
   
         </body></html>
         `;
         
     // create reusable transporter object using the default SMTP transport
     let transporter = nodemailer.createTransport({
       host: 'mail.airlinesalerts.com',
       port: 26,
       secure: false, // true for 465, false for other ports
       auth: {
           user: 'test@airlinesalerts.com', // generated ethereal user
           pass: 'Qsdf12300'  // generated ethereal password
       },
       tls:{
         rejectUnauthorized:false
       }
     });
   
     // setup email data with unicode symbols
     let mailOptions = {
         from: '"Bosphorus Contact" <test@airlinesalerts.com>', // sender address
         to: 'test@airlinesalerts.com,moukimhfaid@gmail.com,moukim1@yahoo.com', // list of receivers
         subject: 'Node Contact Request', // Subject line
         html: output // html body
     };
   
     // send mail with defined transport object
     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             return console.log(error);
         }
         console.log('Message sent: %s', info.messageId);   
         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
   
     });
     }

  }
  else if (req.body.type=="contact"){

    const output = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
    <html><body>
      <p> A new message sent from myBosphorus by ${req.body.name}</p>
      <h3>Subject</h3>
      <h4>${req.body.subject}</h4>
      
      <p>${req.body.message}</p>
      
      <h5>From ${req.body.email}</h5> 

      </body></html>
      `;
      const clientOutput = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
      <html><body>
      <h2>Your message has been received successfully we'll get back to you shortly</h2>
      </body></html>

      `


       // create reusable transporter object using the default SMTP transport
       let transporter = nodemailer.createTransport({
        host: 'mail.airlinesalerts.com',
        port: 26,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'test@airlinesalerts.com', // generated ethereal user
            pass: 'Qsdf12300'  // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
      });
    
      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Bosphorus Contact" <test@airlinesalerts.com>', // sender address
          to: 'test@airlinesalerts.com', // list of receivers
          subject: 'new contact message', // Subject line
          html: output // html body
      };
      let arrRec = [];
      arrRec.push(req.body.email);
      let mailOptions2 = {
        from: '"Bosphorus Contact" <test@airlinesalerts.com>', // sender address
        to: arrRec, // list of receivers
        subject: 'Message Received', // Subject line
        html: clientOutput // html body
    };
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);   
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
      });
      transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
    });
      transporter.close()








  }


  });


  module.exports = router;
