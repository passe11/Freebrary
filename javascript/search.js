function search(){
	var par= document.getElementById("par").innerHTML;
	var books = $( ".book" );
$( ".book" ).each(function(){
    //if statement here 
    // use $(this) to reference the current div in the loop
    //you can try something like...

var x = $(this).attr('id');
    if(x.includes(par)){
    	alert(x);
    	$(this).css = "display: block";
    }else{
    	$(this).remove();
    }


 });




}

/*	for (i=0;i<books.length;i++){
		if(books[i]){
			books[i].css = "display: block";
		}else{
			var e = books[i]
			alert(e.id);
			
		}


	}*/

