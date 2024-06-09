const express = require('express')
const productContrller = require('../controller/product');
const router = express.Router();
router
.post('/',productContrller.createProduct)
.get('/',productContrller.getAllProducts)
.get('/:id',productContrller.getProduct)
.put('/:id',productContrller.replaceProduct)
.patch('/:id',productContrller.updateProduct)
.delete('/:id',productContrller.deleteProduct)

exports.router = router;