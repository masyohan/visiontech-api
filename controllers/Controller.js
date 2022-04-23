class Controller {
    static Login(req,res) {
        res.send('Login')
    }
    static Private(req,res) {
        res.send('Private')
    }
    static Public(req,res) {
        res.status(200).json({
            message: 'Public Page',
            success: true
        })
    }
}

module.exports = Controller