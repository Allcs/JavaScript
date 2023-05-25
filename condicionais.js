// ESTRUTURAS CONDICIONAIS


// if = se

// else if = ou se

// else = Do contrário

let idade = 18;

if (idade >= 18){
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}


// Se media >= 7, aprovado
// Se media <7 e media >= 5, Recuperação
// Se media <5, Reprovado

console.clear() // Limpando as saidas anteriores


let media = 5

if (media >= 7) {
    console.log("Aprovado 06 0/")
} else if( media >=5) {
    console.log("Está de recuperação Recruta")
} else{
    console.log("Você não estudou recruta. Reprovado")
}