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
  filter(find);
}else{
find+="disponible ";
filter(find);
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
  filter(find);
}else{
find+="papier ";
filter(find);
}
}  

function filter(y){
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
  //alert(document.getElementById("form-field").value);
   // alert("works") ;   return true; // return false to cancel form action
});

$('#login').submit(function() {
  alert("test1");
  var email = document.getElementById("emailinput").value;
  alert(email);
  var password= document.getElementById("passwordinput").value;
  if(email==="pmarl012@uottawa.ca"){
    //alert("pascal");
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

let id1= {
  bookName:'Pascalus Calculus',
  author: 'Millie Bobby Brown',
  disponible: 11,
  class: 'Mat1741',
  description:'description1',
  image:'images/book-black.png'
};
let id2= {
  bookName:'Mécanique pour ingénieurs, 3e éd.',
  author: 'Ferdinand P. Beer, E. Russell Johnston Jr., David F. Mazurek',
  disponible: 11,
  class: 'GNG 1505, GNG 1105',
  description:'Mécanique pour ingénieurs, 3e édition accompagne les étudiants de premier cycle universitaire en génie ainsi que leurs professeurs dans les cours de statique (volume 1) et de dynamique (volume 2)',
  image:'images/mecanique.jpg'
};
let id3= {
  bookName:'Calcul différentiel (I)',
  author: 'James Stewart',
  disponible: 11,
  class: 'MAT 1720, MAT 1320',
  description:'Une présentation claire ainsi qu&apos;un texte concis et rigoureux sur le plan mathématique. Une approche des mathématiques basée sur une méthode de résolution de problèmes favorisant une meilleure intégration des concepts.',
  image:'images/calcul1.jpg'
};
let id4= {
  bookName:'Apprendre à programmer avec Python 3',
  author: 'Gérard Swinnen',
  disponible: 11,
  class: 'ITI 1120, ITI 1520',
  description:'Un livre incontournable pour acquérir l&apos;exigeante discipline qu&apos;est l&apos;art de la programmation ! Original et stimulant, cet ouvrage aborde au travers d&apos;exemples attrayants et concrets tous les fondamentaux de la programmation.',
  image:'images/programming.jpg'
};
let id5= {
  bookName:'Pascalus Calculus',
  author: 'Millie Bobby Brown',
  disponible: 11,
  class: 'Mat1741',
  description:'description5',
  image:'images/book-black.png'
};

/*function test(bookname){
  Object.values(bookname).forEach(item => {
  alert(item);
});
}*/

function select(bookId){
  var myBook = Object.values(bookId);
    localStorage.setItem("name",myBook[0]);
    localStorage.setItem("author",myBook[1]);
    localStorage.setItem("disponible",myBook[2]);
    localStorage.setItem("class",myBook[3]);
    localStorage.setItem("description",myBook[4]);
    localStorage.setItem("image",myBook[5]);
}

//just a test function to see if I can find the picked book with my set of books
/*function select(bookName){
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
}*/

//Function called when user wants to login - Will eventually test email address and password
function login(){
  alert("test");
  var email = document.getElementById("emailinput").value;
  alert(email);
  var password= document.getElementById("passwordinput").value;
  if(email==="pmarl012@uottawa.ca"){
    //alert("pascal");
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