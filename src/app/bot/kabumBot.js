/* eslint-disable eqeqeq */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-constant-condition */
const puppeteer = require('puppeteer');

async function procurarProdutos(pagina, page, searchInput) {
  let temProximaPagina = false;
  await page.goto(`https://www.kabum.com.br/busca/${searchInput}?page_number=${pagina}&page_size=100&facet_filters=&sort=most_searched`);

  const response = await page.evaluate(() => {
    const nenhumProdutoEncontrado = window.document.querySelector('#listingEmpty') != null;
    if (nenhumProdutoEncontrado) {
      throw new Error('Nenhum produto encontrado');
    }
    const produtos = [];
    let contador = 1;

    Array.from(window.document.querySelectorAll('.productCard')).forEach((c) => {
      temProximaPagina = document.querySelector('#listingPagination > ul > li.next.disabled') == undefined;
      const produtoElement = c.childNodes[1];
      const produto = {
        id: contador,
        nome: '',
        link: '',
        urlImg: '',
      };

      produtoElement.lastChild.childNodes.forEach((p) => {
        if (p.nodeName == 'BUTTON') {
          produto.nome = p.textContent;
        }
      });

      produto.link = produtoElement.href;
      produto.urlImg = produtoElement.firstChild.currentSrc;
      produtos.push(produto);
      contador += 1;
    });

    return { produtos, temProximaPagina };
  });
  return response;
}
async function getAllProdutos(page, searchInput) {
  try {
    let i = 1;
    const produtos = [];

    let pr;
    while (true) {
      pr = await procurarProdutos(i, page, searchInput);
      produtos.push({ items: pr.produtos, pagina: i });
      i += 1;
      if (!pr.temProximaPagina) {
        break;
      }
    }
    return produtos;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getPageProdutos(page, searchInput, pagina) {
  try {
    const produtos = await procurarProdutos(pagina, page, searchInput);
    produtos.pagina = pagina;
    return produtos;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function procuraAllProdutos(searchInput) {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    const response = await getAllProdutos(page, searchInput);
    await browser.close();
    return response;
  } catch (err) {
    await browser.close();
    throw err;
  }
}

async function procuraPageProdutos(searchInput, pagina) {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    const response = await getPageProdutos(page, searchInput, pagina);
    await browser.close();
    return response;
  } catch (err) {
    await browser.close();
    throw err;
  }
}

module.exports = { procuraAllProdutos, procuraPageProdutos };
