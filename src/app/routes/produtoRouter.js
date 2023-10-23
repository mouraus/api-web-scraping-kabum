const express = require('express');
const produtosController = require('../controller/produtoController');

const router = express.Router();

router.get('/', produtosController.getProducts);

module.exports = router;
