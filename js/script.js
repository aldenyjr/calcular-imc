function calcular() {
  // pegando o id do formulario
  var formulario = document.getElementById("formulario");

  // kilos é minha variavel
  // formulario é o id do meu formulario
  // value é o valor do input
  // o + na frente transforma em number a string

  var kilos = +formulario.kilos.value;
  var metros = +formulario.metros.value;
  var centimetros = +formulario.centimetros.value;

  // altura
  var altura = (metros * 100 + centimetros) / 100;

  // imc
  var imc = kilos / (altura * altura);

  // o metodo toFixed fixa apenas duas casas decimais apos o ponto.
  formulario.imc.value = imc.toFixed(2);

  if (imc < 20) {
    document.querySelector(".texto").innerText = "Você esta abaixo do peso!";
  } else if (imc > 20 && imc <= 25) {
    document.querySelector(".texto").innerText = "Peso Ideal";
  } else if (imc > 25 && imc <= 30) {
    document.querySelector(".texto").innerText = "Sobrepeso!";
  } else if (imc > 30 && imc <= 35) {
    document.querySelector(".texto").innerText = "Obesidade Grau 1";
  } else if (imc > 35 && imc <= 40) {
    document.querySelector(".texto").innerText = "Obesidade Grau 2";
  } else if (imc > 40 && imc <= 50) {
    document.querySelector(".texto").innerText = "Obesidade Grau 3";
  } else {
    alert("Gordo");
  }
}
