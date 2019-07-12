var find="";
function dropCour() {
  var x = document.getElementById("cours");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
function searchEntry(){
//var newWindow= window.open("file:///C:/Users/marleaup/Downloads/Projet-master/Projet-master/search.html");
//newWindow.document.getElementById("par").innerHTML="bob";
var yourValue = 'something';
window.open('file:///C:/Users/marleaup/Downloads/Projet-master/Projet-master/search.html?yourKey=' + yourValue);
}

function disponible() {
  if(find.includes("disponible")){
  find = find.replace("disponible","")
  search(find);
}else{
find+="disponible ";
search(find);
}
}

function xdisponible() {
  const show = Array.from(document.getElementsByClassName("disponible"));
  const books= Array.from(document.getElementsByClassName("book"));
  var hide= books.filter(x => !show.includes(x));

for(i=0;i<hide.length;i++){
  
 
  if (hide[i].style.display === "none") {
   hide[i].style.display = "block";
  } else {
    hide[i].style.display = "none";
  }

}
}

function papier() {
  if(find.includes("papier")){
  find = find.replace("papier","")
  search(find);
}else{
find+="papier ";
search(find);
}
}  

function search(y){
const selected = Array.from(document.getElementsByClassName(y));
  const books= Array.from(document.getElementsByClassName("book"));
 if(selected.length>0){
  var hide= books.filter(x => !selected.includes(x));
  var show= books.filter(z => selected.includes(z));
for(i=0;i<hide.length;i++){
  if (hide[i].style.display !== "none") {
   hide[i].style.display = "none";
  }
}
}else{
	var show=document.getElementsByClassName("book");
}
for(i=0;i<show.length;i++){
  if (show[i].style.display === "none") {
   show[i].style.display = "block";
  }
}



}