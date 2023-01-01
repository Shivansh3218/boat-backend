const router = require("express").Router();

const controller  = require('./controller')

router.post('/Products',controller.getAllProducts)
router.post('/createProduct',controller.createProduct)
module.exports = router;
