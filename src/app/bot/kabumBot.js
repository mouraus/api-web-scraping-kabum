/* eslint-disable eqeqeq */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-constant-condition */
const puppeteer = require('puppeteer');
const fs = require('node:fs');

async function procurarProdutos(pagina, page, searchInput) {
  let temProximaPagina = false;
  await page.goto(`https://www.kabum.com.br/busca/${searchInput}?page_number=${pagina}&page_size=100&facet_filters=&sort=most_searched`);

  const response = await page.evaluate(() => {
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
async function getProdutos(page, searchInput) {
  try {
    let i = 1;
    let pr;
    while (true) {
      pr = await procurarProdutos(i, page, searchInput);
      fs.writeFileSync(`produtos/produtos-kabum-${i}.json`, JSON.stringify({ produtos: pr.produtos }), (err) => console.log(err));
      i += 1;
      if (!pr.temProximaPagina) {
        break;
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function iniciaBotKabum(searchInput) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await getProdutos(page, searchInput);
  await browser.close();
}

module.exports = { iniciaBotKabum };
