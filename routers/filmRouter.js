const express = require('express')
const router = express.Router()
const filmController = require('../controllers/filmController')

// INDEX 
router.get('/',filmController.index)

// SHOW 
router.get('/:id',filmController.show)

module.exports = router