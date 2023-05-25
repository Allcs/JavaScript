// > COERÇÃO (CONVERSÃO) DE TIPOS


// - 1 Coerção explicita (Manual)
const numero = 10;

console.log (numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)


// Converter const em numero
console.log(Number('12312312'))

// Converte em números quebrados
console.log(parseFloat('132123123123.42'))

// Converte em números inteiros
console.log(parseInt('132123123123.42'))



// Converte em verdadeiro ou falso (String)
console.log(Boolean(1))


console.clear


// - 2 Coerção Implícita (Automática)

// O JS CONCATENA EM TEXTO A SOMA... Resultado será
console.log(10+'1')

// EM OUTRAS FUNÇÕES ELE ENTENDE COMO NÚMERO
console.log(10*'1')

// NaN significa Not A Number
console.log(10 - 'asaasas')



