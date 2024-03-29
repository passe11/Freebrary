$( document ).ready(function() {
    document.getElementById("name").innerHTML=localStorage.getItem("name");
    document.getElementById("name2").innerHTML=localStorage.getItem("name")
    document.getElementById("name3").innerHTML=localStorage.getItem("name");;
    document.getElementById("author").innerHTML=localStorage.getItem("author");
    var disponible =localStorage.getItem("disponible");
    document.getElementById("disponible").innerHTML= disponible;
    document.getElementById("cour").innerHTML=localStorage.getItem("class");
    document.getElementById("description").innerHTML=localStorage.getItem("description");
    document.getElementById("bookImage").src=localStorage.getItem("image");
    document.getElementById("modalImage").src=localStorage.getItem("image");
    document.getElementById("modalImage2").src=localStorage.getItem("image");
    if(disponible==0){
        document.getElementById("bookingButton").style.display="none";
        document.getElementById("waitListButton").style.display="inline-block";
    }else{
        document.getElementById("bookingButton").style.display="inline-block";
        document.getElementById("waitListButton").style.display="none";
    }
});

function reservation(){
    //Si l'usager n'a pas entré une date d'emprunt, afficher une alerte
    if(getStartDate() == ""){
        alert("Veuillez entrer une date pour le début de l'emprunt.");
    } else {
    var book=[];
    if(localStorage.getItem("reservation")){
        var books =	JSON.parse(localStorage.getItem("reservation"));
    }else{
        var books = [];
    }
    book.push(localStorage.getItem("name"));
    book.push(localStorage.getItem("image"));
    book.push(getSelected());
    book.push(getStartDate());
    books.push(book);
    localStorage.setItem("reservation",JSON.stringify(books));
    alert(JSON.stringify(books));
    //JSON.stringify(names)
    //JSON.parse(localStorage.getItem("names")
    }
}


function waitList(){
    var book=[];
    if(localStorage.getItem("attente")){
    var books = JSON.parse(localStorage.getItem("attente"));
    }else{
        var books = [];
    }
book.push(localStorage.getItem("name"));
book.push(localStorage.getItem("image"));
books.push(book);
 localStorage.setItem("attente",JSON.stringify(books));
 alert(JSON.stringify(books));
//JSON.stringify(names)
//JSON.parse(localStorage.getItem("names")
}

function getSelected(){
return($('#emprunt :selected').text());
}

function getStartDate(){
    var startDate = document.getElementById('start-date').value;
    return startDate;
}