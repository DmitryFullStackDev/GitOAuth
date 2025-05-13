const express = require('express')
const router = express.Router()
const tokenController = require('../controlles/tokenController')

router.get('/authenticate/:code', tokenController.getToken)
router.get('/', tokenController.getWelcome)


module.exports = router
