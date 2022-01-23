function apresentar(nome){
    return `meu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`

const soma = (num1, num2) => num1 + num2

console.log(soma)
console.log(apresentarArrow)

//Arrow com + de 1 linha
const somaNumPequenos = (num1, num2) => {
    if (num1 || num2 > 10){

    return "Somente numeros de 1 a 9"
} else {
    return num1 + num2
    }
}