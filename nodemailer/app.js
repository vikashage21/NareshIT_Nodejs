const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "vk220783@gmail.com",
        pass: "uhdk kcbk woac ufcv"
    }
})

let mailOptions = {
    from: "vk220783@gmail.com",
    to: "vikashsharmamerndeveloper@gmail.com",
    subject: "testing",
    text: "hello world from node js"
}


// sending mail

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('send message successful', info)
})