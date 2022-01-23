//Parametros de Função

function soma(num1, num2){

    return num1 + num2
}

console.log(soma(9, 5))
console.log(soma(93, 54))
console.log(soma(92, -565))

//Parametros de Argumentos

//Ordem dos Parametros, importa no resultado.

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e a minha idade é ${idade}`
}

console.log(nomeIdade(33, "Felipe"))

//Função Multiplicação
function multiplica(num1, num2 = 8){
    return num1 * num2
}

//console.log(multiplica(soma(4, 5), soma(6, 7)))
console.log(multiplica(soma(4, 5)))