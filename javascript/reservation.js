$( document ).ready(function() {
loadbooks();
//book1 = ["Pascalus Calculus", "images/book-black.png","11"];
//mybooks.push(book1);

});

function loadbooks(){
if(localStorage.getItem("user")===""){ 
	alert("pas d'usager connecté")}
else{
var book ="";
var mybooks=JSON.parse(localStorage.getItem("reservation"));

for(i=0;i<mybooks.length;i++){
book+= '<div id='+i+' class="card book"><img class="card-img-top" src="'+mybooks[i][1]+'"  alt="Book"><div class="card-body"><h3 class="card-title">'+mybooks[i][0]+'</h3><p class="card-text">Durée d&apos;emprunt :<br>'+mybooks[i][2]+'</p><button style="display:inline-block" onclick="annulation('+i+')" type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button></div></div>';
}
if(book===""){
	book='<p>Vous n&apos;avez aucun livre réservé en ce moment, veuillez à la page d&apos;accueil pour réserver des livres.</p>';
}
    document.getElementById("loader").innerHTML= book;


mybooks=JSON.parse(localStorage.getItem("attente"));
book ="";
for(i=0;i<mybooks.length;i++){
book+= '<div id='+i+' class="card book"><img class="card-img-top" src="'+mybooks[i][1]+'"  alt="Book"><div class="card-body"><h3 class="card-title">'+mybooks[i][0]+'</h3><p class="card-text">position (4) sur la liste </p><button style="display:inline-block" onclick="attenteAnnulation('+i+')" type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button></div></div>';
}
if(book===""){
	book='<p>Vous n&apos;avez aucun livre en attente en ce moment.</p>';
}
    document.getElementById("loaderAttente").innerHTML= book;
}
}
function annulation(i){
var mybooks=JSON.parse(localStorage.getItem("reservation"));
mybooks.splice(i,1);
localStorage.setItem("reservation",JSON.stringify(mybooks));
loadbooks();
}

function attenteAnnulation(i){
var mybooks=JSON.parse(localStorage.getItem("attente"));
mybooks.splice(i,1);
localStorage.setItem("attente",JSON.stringify(mybooks));
loadbooks();
}