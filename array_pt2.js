// ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS 


let arr1 = [30,12,45,32,29]
let arr2 = [75,40,80]

// Fatiamento: slice
// Serve para pegar determinada fração do array
console.log(arr1.slice(0,2))
console.log(arr1.slice(2))

console.clear()

// Adicionando elementos no array : push | unshift

// unshift adiciona o elemento sempre no começo do array
// push adiciona o elemento sempre no final do array

// PARA REALIZAR ESTE EXEMPLO, RETIRE O VALOR DE ARR2 ACIMA
// Array vazio
console.log("Antes de adicionar:", arr2)

// Adicionando um ou varios elementos dentro da array
arr2.push(10)

console.log("Depois de adicionar", arr2)

console.clear()
// Removendo elementos do array pop | shift

// POP remove o ultimo elemento dentro do array
// Shift remove o primeiro elemento dentro do array
console.log("Antes de remover com o pop", arr2)

arr2.pop()

console.log("Depois de remover com o pop", arr2)

console.clear()
// Concatenando arrays = JUNTANDO ARRAYS : concat

arr1.concat(arr2)

console.log(arr1.concat(arr2))

// Buscando elementos dentro do array: indexOf | lastIndexOf

// indexOf Busca o primeiro indice dentro do array 
// lastIndexOf Busca o ultimo indice dentro do array 
 
// Buscando elemento 34 dentro do array
let indiceDoElemento34 = arr1.indexOf(32)

console.log(indiceDoElemento34)

console.clear()

// OBS: TODA VEZ QUE BUSCAR UM ELEMENTO DENTRO DO ARRAY E RETORNAR COMO "-1" é porque não existe esse elemento dentro do array


// Descobrindo a existência de um elemento dentro do array: includes
console.log(arr1)


console.log(arr1.includes(10))

console.clear()
// Invertendo valores dentro de array: reverse


console.log("arr1 normal", arr1)

const arr1Invertido = arr1.reverse()

console.log("arr1 invertido", arr1Invertido)