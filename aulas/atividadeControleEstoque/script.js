class Produto {
  constructor(nome, quantidade, precoUnitario) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.precoUnitario = precoUnitario;
  }

  calcularValorTotal() {
    return this.quantidade * this.precoUnitario;
  }
}

class ProdutoPerecivel extends Produto {
  constructor(nome, quantidade, precoUnitario, dataValidade) {
    super(nome, quantidade, precoUnitario);
    this.dataValidade = dataValidade;
  }

  verificarValidade() {
    const hoje = new Date();
    return hoje <= this.dataValidade;
  }
}

class Estoque {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  removerProduto(nome) {
    this.produtos = this.produtos.filter(produto => produto.nome !== nome);
  }

  verificarEstoqueDisponivel(nome) {
    const produto = this.produtos.find(produto => produto.nome === nome);
    if (produto) {
      console.log(`Quantidade disponível de ${nome}: ${produto.quantidade}`);
    } else {
      console.log(`${nome} não encontrado no estoque.`);
    }
  }

  calcularValorTotalEstoque() {
    let total = 0;
    this.produtos.forEach(produto => {
      total += produto.calcularValorTotal();
    });
    console.log(`Valor total do estoque: R$${total.toFixed(2)}`);
  }
}

// Exemplo de uso
const meuEstoque = new Estoque();

// Adicionando produtos
const produto1 = new Produto("Arroz", 10, 5.99);
const produto2 = new ProdutoPerecivel("Leite", 20, 3.49, new Date("2024-02-28"));
meuEstoque.adicionarProduto(produto1);
meuEstoque.adicionarProduto(produto2);

// Verificando disponibilidade
meuEstoque.verificarEstoqueDisponivel("Arroz");
meuEstoque.verificarEstoqueDisponivel("Leite");

// Calculando valor total do estoque
meuEstoque.calcularValorTotalEstoque();

// Removendo um produto
meuEstoque.removerProduto("Arroz");

// Verificando disponibilidade e calculando valor total novamente
meuEstoque.verificarEstoqueDisponivel("Arroz");
meuEstoque.calcularValorTotalEstoque();
