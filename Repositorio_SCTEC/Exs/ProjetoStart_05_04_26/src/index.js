import { stdin, stdout } from "process"; //standardIn E standardOut -> entrada padrão e saída padrão
import { createInterface } from "node:readline/promises";

import { adicao } from "./services/adicao.js";
import { subtrair } from "./services/subtrair.js"
import { multiplicar } from "./services/multiplicar.js"
import { divisao } from "./services/divisao.js"


async function main() {
  const interfaceConsole = createInterface(stdin, stdout);

  const respostaOperação = await interfaceConsole.question("Digite a operação:\n");
  const aString = await interfaceConsole.question("Digite o primeiro número: \n");
  const bString = await interfaceConsole.question("Digite o segundo número: \n");

  const a = Number(aString)
  const b = Number(bString)

  if(Number.isNaN(a) || Number.isNaN(b)) {
    interfaceConsole.close()
    throw new Error("Digite apenas números para executar a operação")
  }

  // 1- Fazer a transformação para número -> Caso o usuário não digite um número, jogue um erro
  // 2- Criar as outras operações uma em cada arquivo e importar
  // BÔNUS: Resolver o problema do console preso quando a aplicação dá erro.

  switch (respostaOperação) {
    case "+":
      const respostaAdd = adicao(a, b);
      console.log(`Resposta da operação: ${respostaAdd}`);
      break;

    case "-":
        const respostaSub = subtrair(a, b)
        console.log(`Resposta da operação: ${respostaSub}`)
      break;

    case "*":
        const respostaMult = multiplicar(a, b)
        console.log(`Resposta da operação: ${respostaMult}`)
      break;

    case "/":
        const respostaDiv = divisao(a, b)
        console.log(`Resposta da operação: ${respostaDiv}`)
      break;


    default:
        interfaceConsole.close();
        throw new Error(`Não suportamos essa operação`);
        break
  }

  interfaceConsole.close();
}

main().catch(console.log);