const express = require('express');
const routerProduto = require('./produtoRouter');

const router = express.Router();

router.use('/produto', routerProduto);

module.exports = router;
