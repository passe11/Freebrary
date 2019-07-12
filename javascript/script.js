var find="";

//This displays the dropdown menu with available class filters
function dropCour() {
  var x = document.getElementById("cours");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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

/*Added this function to act before the form submit actually goes trought.
Where setting a value for search in local storage. This way are search page knows what its looking for
Thats why we return true at the end. returning false would block it.
*/
$('#myform').submit(function() {
  localStorage.setItem("search", document.getElementById("form-field").value);
  alert(document.getElementById("form-field").value);
    alert("works") ;   return true; // return false to cancel form action
});