var programName = "none";

/* Существующие страницы
100 - word


200 - visio
*/

//переход на страницу приожения
function changeContent(param) {

switch(param) {
case 'visio':{
	programName="Visio";
	break;
}
case 'word':{
	programName="Word";
	break;
}
}
  parent.document.getElementById("maincontainer").src = "learn.html";
}