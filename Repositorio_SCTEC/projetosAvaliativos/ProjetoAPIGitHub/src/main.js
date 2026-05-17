import {stdin, stdout} from "process"
import { createInterface } from "node:readline/promises"
import { writeFile, readFile } from "node:fs/promises"

import { menuController } from "./controllers/menuController.js"


async function main() {
    const interfaceConsole = createInterface(stdin, stdout)


    await menuController(interfaceConsole)

    interfaceConsole.close()
}

main()