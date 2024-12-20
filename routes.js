const router = require("express").Router();

const controller  = require('./controller')

router.get('/Products',controller.getAllProducts)
router.get('/createProduct',controller.createProduct)
module.exports = router;
