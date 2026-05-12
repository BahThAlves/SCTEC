// 1. Guardar o preço do produto
// 2. Guardar o valor do frete
// 3. Guardar o valor do desconto
// 4. Guardar o total (produto + frete - desconto)
// 5. Mostrar o total na tela


const valorDoCarrinho = 150
const valorDoFrete = 20
const valorDoCupom = 30

const total = valorDoCarrinho + valorDoFrete - valorDoCupom
console.log(`O valor total da compra é R$${total},00`)