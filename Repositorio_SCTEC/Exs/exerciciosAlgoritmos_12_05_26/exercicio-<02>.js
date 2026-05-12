// A lista de caixas que chegou
const caixas = [10, 25, 5, 12, 8];
// 1. Criar a variável acumuladora começando em 0 (o papel em branco)
// 2. Iniciar o laço para olhar caixa por caixa
// 3. Em cada volta, somar a quantidade da caixa atual com o valor que já
// 4. Fora do laço, mostrar o total do estoque

let somaDeProdutos = 0
for(let i = 0; i < caixas.length; i++) {
    const produtosNaCaixa = caixas[i]
    somaDeProdutos += produtosNaCaixa
}

console.log(`O total em estoque é: ${somaDeProdutos} produtos`)