const express = require('express');
const produtosController = require('../controller/produtoController');

const router = express.Router();

router.get('/:searchInput', produtosController.getProdutos);

module.exports = router;
