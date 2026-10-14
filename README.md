# Divolta Autopeças

Site responsivo em português, feito com HTML, CSS e JavaScript, sem dependências de execução.

## Abrir

Abra `index.html` no navegador ou execute no diretório:

```powershell
python -m http.server 3000
```

Acesse `http://localhost:3000`.

## Recursos

- Busca por peça, marca, código e modelo, com tratamento de acentos.
- Filtros por categoria e veículo, ordenação por preço e nome.
- Favoritos e carrinho persistidos no navegador, ajuste de quantidade e subtotal.
- Layout responsivo, ilustrações SVG próprias e navegação por teclado.

O catálogo, os preços e as compatibilidades são demonstrativos. A seleção por veículo não considera ano ou motorização. O botão de revisão exibe o resumo local; não realiza pedidos ou pagamentos. Para operar a loja, é necessário integrar estoque, compatibilidade real, frete, pagamento e pedidos. Edite o array `products` em `app.js` para personalizar o catálogo. As fontes usam Google Fonts, com alternativas locais caso não carreguem.
