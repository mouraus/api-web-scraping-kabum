async function getProducts(req, res) {
  try {
    res.json('funcionando');
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = {
  getProducts,
};
