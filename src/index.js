// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

const produtosEscolhidos = prompt('Qual produto você deseja comprar? (Camisa, Calça, Sapato ou Boné)');
// Verifica se o produto escolhido está disponível
console.log(produtosEscolhidos);

let precoProduto = 0;

for (let i = 0; i < produtosDisponiveis.length; i++) {
  if (produtosEscolhidos === produtosDisponiveis[i].nome) {
    console.log(`Produto ${produtosEscolhidos} encontrado!`);
    precoProduto = produtosDisponiveis[i].preco;
}}

const qtdProduto = prompt (`O produto ${produtosEscolhidos} custa: R$ ${precoProduto.toFixed(2)}. Quantas unidades você deseja adicionar ao carrinho?`);
console.log(qtdProduto);

let carrinho = [];

carrinho.push({
  nome: produtosEscolhidos,
  preco: precoProduto,
  quantidade: qtdProduto,
});

alert(`Você adicionou ${qtdProduto} unidades do produto ${produtosEscolhidos} ao carrinho!`);

let maisProdutos = confirm(`Deseja adicionar mais produtos?`);
console.log(maisProdutos);

