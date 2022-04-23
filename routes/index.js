const router = require('express').Router()
const Controller = require('../controllers/Controller')
const authentication = require('../middlewares/authentication')

router.post('/login', Controller.Login)
router.all('/public', Controller.Public)
//private route
router.use(authentication)
router.get('/private', Controller.Private)

module.exports = router