let prompt = require('prompt-sync') ();
let a = Number(prompt("Digite o valor de a:"));
let b = Number(prompt("Digite o valor de b:"));
let soma= a+b;
let subtracao= a-b;
let multiplicacao= a*b;
let divisao= a/b;

console.log("A soma corresponde ao valor:\n",soma);
console.log("A subtraçao corresponde ao valor:\n",subtracao);
console.log("A multiplicação corresponde ao valor:\n",multiplicacao);
console.log("A divisao corresponde ao valor:\n",divisao);