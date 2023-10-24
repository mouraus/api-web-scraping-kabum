const express = require('express');
const produtosController = require('../controller/produtoController');

const router = express.Router();

router.get('/:searchInput', produtosController.getProdutos);
router.get('/:searchInput/:pagina', produtosController.getPageProdutos);

module.exports = router;
