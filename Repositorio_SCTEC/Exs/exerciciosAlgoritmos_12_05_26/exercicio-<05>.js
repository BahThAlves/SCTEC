// Função simulada da API (Não alterar)
function buscarTransacoesAPI() {
return new Promise(resolve => setTimeout(() => resolve([
{ tipo: "venda", valor: 200 },
{ tipo: "despesa", valor: 50 },
{ tipo: "venda", valor: 100 },
{ tipo: "despesa", valor: 20 }
]), 1500));
}

async function fechamentoCaixa() {
    const valoresDoDia = await buscarTransacoesAPI()
    let valorDoCaixa = 0

    for(let i = 0; i < valoresDoDia.length; i++) {
        const tipo = valoresDoDia[i].tipo
        const valor = valoresDoDia[i].valor

        if(tipo === "venda") {
            valorDoCaixa += valor
        }
        
        if(tipo === "despesa") {
            valorDoCaixa -= valor
        }


    }

return console.log(`Saldo do dia: R$${valorDoCaixa}`)
}

fechamentoCaixa()