const produtoService = require('../service/produtoService');

async function getProdutos(req, res) {
  try {
    const { searchInput } = req.params;
    const response = await produtoService.getAllProdutos(searchInput);
    res.status(200).json(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
}
async function getPageProdutos(req, res) {
  try {
    const { pagina, searchInput } = req.params;
    const response = await produtoService.getPageProdutos(searchInput, pagina);
    res.status(200).json(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err.message);
  }
}
module.exports = {
  getProdutos,
  getPageProdutos,
};
