//O evento DOM é acionado quando todo o HTML foi completamente carregado

document.addEventListener("DOMContentLoaded", function () {
  alert(123);

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
});
