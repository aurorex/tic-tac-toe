window.onload = function() {
  var table = document.querySelector('.table');

  table.addEventListener('click',addEvent);
};
var tableEvent = true;

function addEvent(event) {
  if(event.target.matches('td') && event.target.textContent === ''){
    if (tableEvent)
      event.target.textContent = 'X';
    else
      event.target.textContent = 'O';
    tableEvent = !tableEvent;
  }
}

butt.removeEventListener('click',addEventListener);
