const kabumBom = require('../bot/kabumBot');

function getAllProdutos(searchInput) {
  return kabumBom.procuraAllProdutos(searchInput);
}

function getPageProdutos(searchInput, pagina) {
  return kabumBom.procuraPageProdutos(searchInput, pagina);
}

module.exports = {
  getAllProdutos,
  getPageProdutos,
};
