//window.onload = function() {};para indicar que cuand cargue la pagina, ejecutara esa funcion
var table = document.querySelector('.table');

var box = document.getElementsByTagName("td");

table.addEventListener('click',addEventTable);

var tableEvent = true;

var result = document.getElementById("result");

function addEventTable(event) {
  if(event.target.matches('td') && event.target.textContent!=="X" && event.target.textContent!=="O"){
    if (tableEvent){

      event.target.innerHTML = 'X';
      event.target.style.color = 'black';
    }

    else{
      event.target.innerHTML = 'O';
      event.target.style.color = 'black';

    }

    tableEvent = !tableEvent;
  }
  var winner = false;

  if(box[0].textContent === box[1].textContent && box[0].textContent === box[2].textContent ||
     box[3].textContent === box[4].textContent && box[3].textContent === box[5].textContent ||
     box[6].textContent === box[7].textContent && box[6].textContent === box[8].textContent ||
     box[0].textContent === box[3].textContent && box[0].textContent === box[6].textContent ||
     box[1].textContent === box[4].textContent && box[1].textContent === box[7].textContent ||
     box[2].textContent === box[5].textContent && box[2].textContent === box[8].textContent ||
     box[0].textContent === box[4].textContent && box[0].textContent === box[8].textContent ||
     box[2].textContent === box[4].textContent && box[2].textContent === box[6].textContent  ){

    result.innerHTML="Winner";
     winner = true;

  }

  if ( winner == true){
    table.removeEventListener('click',addEventTable);
  };

  var button = document.getElementById('button');
      button.addEventListener('click',init);

}

var init = function(event){
    box[0].innerHTML = '1'
    box[1].innerHTML = '2'
    box[2].innerHTML = '3'
    box[3].innerHTML = '4'
    box[4].innerHTML = '5'
    box[5].innerHTML = '6'
    box[6].innerHTML = '7'
    box[7].innerHTML = '8'
    box[8].innerHTML = '9'

    for(var i = 0 ; i < box.length; i++){
      box[i].style.color = "white";
    }

    result.innerHTML = '';

    table.addEventListener('click',addEventTable);
}
