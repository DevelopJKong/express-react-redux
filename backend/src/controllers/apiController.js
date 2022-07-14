import nodemailer from "nodemailer";

const config = {
    service: 'gmail',
    host:"smtp.gmail.com",
    port:"587",
    secure:false,
    auth: {
        user: process.env.GOOGLE_MAIL,
        pass: process.env.GOOGLE_PASSWORD
    }
}

const sendMailer = async (data) => {
    const transporter = nodemailer.createTransport(config);
    transporter.sendMail(data,(err,info) => {
        if(err) {
            console.log(err);
        } else {
            return info.response;
        }
    });
}


export const getUser = (req,res) => {
    
}

export const postMail = async (req,res) => {
    const response = sendMailer(req.body.param);
    res.send(response);
}