const router = require("express").Router();
const controller = require('./controller');

// Get all products or filter by category (POST)
router.post('/Products', controller.getAllProducts);

// Get all products (GET)
router.get('/products', controller.getAllProducts);

// Search products by name
router.get('/products/search', controller.searchProducts);

module.exports = router;