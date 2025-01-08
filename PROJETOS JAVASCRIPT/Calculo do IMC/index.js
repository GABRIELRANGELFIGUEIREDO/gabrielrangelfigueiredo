let prompt = require("prompt-sync")();
let nome = prompt("digite seu nome:");
let sobrenome = prompt("digite seu sobrenome:")
let idade = Number(prompt("digite sua idade:"));
let peso = Number(prompt("digite seu peso:"));
let altura = Number(prompt("digite sua altura:"));
let ano_nascimento = Number(prompt("digite seu ano de nascimento:"));
let ano_atual = Number(prompt("Em que ano voce estar?"));

IMC = peso / (altura * altura);
ano = ano_atual- idade;

console.log("Olá", nome, sobrenome, "sua idade é", idade, "seu peso é", peso);
console.log("Seu IMC corresponde ao valor:\n", IMC);
console.log("O ano do seu nascimento é:\n", ano);