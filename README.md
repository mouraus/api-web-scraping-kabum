
# api-web-scraping-kabum
É um projeto criado com fins de estudo em web scrapping utilizando express e purpetter.
Ele busca produtos do site da kabum e salva em um arquivo .json contendo as informações dos produtos encontrados.

## Instalação

```bash
  git clone https://github.com/mouraus/api-web-scraping-kabum.git
  cd api-web-scraping-kabum
  npm i
  npm start
```
    
## Documentação da API

#### Retorna todos os itens

```http
  GET /api/produto/{searchInput}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `searchInput` | `string` | **Obrigatório**. Produto que será buscado no site da kabum |

#### Retorno

```http
  GET /api/produto/{searchInput}
```

    "OK"

#### 
Salva todos os produtos encotrados dentro da pasta produtos.
Para cada página encontrada ele irá criar um produtos-kabum-{pagina buscada}.json

