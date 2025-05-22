// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

let precoProduto
let carrinho = []
let maisProdutos

do{
const produtosEscolhidos = prompt('Qual produto você deseja comprar? (Camisa, Calça, Sapato ou Boné)');

// Verifica se o produto escolhido está disponível
for (let i = 0; i < produtosDisponiveis.length; i++) {
  if (produtosEscolhidos === produtosDisponiveis[i].nome) {
    console.log(`Produto ${produtosEscolhidos} encontrado!`);
    precoProduto = produtosDisponiveis[i].preco;
}}

const qtdProduto = prompt (`O produto ${produtosEscolhidos} custa: R$ ${precoProduto.toFixed(2)}. Quantas unidades você deseja adicionar ao carrinho?`);

carrinho.push({
  nome: produtosEscolhidos,
  preco: precoProduto,
  quantidade: qtdProduto,
});

alert(`Você adicionou ${qtdProduto} unidades do produto ${produtosEscolhidos} ao carrinho!`);

maisProdutos = confirm(`Deseja adicionar mais produtos?`);
}while(maisProdutos === true)

alert("Os produtos ")