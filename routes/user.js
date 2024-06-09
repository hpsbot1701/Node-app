const express = require('express')
const userContrller = require('../controller/user');
const router = express.Router();
router
.post('/',userContrller.createUser)
.get('/',userContrller.getAllUsers)
.get('/:id',userContrller.getUser)
.put('/:id',userContrller.replaceUser)
.patch('/:id',userContrller.updateUser)
.delete('/:id',userContrller.deleteUser)

exports.router = router;