export async function buscarDev(usuario) {
    try {
        const linkBase = "https://api.github.com/users/"
        const response = await fetch(`${linkBase}${usuario}`)

        if(!response.ok) {
            throw new error("Erro de busca...")
        }




        const body = await response.json()
        return body
    }
    catch (error) {
        console.log(error)
    }
}


async function verEquipe() {

}


async function removerDev(){

}