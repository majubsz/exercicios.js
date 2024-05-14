//Exercício 5: Verificação de números em ordem crescente
//Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
//crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let primeiroNumero = parseInt(prompt("Digite o primeiro numero"))
let segundoNumero = parseInt(prompt("Digite o segundo numero"))
let terceiroNumero = parseInt(prompt("Digite o terceiro numero"))

if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero){
    console.log ("Os numeros estao em ordem correta")
}
else{
    console.log ("Os numeros NAO estao em ordem correta")
}