// OBJETO JS

// OBJETOS SÃO DEFIDOS POR CHAVE E VALOR

// Como criar um objeto no JS?
let pessoa = { 
    nome: "Fulano",
    idade: 22,
}

console.log (pessoa)

// Como acessar uma chave? variante.nome da chave
console.log(pessoa.nome)


// Como adicionar um par chave-valor em um objeto?

// variante. nome da nova chave = valor 
pessoa.altura= 1.77

// Como remover uma chave de um objeto?
// delete var.chave desejada
delete pessoa.altura
console.log(pessoa)

// Como percorrer uma chave de um objeto?

for(let chave in pessoa){
    console.log(chave)
}


