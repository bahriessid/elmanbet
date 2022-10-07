const express = require('express')
const router = express.Router()
const {AddProduct} = require('../controllers/ProductController')

router.post('/',AddProduct)

module.exports = router