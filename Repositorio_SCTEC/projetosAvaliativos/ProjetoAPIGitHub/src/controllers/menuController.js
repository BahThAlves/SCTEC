import {menuView} from "../views/menuView.js"
import {buscarDev} from "../services/services.js"

export async function menuController(interfaceConsole) {
    await menuView()
    const opcaoEscolhida = await interfaceConsole.question("Digite o número escolhido:\n(1/2/3/4)")
    


    switch (opcaoEscolhida) {
        case "1":
            const usuario = await interfaceConsole.question("Digite o User: ")
            buscarDev(usuario)
            break;

        case "2":
            console.log("b")
            break;

        case "3":
            console.log("c")
            break;

        case "4":
            interfaceConsole.close()
            break

        default:
            break;
    }
}