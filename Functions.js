//let x = " "

//console.log(x)
//x = "Oi!"

//1) Declara a função
function imprimeTexto (texto) {
    console.log(texto)
}

//2) executa a função 1 ou + vezes

imprimeTexto("Oi!")
imprimeTexto("Oi oi")
imprimeTexto(soma())

//3) Três formas de escrever funções

function soma(){
    return 2 + 2 //Tem que ser a ultima linha antes de fechar a função.
}

//console.log (soma())