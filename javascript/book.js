$( document ).ready(function() {
    document.getElementById("name").innerHTML=localStorage.getItem("name");
    document.getElementById("author").innerHTML=localStorage.getItem("author");
    document.getElementById("disponible").innerHTML=localStorage.getItem("disponible");
    document.getElementById("cour").innerHTML=localStorage.getItem("class");
    document.getElementById("description").innerHTML=localStorage.getItem("description");
    document.getElementById("bookImage").src=localStorage.getItem("image");
});

function reservation(){
	var book=[];
	if(localStorage.getItem("reservation")){
	var books =	JSON.parse(localStorage.getItem("reservation"));
	}else{
		var books = [];
	}
book.push(localStorage.getItem("name"));
book.push(localStorage.getItem("image"));
book.push(getSelected());
books.push(book);
 localStorage.setItem("reservation",JSON.stringify(books));
 alert(JSON.stringify(books));
//JSON.stringify(names)
//JSON.parse(localStorage.getItem("names")
}
function getSelected(){
return($('#emprunt :selected').text());
}