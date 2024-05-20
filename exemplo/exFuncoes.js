// Construir um menu que é possível escolher um exercicio entre os exercicios anteriores, para ser executado. 
//Faça com que o menu repita a sua execução, disponibilize as opções para o usuário, até que seja digitado "sair"

function ordemCrescente() {
    let primeiroNumero = parseInt(prompt("Digite o primeiro numero"))
    let segundoNumero = parseInt(prompt("Digite o segundo numero"))
    let terceiroNumero = parseInt(prompt("Digite o terceiro numero"))
    
    if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero){
        console.log ("Os numeros estao em ordem correta")
    }
    else{
        console.log ("Os numeros NAO estao em ordem correta")
    }
}

function diaSemana() {
    let numero = prompt("Digite um numero de 1 a 7: ")

    if(numero== 1) {
    console.log("segunda-feira")
    }

    if(numero== 2) {
    console.log("terça-feira")
    }

    if(numero== 3) {
    console.log("quarta-feira")
    }

    if(numero== 4) {
    console.log("quinta-feira")
    }

    if(numero== 5) {
    console.log("sexta-feira")
    }

    if(numero== 6) {
    console.log("sabádo")
    }

    if(numero== 7) {
    console.log("domingo")
    }
}

function maiordeidade() {
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    
    if(idade >= 18){
        console.log("Você é maior de idade");
        console.log("Sua idade é " + idade);
    }
    else{
        console.log("Você é menor de idade");
        console.log("Sua idade é " + idade);
    }
}

function numAte50() {
    for (let num = 0; num <= 50; num++) {
        if (num % 2 !== 0) {
            console.log (num)
        }
    }
}

function contagemregressiva() {
    let numero = parseInt(prompt("Digite um número para a contagem regressiva: "));

    console.log("Contagem regressiva está começando em: " + numero);

    while(numero >= 0){
    console.log(numero);
    numero--;
}

console.log("Contagem regressiva finalizada!");
}


function numPares() {
    let num = 0;

    console.log("Números pares de 0 a 20: ")

    while(num <= 20){
    if(num%2 == 0){
        console.log(num)
    }
    num++;
}
}


let resposta = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Ordem Crescente\n2 - Exercicio Dias da semana\n3 - Exercicio Maior de idade\n4 - Exercicio até 50\n5 - Exercicio Contagem regressiva\n6 - Exercicio Numeros pares ate 20")

while (resposta != "sair") {

    switch (resposta) {
        case "1":
            ordemCrescente()
            break;

        case "2":
            diaSemana()
            break;

        case "3":
            maiordeidade()
            break;

        case "4":
            numAte50()
            break;

        case "5":
            contagemregressiva()
            break;

        case "6":
            numPares()
            break;

        default:
            break;
    }

    resposta = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Ordem Crescente\n2 - Exercicio Dias da semana\n3 - Exercicio Maior de idade\n4 - Exercicio até 50\n5 - Exercicio Contagem regressiva\n6 - Exercicio Numeros pares ate 20")
    console.clear()
}