const express = require('express')
const router = express.Router()
const tokenRouter = require('./tokenRouter')

router.use('/', tokenRouter)

module.exports = router
