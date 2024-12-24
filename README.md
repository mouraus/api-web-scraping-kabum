
# api-web-scraping-kabum
É um projeto criado com fins de estudo em web scrapping utilizando express e purpetter.

## Instalação

```bash
  git clone https://github.com/mouraus/api-web-scraping-kabum.git
  cd api-web-scraping-kabum
  npm i
  npm run start
```
    
## Documentação da API

#### Retorna todos os items

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
  [
        {
          items: [
          "id": 1,
                "nome": "Computador Completo Easypc 52364, Intel Core i5, 8GB, SSD 256GB, Sistema Windows 10, Preto + Monitor LED 19.5 Polegadas",
                "link": "https://www.kabum.com.br/produto/260874/computador-completo-easypc-52364-intel-core-i5-8gb-ssd-256gb-sistema-windows-10-preto-monitor-led-19-5-polegadas",
                "urlImg": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/260874/Computador-Completo-Easypc-52364-Intel-Core-i5-8GB-SSD-256GB-Sistema-Windows-10-Preto-Monitor-LED-19-5-Polegadas_1689953297_m.jpg"
        ],
          pagina: 1
        },
    ]

#### 
#### Retorna todos os items por página

```http
  GET /api/produto/{searchInput}/{pagina}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `searchInput` | `string` | **Obrigatório**. Produto que será buscado no site da kabum |
| `pagina` | `int` | **Obrigatório**. Página que será buscada no site da kabum|


#### Retorno

```http
  GET /api/produto/{searchInput}/{pagina}
```
{
  "produtos":  
  [
        {
          "id": 1,
          "nome": "Computador Completo Easypc 52364, Intel Core i5, 8GB, SSD 256GB, Sistema Windows 10, Preto + Monitor LED 19.5 Polegadas",
          "link": "https://www.kabum.com.br/produto/260874/computador-completo-easypc-52364-intel-core-i5-8gb-ssd-256gb-sistema-windows-10-preto-monitor-led-19-5-polegadas",
          "urlImg": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/260874/Computador-Completo-Easypc-52364-Intel-Core-i5-8GB-SSD-256GB-Sistema-Windows-10-Preto-Monitor-LED-19-5-Polegadas_1689953297_m.jpg"
        },
    ],
    "temProximaPagina": true,
    "pagina": "1"
}


#### 