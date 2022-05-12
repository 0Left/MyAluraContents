/**
 * 
 
 * mouse events (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu

 * touch events (TouchEvent): touchstart, touchmove, touchend, touchcancel

 * keyboard events (KeyboardEvent): keydown, keypress, keyup

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
        let status = document.querySelector("#status-message");
        let errorString = "";
        for(let i = 0; i < erros.length; i++)
        {
            errorString += erros[i] + " e ";
        }
        status.textContent = errorString.slice(0,-3) + "!";
        return;
    }

    let pacienteTr = MontarTr(paciente);

    let tabela = document.querySelector("#tabela-pacientes");

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


function validaPaciente(paciente)
{
    let erros = [];
    if(validaPeso(paciente.peso))
    {
        erros.push("Peso é inválido");
    }  
    if(validaAltura(paciente.altura))
    {
        erros.push("Altura é inválida");
    }

    return erros;
    

}