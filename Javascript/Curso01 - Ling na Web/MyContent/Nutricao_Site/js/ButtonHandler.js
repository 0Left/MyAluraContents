/**
 * 
 
 * mouse events (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu

 * touch events (TouchEvent): touchstart, touchmove, touchend, touchcancel

 * keyboard events (KeyboardEvent): keydown, keypress, keyup, Input

 * form events: focus, blur, change, submit

 * window events: scroll, resize, hashchange, load, unload

 * 
 */

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPacienteDoForm(form);
    let erros = validaPaciente(paciente)
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    let pacienteTr = MontarTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");

    let ul = document.querySelector("#status-message");
    ul.innerHTML = "";

    tabela.appendChild(pacienteTr);
    
    form.reset();


});


function obtemPacienteDoForm(form)
{
    var pacienteObj = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc:  (((form.peso.value < 0 || form.peso.value > 1000) || 
        (form.altura.value < 0 || form.altura.value > 3))
        ? ("Informação Incorreta") : (calculaIMC(form.peso.value,form.altura.value)))
    }
    return pacienteObj;
}

function MontarTr(paciente)
{
    var trBase = document.createElement("tr");
    trBase.classList.add("paciente");

    trBase.appendChild(montarTd(paciente.nome,"info-nome"));
    trBase.appendChild(montarTd(paciente.peso,"info-peso"));
    trBase.appendChild(montarTd(paciente.altura,"info-altura"));
    trBase.appendChild(montarTd(paciente.gordura,"info-gordura"));
    trBase.appendChild(montarTd(paciente.imc,"info-imc"));

    if(paciente.imc == "Informação Incorreta"){
        trBase.classList.add("informacao-incorreta");
    }

    return trBase;
}

function montarTd(dado,classe)
{
    var td = document.createElement("Td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function exibeMensagensDeErro(erros)
{
    let ul = document.querySelector("#status-message");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function validaPaciente(paciente)
{
    let erros = [];
    if(validaPeso(paciente.peso) || isNaN(paciente.peso)) erros.push("Peso é inválido");  
    if(validaAltura(paciente.altura) || isNaN(paciente.altura)) erros.push("Altura é inválida");
    if(paciente.nome.length == 0) erros.push("O Nome Está Vazio");
    if(paciente.altura.length == 0) erros.push("A Altura Está Vazia");
    if(paciente.peso.length == 0) erros.push("O Peso Está Vazio");
    if(paciente.gordura.length == 0) erros.push("A Gordura Está Vazia");
    return erros;

}