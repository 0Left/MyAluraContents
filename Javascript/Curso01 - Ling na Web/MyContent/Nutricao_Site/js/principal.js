var titulo = document.querySelector(".titulo");
var dateTime = new Date();
titulo.textContent = "Aparecida Nutricionista || " + dateTime.getHours() + ":" + dateTime.getMinutes();


let listOfPatients = document.querySelectorAll(".paciente");
for(let i = 0; i < listOfPatients.length; i++)
{
    let pesoTocalc = listOfPatients[i].querySelector(".info-peso").textContent;
    let alturaToCalc = listOfPatients[i].querySelector(".info-altura").textContent;
    let imc = pesoTocalc / (alturaToCalc * alturaToCalc);
    listOfPatients[i].querySelector(".info-imc").textContent = imc;
}