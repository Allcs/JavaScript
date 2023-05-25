// Arrays permite armazenar diversos  elementos


// Como criar um array? 
let arr = ["Fulano",35,1.90,true]

console.log(arr)

console.clear ()
// Como acessar os elementos do array

// Obs: Os indíces sempre começam do 0
console.log("Primeiro Elemento:", arr[0])
console.log("Segundo Elemento:", arr[1])
console.log("Terceiro Elemento:", arr[2])
console.log("Quarto Elemento:", arr[3])


// Como obter o tamanho do array? Saber a quantidade de elementos dentro do array(tamanho do array)

console.log("Tamanho do Array", arr.length)

// Percorrendo arrays

console.clear()
// Para cada "elemento" do Array, imprima os elementos
for (let elemento of arr) {
    console.log(elemento)
}

// Para cada indice dentro do Array, imprima o indice e o elemento
for (let indice in arr){
    console.log(indice, arr[indice])
}
