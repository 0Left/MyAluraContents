var titulo = document.querySelector(".titulo");
var dateTime = new Date();
titulo.textContent = "Aparecida Nutricionista || " + dateTime.getHours() + ":" + dateTime.getMinutes() + ":"+ dateTime.getSeconds();
/* 
* https://www.codingem.com/javascript-how-to-limit-decimal-places/#:~:text=To%20limit%20decimal%20places%20in%20JavaScript%2C%20use%20the%20toFixed(),Converts%20it%20into%20a%20string.
* Ler o que ta ai depois para entender melhor essa função antes de sair usando, mas ela ta certa
Number.prototype.round = function(n) {
    const d = Math.pow(10, n);
    return Math.round((this + Number.EPSILON) * d) / d;
}
*/
let listOfPatients = document.querySelectorAll(".paciente");
for(let i = 0; i < listOfPatients.length; i++)
{
    let pesoToCalc = listOfPatients[i].querySelector(".info-peso").textContent;
    let alturaToCalc = listOfPatients[i].querySelector(".info-altura").textContent;
    let errorFounded = false;
    if(pesoToCalc < 0 || pesoToCalc > 1000){
        errorFounded = true;
    }
    if(alturaToCalc < 0 || alturaToCalc > 3){
        errorFounded = true;
    }
    let calcImc = calculaIMC(pesoToCalc,alturaToCalc);
    if(errorFounded)
    {
        listOfPatients[i].classList.add("informacao-incorreta");
    }
    listOfPatients[i].querySelector(".info-imc").textContent = errorFounded ? "Informação Incorreta" : calcImc;
}


function calculaIMC(peso,altura)
{
    return (peso / (altura * altura)).toFixed(2)
}


