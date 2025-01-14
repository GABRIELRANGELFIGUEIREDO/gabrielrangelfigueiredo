let prompt = require('prompt-sync')();
console.log("Bem-vindo à sua calculadora!\n");
console.log("Escolha uma opção:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");
let escolha = Number(prompt("Escolha uma opção:\n"));
let n1
let n2
let resultado
if (escolha == 1) {
    let n1 = Number(prompt("digite o primeiro numero"));
    let n2 = Number(prompt("digite o segundo numero"));
    resultado = n1 + n2;
    console.log("O resultado da soma é:\n", resultado);
} else {
    if (escolha == 2){
        let n1 = Number(prompt("digite o primeiro numero"));
        let n2 = Number(prompt("digite o segundo numero"));
        resultado = n1 - n2;
        console.log("O resultado da subtração é:\n", resultado);
          
} else {
    if(escolha == 3){
        let n1 = Number(prompt("digite o primeiro numero"));
        let n2 = Number(prompt("digite o segundo numero"));
        resultado = n1 * n2;
        console.log("O resultado da multiplicacao é:\n", resultado);
    }
    if(escolha == 4){
        let n1 = Number(prompt("digite o primeiro numero"));
        let n2 = Number(prompt("digite o segundo numero"));
        resultado = n1 / n2;
        console.log("O resultado da divisao é:\n", resultado);
    }
}
}
