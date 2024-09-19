var parentWindow = window.parent;
//var parentElement = parentWindow.document.getElementById("myElement");

//var mainContainer = document.getElementById('maincontainer');
var programName = "none"

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