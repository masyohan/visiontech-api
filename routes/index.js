const router = require('express').Router()
const Controller = require('../controllers/Controller')

router.post('/login', Controller.Login)
router.get('/private', Controller.Private)
router.all('/public', Controller.Public)

module.exports = router