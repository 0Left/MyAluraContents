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
        console.log("Its " + pesoToCalc + " an error");
        errorFounded = true;
    }
    if(alturaToCalc < 0 || alturaToCalc > 3){
        console.log("Its " + alturaToCalc + " an error");
        errorFounded = true;
    }
    let calcImc = pesoToCalc / (alturaToCalc * alturaToCalc)
    if(errorFounded)
    {
        listOfPatients[i].classList.add("informacao-incorreta")
    }
    listOfPatients[i].querySelector(".info-imc").textContent = errorFounded ? "Informação Incorreta" : calcImc.toFixed(2);
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    //Muito importante isso para prevenir o comportamento padrão do botão (dar um reload boaldo)
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    //o form vem tipo um objeto, com cada input sendo uma 
    //informação, que pode ser acessada através do seu nome (.name)
    //Importante retornar o Value do valor do input
    //Diferente do textContent dos elementos normalmente
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    //Criando um elemento, mas não vai pra pagina
    //Tr = Table Row || Linha da Tabela
    var pacienteTr = document.createElement("tr");
    //Td = Table Data || Data da linha
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = (peso / (altura * altura)).toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
/**
 * 
 
 * mouse events (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu

 * touch events (TouchEvent): touchstart, touchmove, touchend, touchcancel

 * keyboard events (KeyboardEvent): keydown, keypress, keyup

 * form events: focus, blur, change, submit

 * window events: scroll, resize, hashchange, load, unload

 * 
 */


