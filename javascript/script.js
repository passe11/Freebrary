var find="";

//This displays the dropdown menu with available class filters
function dropCour() {
  //assurer que la fleche s'ajuste
  var coursDropdown = document.getElementById("cours-dropdown");
  if(coursDropdown.classList.contains("fa-angle-right")){
    coursDropdown.classList.remove("fa-angle-right");
    coursDropdown.className += " fa-angle-down";
  } else {
    coursDropdown.classList.remove("fa-angle-down");
    coursDropdown.className += " fa-angle-right";
  }
  
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

//Livres représentés comme objets JavaScript 
let id1= {
  bookName:'Chimie Organique',
  author: 'Graham Solomon, Craig Fryhle',
  disponible: 9,
  class: 'CHM 1721',
  description:'La matière est présentée de façon simple et stimulante, et l&apos;accent est mis sur les habiletés essentielles à la réussite en chimie organique : résolution de problèmes, visualisation des structures et compréhension des mécanismes.',
  image:'images/chimie.jpg'
};
let id2= {
  bookName:'Mécanique pour ingénieurs, 3e éd.',
  author: 'Ferdinand P. Beer, E. Russell Johnston Jr., David F. Mazurek',
  disponible: 18,
  class: 'GNG 1505, GNG 1105',
  description:'Mécanique pour ingénieurs, 3e édition accompagne les étudiants de premier cycle universitaire en génie ainsi que leurs professeurs dans les cours de statique (volume 1) et de dynamique (volume 2)',
  image:'images/mecanique.jpg'
};
let id3= {
  bookName:'Calcul différentiel (I)',
  author: 'James Stewart',
  disponible: 15,
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
  bookName:'Algèbre linéaire et applications',
  author: 'David C. Lay, Michel Henri',
  disponible: 14,
  class: 'MAT 1741, MAT 1341',
  description:'Présente les concepts de base de l&apos;algèbre linéaire et les outils dont l&apos;étudiant aura besoin dans sa vie professionnelle. Propose une large sélection d&apos;applications, d&apos;exemples et d&apos;exercices permettant d&apos;aborder les difficultés réelles rencontrées.',
  image:'images/algebre.jpg'
};
let id6= {
  bookName:'Calcul avancé',
  author: 'James Stewart',
  disponible: 14,
  class: 'MAT 1722, MAT 1322, MAT 2322, MAT 2722, MAT 2322',
  description:'Cette adaptation québécoise conçue pour s&apos;arrimer avec le niveau collégial est d&apos;une grande précision mathématique et d&apos;une grande rigueur scientifique et offerte en couleurs pour faciliter la lecture et l&apos;apprentissage des étudiants.',
  image:'images/calcul3.jpg'
};
let id7= {
  bookName:'Mathématiques discrètes, édition révisée',
  author: 'Kenneth Rosen',
  disponible: 13,
  class: 'MAT 1748',
  description:'Encensé par les spécialistes de l&apos;informatique, cet ouvrage doit son succès à la clarté de ses exposés, à la diversité de ses exemples et de ses exercices ainsi qu&apos;à la richesse et au nombre des applications qui y sont traitées.',
  image:'images/discrete.jpg'
};
let id8= {
  bookName:'Caclul intégral II',
  author: 'James Stewart',
  disponible: 7,
  class: 'MAT 1720, MAT 1320, MAT 1722, MAT 1322',
  description:'En plus de conserver l&apos;approche et la rigueur scientifique de l&apos;ouvrage de James Stewart, elle présente une réorganisation, notamment en ce qui concerne les notions sur les suites et les séries, ainsi que des exercices et des problèmes supplémentaires.',
  image:'images/calcul2.jpg'
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