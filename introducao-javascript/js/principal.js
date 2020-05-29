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

    var tdImc = paciente.querySelector(".info-imc")

    // Valida se a altura e o peso são validos
    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 3.00) {
        
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
            
        // Calcula imc
        var imc = peso / (altura * altura);
        // Preenche a coluna imc com o resultado do cálculo acima
        tdImc.textContent = imc.toFixed(2);
    }
}

