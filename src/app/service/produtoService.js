const kabumBom = require('../bot/kabumBot');

async function getProdutos(searchInput) {
  try {
    await kabumBom.iniciaBotKabum(searchInput);
  } catch (err) {
    throw new Error(`Não foi possível realizar a busca de ${searchInput} no site da kabum`);
  }
}

module.exports = {
  getProdutos,
};
