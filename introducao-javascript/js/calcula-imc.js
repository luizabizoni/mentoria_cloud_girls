// Seleciona e troca o título
var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

// Seleciona dados dos pacientes para calcular o imc
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura"); 
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // Valida se a altura e o peso são validos
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
            
        // Calcula imc
        var imc = calculaImc(peso, altura);
        // Preenche a coluna imc com o resultado do cálculo acima
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}