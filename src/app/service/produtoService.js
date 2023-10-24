const kabumBot = require('../bot/kabumBot');

function getAllProdutos(searchInput) {
  return kabumBot.procuraAllProdutos(searchInput);
}

function getPageProdutos(searchInput, pagina) {
  return kabumBot.procuraPageProdutos(searchInput, pagina);
}

module.exports = {
  getAllProdutos,
  getPageProdutos,
};
