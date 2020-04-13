const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        //schema to set rules for email and password
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const { error, value } = Joi.validate(req.body, schema)

        if (error) {
            var errorType = error.details[0].context.label
            if (errorType == 'email') {
                res.status(400).send({
                    error: 'Invalid email'
                })
            } else if (errorType == 'password') {
                res.status(400).send({
                    error: 'Invalid password'
                })
            } else {
                res.status(400).send({
                    error: 'Ohh sheeit.. Server Down'
                })

            }
        }
        else {
            next()
        }
    }
}