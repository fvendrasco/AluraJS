// Operadores

const numero = 9
const texto = "9"

console.log(numero == texto) //== compração implicita. Só comprada o valor
console.log(numero === texto) //=== compração não implicita. Compra o valor com o tipo de dado.

//typeof para identificar o tipo do dado.

console.log(typeof numero == texto)
console.log(typeof numero === texto)

//Boas praticas usar os ===

//Conversão explicita
Number()
String()

//Operador Ternário
const idadeMinina = 18
const idadeCliente = 20

if(idadeCliente >= idadeMinina){
    console.log("Cerveja")
}else{
    console.log("Suco")
}

console.log(idadeCliente >= idadeMinina ? "Uisque" : "Refrigerante")

//Template Strings
const nome = "Felipe"
const idade = 2022-1988
const cidadeMaterna = "Santo André"

//const apresentacao = "Meu nome é "+ nome + ", minha idade é" + idade + " nasci na cidade" + cidadeMaterna

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade}, e nasci na cidade ${cidadeMaterna}`

console.log(apresentacao)