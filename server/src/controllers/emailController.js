var nodemailer=require('nodemailer')

module.exports={

    async StayTuned(req, res) {
        try {
            var transporter=nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'siddharththakur76@gmail.com',
                    pass: '@siddharth@'
                }
            })

            var mailOptions={
                from: 'siddharththakur76@gmail.com',
                to: req.body.email,
                subject: req.body.message,
                text: 'Thanks for showing your interest in leads you are much appriciated -Sid'
            }

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {

                    res.send(error)
                } else {
                    res.send(true)
                }
            })

        } catch (err) {
            res.status(500).send({
                error
            })
        }
    }
}