//O evento DOM é acionado quando todo o HTML foi completamente carregado

document.addEventListener("DOMContentLoaded", function () {
  //TIPOS DE DADOS
  //String: Sequencia de caracter
  //Number: Numeros inteiros ou pontos flutuantes (10.4)
  //Boolean: Retorna dois valores, true ou false
  //object: estrutura de dados que pode armazenar multiplos valores
  //NULL: quando esta vazio
  //array:objeto especial ordenado
  //function: bloco de codigo reutilizavel

  //CONST É usado para declarar uma variavel cujo valor é permanente
  const teste = 50;
  console.log(teste);

  //LET É usado para declarar uma variaveis que os vsalores podem ser retrebuidos
  let C = 0;
  C = 10;
  console.log(C);

  const notaMedia = 6;

  if (notaMedia >= 6) {
    alert("aluno passou");
  } else if (notaMedia >= 4 && notaMedia < 6) {
    alert("aluno quase passou");
  } else {
    ("aluno reprovou!");
  }

  //--------- OPERADORES --------

  // = sinal deatribuição
  // == sinal de comparação
  // === verifica se os dois são iguais e tem o mesmo tipo de dados
  // != se é diferente
  // !== se é estritamente diferente
  // > maoior
  // < menor

  const num = "6";
  if (num === 6) {
    alert("é igual");
  } else {
    alert("O tipo de dado é diferente");
  }

  const professor = "Lucas";
  if (professor == "Lucas") {
    console.log('Sim é Lucas')
  }else {
    console.log('Não é Lucas')

  }
});
