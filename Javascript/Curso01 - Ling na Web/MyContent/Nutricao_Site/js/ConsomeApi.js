var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax")
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach( function(paciente){
                montaPacienteEColocaNaTabela(paciente);
            });
        }else
        {
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
            
    });

    xhr.send();
});

//Link de como fazer uma dessa top no azure
//https://stackoverflow.com/questions/61957520/calling-azure-devops-rest-api-using-javascript