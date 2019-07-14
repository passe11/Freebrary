	var mybooks=JSON.parse(localStorage.getItem("reservation"));
		$( document ).ready(function() {
loadbooks();
//book1 = ["Pascalus Calculus", "images/book-black.png","11"];
//mybooks.push(book1);

});

function loadbooks(){
var book ="";

for(i=0;i<mybooks.length;i++){
	//alert(mybooks[i][0]);
	//alert(mybooks[i][1]);
	//alert(mybooks[i][2]);
book+= '<div id='+i+' class="card book"><img class="card-img-top" src="'+mybooks[i][1]+'"  alt="Book"><div class="card-body"><h3 class="card-title">'+mybooks[i][0]+'</h3><p class="card-text">Emprunté pour :<br>'+mybooks[i][2]+'</p><button style="display:inline-block" onclick="annulation('+i+')" type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button></div></div>';
}
    document.getElementById("loader").innerHTML= book;

}

function annulation(i){
mybooks.splice(i,1);
localStorage.setItem("reservation",JSON.stringify(mybooks));
loadbooks();
}