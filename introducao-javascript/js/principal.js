// Seleciona e troca o título
var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

// Seleciona dados do primeiro paciente para calcular o imc
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

// Valida se a altura e o peso são validos
var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso > 1000) {

    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;

}

if (altura <= 0 || altura >= 3) {

    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {

    var imc = peso / (altura * altura);
    tdImc.textContent = imc;    
} else {

    tdImc.textContent = "Altura e/ou peso inválidos!"
}

// Calcula imc
var imc = peso / (altura * altura);

// Preenche a coluna imc com o resultado do cálculo acima
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;