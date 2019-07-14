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

$('#login').submit(function() {
  alert("test1");
  var email = document.getElementById("emailinput").value;
  alert(email);
  var password= document.getElementById("passwordinput").value;
  if(email==="pmarl012@uottawa.ca"){
    alert("pascal");
    localStorage.setItem("user","pascal");
  }
  });

$(function() {
  if(localStorage.getItem("user")===""){
$('#compte').css('display', 'none');
$('#login').css('display', 'inline-block');  
  }else{
$('#compte').css('display', 'inline-block');
$('#login').css('display', 'none');  
  }
});

function logout(){
localStorage.setItem("user","");
$('#compte').css('display', 'none');
$('#login').css('display', 'inline-block');
}

//var book1 = {"Pascalus Calulus","Hi","This test 2","hope this works"};


//just a test function to see if I can find the picked book with my set of books
function test(bookName){
  alert(bookName);
 var books = new Array ( );
books[0] = new Array ( "Pascal", "author", "ect." );
books[1] = new Array ( "Tired of being tired", "Pascal", "ect." );
for(i=0;i<books.length;i++){
  if(books[i][0]===bookName){
    alert(books[i][0]+books[i][1]+books[i][2]);
    localStorage.setItem("name",books[i][0]);
    localStorage.setItem("author",books[i][1]);
    localStorage.setItem("ect",books[i][2]);
  }
}
}

//Function called when user wants to login - Will eventually test email address and password
function login(){
  alert("test");
  var email = document.getElementById("emailinput").value;
  alert(email);
  var password= document.getElementById("passwordinput").value;
  if(email==="pmarl012@uottawa.ca"){
    alert("pascal");
    localStorage.setItem("user","pascal");
  }
}


//Checks if the user is login or not
function booking(){
  if(localStorage.getItem("user")===""){
    //not loged in make him log in
$('#bookingButton').attr('data-target','#loginModal');  
  }else{
    //loged in give him the chance to make his reservation
$('#bookingButton').attr('data-target','#myModal');  
  }
}