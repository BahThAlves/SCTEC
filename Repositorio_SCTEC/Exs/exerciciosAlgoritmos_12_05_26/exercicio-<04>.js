// Função simulada que demora 2 segundos
function buscarClienteNoBanco() {
    return new Promise(resolve => setTimeout(() => resolve("Maria Silva")))
}
// 1. Criar uma função assíncrona para iniciar o sistema
// 2. Mostrar mensagem "Buscando dados..."
// 3. Pausar a execução e esperar o resultado da função buscarClienteNoBa
// 4. Salvar esse resultado numa variável
// 5. Mostrar a mensagem "Cliente encontrado:" junto com o nome


async function iniciarSistema() {
    console.log("Buscando dados...")

    const cliente = await buscarClienteNoBanco()

    console.log(`Cliente encontrado: ${cliente}`)
}

iniciarSistema()