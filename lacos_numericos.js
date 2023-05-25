// Acumuladores

const inpu = require("readline-sync");

let acumulador = 0;

// Irá somar 0+10;
acumulador += 10

// Irá somar o acumulador +1
acumulador++
console.log(acumulador)

console.clear()

// Estrutura for utilizada para repetição

// for (variavel + inicial; variavel + resultado final, variavel+1)
for (let i = 0; i < 10; i++)
    console.log("Repetição", i)

console.clear ()
// Exemplo de problema
// Uma professora precisa somar três notas e dividir o valor por 3, como você pode ajudar?

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    // Como colocar uma variavel dentro de uma string?
    // Colocar Crase no começo e no final da string e dentro da string adicionar ${nome da variavel} no local desejado
    nota = Number(inpu.question(`Informe a nota ${i} do aluno:`))

    soma = soma + nota
}

console.log(`A média do aluno é ${soma / 3}.`)


