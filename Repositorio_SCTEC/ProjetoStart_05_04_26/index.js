const readlinePromises = require("node:readline/promises")
const {stdin, stdout} = require("process")


async function main() {
    const readline = readlinePromises.createInterface(stdin, stdout)

    const user = await readline.question("Qual seu User? ")


    const response = await fetch(`https://api.github.com/users/${user}`)
    const json = await response.json()


    console.log(json)

readline.close()
}

main()