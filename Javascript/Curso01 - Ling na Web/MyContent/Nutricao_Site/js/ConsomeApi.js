var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });

    xhr.send();
});

//Link de como fazer uma dessa top no azure
//https://stackoverflow.com/questions/61957520/calling-azure-devops-rest-api-using-javascript