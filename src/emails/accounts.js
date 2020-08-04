const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
    to: email,
    from: 'tusharlawand@gmail.com',
    subject: 'thanks for joining',
    text: `welcome to the app, ${name}, let me know how you will gat along the app`
    })
}

const sendCancelledEmail = (email,name)=>{
    sgMail.send({
    to: email,
    from: 'tusharlawand@gmail.com',
    subject: 'You unsubscribe this site',
    text: `thank for using our service, ${name}, what should we do get along`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelledEmail
}