const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
    app.get('/status', (req, res) => {
        res.send({
            message: "Hello World"
        })
    })

    app.post('/register',
        //middleware to check if data is alg.
        AuthenticationControllerPolicy.register,
        
        AuthenticationController.register
    )

}