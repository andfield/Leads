const {following}=require('../models')
const {User}=require('../models')

module.exports={
    async getAllUsers(req, res) {
        try {
            const users=await User.findAll({
                limit: 10
            })
            res.send(users)
        } catch (err) {
            res.status(500).send({
                error: 'OOPS Something Went Wrong in finding Peoples!!'
            })
        }
    },

    async follow(req, res) {
        try {
            const result=await following.create(req.body)
            res.send(result)

        } catch (err) {
            res.status(500).send({
                error: 'OOPS Something Went Wrong in following Peoples!!'
            })
        }
    }
}
