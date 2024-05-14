//Exercício 4 Notas escolares
//Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
//notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
//notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

alert ("Informe as notas de 0 a 10.")
let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let nota4 = parseFloat(prompt("Digite a quarta nota: "))

let notafinal = (nota1 + nota2 + nota3 + nota4) /4
if (notafinal >= 7){
    console.log ("APROVADO");
} 
else if (notafinal <= 5) {
    console.log ("REPROVADO")
} 

else {
    console.log ("RECUPERACAO")
} 
    
