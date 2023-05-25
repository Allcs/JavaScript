// LAÇOS CONDICIONAIS


// Como importar biblioteca no JS
const input = require('readline-sync')

const numero_sorteado = 5;

// metodo "input" sempre lê como texto
let numero = Number(input.question("Qual número você escolhe?") )


// Como utilizar enquanto no JS? "while" Obs: Enquanto o número for diferente do número sorteado
while (numero !== numero_sorteado) {
    console.log ("Você errou o número. Tente novamente...")

    numero = Number(input.question("Qual número você escolhe?") )
}

console.log("Você acertou!!!")


// Como utilizar enquanto no JS? "while"


