const router = require("express").Router();
const controller = require("./controller");

// Get all products
router.get("/products", controller.getAllProducts);

// Search products
router.get("/products/search", controller.searchProducts);

module.exports = router;
