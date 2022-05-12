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
    if(validaPeso(pesoToCalc)){
        errorFounded = true;
    }
    if(validaAltura(alturaToCalc)){
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


function validaPeso(peso)
{
    let errorFounded = false;
    if(peso.length <=0 || peso < 0 || peso > 1000){
        errorFounded = true;
    }
    return errorFounded;
}
function validaAltura(altura)
{
    let errorFounded = false;
    if(altura.length <= 0 || altura < 0 || altura > 3){
        errorFounded = true;
    }
    return errorFounded;
}