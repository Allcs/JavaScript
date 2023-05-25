// FUNCOES JS

// Servem para reaproveitar parte do código para manutenção

// Definindo a função
function saudacao() {
    console.log("Olá, seja bem-vinda(o) ao nosso curso de JS")
}

saudacao()

console.clear()

// Como enviar parâmetros para as funções

// Exemplo: definindo nome a saudação de site

function saudacao(nome) {
    console.log(nome)
    console.log(`Olá, ${nome}! seja bem-vinda(o) ao nosso curso de JS`)
}
// Obs: se a função espera um parâmetro, você precisa definir o parametro a ser recebido
saudacao("allcs")

console.clear()

// Como adicionar mais de um parâmetro dentro da função?
function saudacao(nome, curso) {
    console.log(`Olá, ${nome}! seja bem-vinda(o) ao nosso curso de ${curso}`)
}

saudacao("allcs", "Javascript")

console.clear()
// Retorno da Função

function soma(numero1, numero2) {
    return numero1 + numero2
}
const resultado = soma(10, 20)

console.log(resultado)

console.clear
// Ex: retornando true quando um número é maior do que 50

function maiorDoQue50(numero) {
    if (numero > 50)
        return true
}

return false