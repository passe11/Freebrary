function search(){
	var par= document.getElementById("par").innerHTML;
	var books = document.getElementsByClassName("book");
	for (i=0;i<books.length;i++){
		if(books[i].id.includes(par)){
			books[i].style.display = "block";
		}else{
			books[i].style.display = "none";
		}


	}


}

