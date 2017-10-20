const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.home)
router.get('/page1', indexController.page1)
router.get('/calc', indexController.calc)
router.get('/even/:num', indexController.even)

module.exports = router