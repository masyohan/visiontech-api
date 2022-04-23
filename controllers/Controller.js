const users = require('../data/user.json')
const { generateToken } = require('../helpers/jwt')

class Controller {
    static Login(req,res) {
        const { username, password } = req.body
        //check user from json file
        const findUser = users.find(user => {
            return user.username === username && user.password === password
        })
        if(findUser){
            const { id, fullname } = findUser
            const token = generateToken({ id, username })
            res.status(200).json({
                message: 'Successfully login',
                data: {
                    fullname,
                    token,
                }
            })
        } else {
            res.status(401).json({
                message: 'Unauthorized error'
            })
        }
    }
    static Private(req,res) {
        res.status(200).json({
            message: 'Private Endpoint',
            data: {
                ...req.userData
            }
        })
    }
    static Public(req,res) {
        res.status(200).json({
            message: 'Public Endpoint',
        })
    }
}

module.exports = Controller