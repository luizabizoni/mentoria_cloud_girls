var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    
    var xhr = new SMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            
            erroAjax.classList.add("invisivel");
            var resposta = xhr.respomseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    })

    xhr.send();
})