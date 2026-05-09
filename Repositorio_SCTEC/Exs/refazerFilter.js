function meuFilter(array, funcaoDeFiltro) {
    let filtrado = []
    for(let i = 0; i < array.length; i++) {
        const atual = array[i]

        if(funcaoDeFiltro(atual)) {
            filtrado.push(atual)
        }
    }

return filtrado
}