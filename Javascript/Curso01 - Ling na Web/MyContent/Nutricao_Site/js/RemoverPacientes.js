var table = document.querySelector("#tabela-pacientes");
table.addEventListener("dblclick",dblclickRemoveMe);

//Extremamente importante: Event bubble
//Eventos funcionam como bolinhas de gás em um copo de refri
//Elas sobem até estourar em quem ta bebendo
//e o event é um direcionador bolado, mt bom.

function dblclickRemoveMe(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 450);
}