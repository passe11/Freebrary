var find="";
//Livres représentés comme objets JavaScript 
var id1= {
  bookName:'Chimie Organique',
  author: 'Graham Solomon, Craig Fryhle',
  disponible: 0,
  class: 'CHM 1721',
  description:'La matière est présentée de façon simple et stimulante, et l&apos;accent est mis sur les habiletés essentielles à la réussite en chimie organique : résolution de problèmes, visualisation des structures et compréhension des mécanismes.',
  image:'images/chimie.jpg',
  langue:'francais',
  format:'papier'
};
var id2= {
  bookName:'Mécanique pour ingénieurs, 3e éd.',
  author: 'Ferdinand P. Beer, E. Russell Johnston Jr., David F. Mazurek',
  disponible: 18,
  class: 'GNG 1505, GNG 1105',
  description:'Mécanique pour ingénieurs, 3e édition accompagne les étudiants de premier cycle universitaire en génie ainsi que leurs professeurs dans les cours de statique (volume 1) et de dynamique (volume 2)',
  image:'images/mecanique.jpg',
  langue:'francais',
  format:'papier'
};
var id3= {
  bookName:'Calcul différentiel (I)',
  author: 'James Stewart',
  disponible: 15,
  class: 'MAT 1720, MAT 1320',
  description:'Une présentation claire ainsi qu&apos;un texte concis et rigoureux sur le plan mathématique. Une approche des mathématiques basée sur une méthode de résolution de problèmes favorisant une meilleure intégration des concepts.',
  image:'images/calcul1.jpg',
  langue:'francais',
  format:'papier'
};
var id4= {
  bookName:'Apprendre à programmer avec Python 3',
  author: 'Gérard Swinnen',
  disponible: 11,
  class: 'ITI 1120, ITI 1520',
  description:'Un livre incontournable pour acquérir l&apos;exigeante discipline qu&apos;est l&apos;art de la programmation ! Original et stimulant, cet ouvrage aborde au travers d&apos;exemples attrayants et concrets tous les fondamentaux de la programmation.',
  image:'images/programming.jpg',
  langue:'francais',
  format:'papier'
};
var id5= {
  bookName:'Algèbre linéaire et applications',
  author: 'David C. Lay, Michel Henri',
  disponible: 14,
  class: 'MAT 1741, MAT 1341',
  description:'Présente les concepts de base de l&apos;algèbre linéaire et les outils dont l&apos;étudiant aura besoin dans sa vie professionnelle. Propose une large sélection d&apos;applications, d&apos;exemples et d&apos;exercices permettant d&apos;aborder les difficultés réelles rencontrées.',
  image:'images/algebre.jpg',
  langue:'francais',
  format:'numerique'
};
var id6= {
  bookName:'Calcul avancé',
  author: 'James Stewart',
  disponible: 14,
  class: 'MAT 1722, MAT 1322, MAT 2322, MAT 2722, MAT 2322',
  description:'Cette adaptation québécoise conçue pour s&apos;arrimer avec le niveau collégial est d&apos;une grande précision mathématique et d&apos;une grande rigueur scientifique et offerte en couleurs pour faciliter la lecture et l&apos;apprentissage des étudiants.',
  image:'images/calcul3.jpg',
  langue:'francais',
  format:'papier'
};
var id7= {
  bookName:'Mathématiques discrètes, édition révisée',
  author: 'Kenneth Rosen',
  disponible: 13,
  class: 'MAT 1748',
  description:'Encensé par les spécialistes de l&apos;informatique, cet ouvrage doit son succès à la clarté de ses exposés, à la diversité de ses exemples et de ses exercices ainsi qu&apos;à la richesse et au nombre des applications qui y sont traitées.',
  image:'images/discrete.jpg',
  langue:'francais',
  format:'papier'
};
var id8= {
  bookName:'Caclul intégral II',
  author: 'James Stewart',
  disponible: 7,
  class: 'MAT 1720, MAT 1320, MAT 1722, MAT 1322',
  description:'En plus de conserver l&apos;approche et la rigueur scientifique de l&apos;ouvrage de James Stewart, elle présente une réorganisation, notamment en ce qui concerne les notions sur les suites et les séries, ainsi que des exercices et des problèmes supplémentaires.',
  image:'images/calcul2.jpg',
  langue:'francais',
  format:'numerique'
};
var id9= {
  bookName:'Calcul à plusieurs variables',
  author: 'James Stewart, Jean Guérin',
  disponible: 0,
  class: 'MAT 1720, MAT 1320, MAT 1722, MAT 1322',
  description:'L’art d’enseigner, disait l’écrivain Mark Van Doren, est l’art d’aider à découvrir. Et on peut dire que James Stewart possédait cet art. Il s’est en effet efforcé dans cet ouvrage d’aider les étudiants à découvrir le calcul à plusieurs variables, sa puissance pratique et son étonnante beauté.',
  image:'images/variables.jpg',
  langue:'francais',
  format:'papier'
};
var id10= {
  bookName:'Calcul différentiel',
  author: 'Marco Bélanger, Margot De Serres, Josée Bérubé',
  disponible: 0,
  class: 'MAT 1720, MAT 1320',
  description:'Calcul différentiel s&apos;inscrit également dans le prolongement des trois compétences disciplinaires explorées au secondaire : communiquer à l&apos;aide du langage mathématique, déployer un raisonnement mathématique et résoudre une situation problème.',
  image:'images/differentiel.jpg',
  langue:'francais',
  format:'papier'
};
var id11= {
  bookName:'Calcul différentiel, 8e éd.',
  author: 'Gilles Charron, Pierre Parent',
  disponible: 0,
  class: 'MAT 1720, MAT 1320',
  description:'Gilles Charron et Pierre Parent présentent la 8e édition de leur manuel. Son contenu a été révisé et sa structure adaptée à la réalité des élèves d’aujourd’hui. Ce classique propose une matière complète qui couvre tout le programme, toujours avec la même rigueur mathématique éprouvée et irréprochable.',
  image:'images/calc.jpg',
  langue: 'anglais',
  format:'papier'
};
var bookShelf= [id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11];

//This displays the dropdown menu with available class filters
function dropCour() {
  //assurer que la fleche s'ajuste
  $('#cour').css('border','none');
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
  document.getElementById("badgeDisponible").style.display = "none";
  filter(find);
}else{
find+="disponible ";
document.getElementById("badgeDisponible").style.display = "block";
filter(find);
}
}

function numerique() {
  if(find.includes("numerique")){
  find = find.replace("numerique","")
  document.getElementById("badgeNumerique").style.display = "none";
  filter(find);
}else{
find+="numerique ";
document.getElementById("badgeNumerique").style.display = "block";
filter(find);
}
}

function francais() {
  if(find.includes("francais")){
  find = find.replace("francais","")
  document.getElementById("badgeFrancais").style.display = "none";
  filter(find);
}else{
find+="francais ";
document.getElementById("badgeFrancais").style.display = "block";
filter(find);
}
}

function anglais() {
  if(find.includes("anglais")){
  find = find.replace("anglais","")
  document.getElementById("badgeAnglais").style.display = "none";
  filter(find);
}else{
find+="anglais ";
document.getElementById("badgeAnglais").style.display = "block";
filter(find);
}
}




function papier() {
  if(find.includes("papier")){
  find = find.replace("papier","")
  document.getElementById("badgePapier").style.display = "none";
  filter(find);
}else{
find+="papier ";
document.getElementById("badgePapier").style.display = "block";
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
  var email = document.getElementById("emailinput").value;
  var password= document.getElementById("passwordinput").value;
  if(email==="pmarl012@uottawa.ca"){
    //alert("pascal");
    localStorage.setItem("user","pascal");
    $('#compte').css('display', 'inline-block');
$('#login').css('display', 'none');  
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
function searchLoad(){
	var livreStrings ="";
	var dispo =""
	for(i=0;i<bookShelf.length;i++){
		var livre = Object.values(bookShelf[i]);
		if(livre[2]>0){
			dispo="disponible ";
		}
		livreStrings+= '<div onclick="redirect(id'+(i+1)+')" id="'+livre[0]+'" class="card book '+dispo+livre[3]+' '+livre[6]+' '+livre[7]+'+"><img class="card-img-top" src="'+livre[5]+'"  alt="Book"><div class="card-body"><h3 class="card-title">'+livre[0]+'</h3><p class="card-text">'+livre[4].substring(0,35)+'</p></div></div>';
	}

	/*bookName:'Algèbre linéaire et applications',
  author: 'David C. Lay, Michel Henri',
  disponible: 14,
  class: 'MAT 1741, MAT 1341',
  description:'Présente les concepts de base de l&apos;algèbre linéaire et les outils dont l&apos;étudiant aura besoin dans sa vie professionnelle. Propose une large sélection d&apos;applications, d&apos;exemples et d&apos;exercices permettant d&apos;aborder les difficultés réelles rencontrées.',
  image:'images/algebre.jpg'*/
document.getElementById("bookShelf").innerHTML=livreStrings;
return true;
}
/*
*/
//var book1 = {"Pascalus Calulus","Hi","This test 2","hope this works"};


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

//Utilise dans mathematique.html et psychologie.html pour ouvrir les pages de livres
function redirect(bookId){
  select(bookId);
  window.location.href = "book.html";
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
$('#waitListButton').attr('data-target','#loginModal');  
  }else{
    //loged in give him the chance to make his reservation
$('#bookingButton').attr('data-target','#myModal');
$('#waitListButton').attr('data-target','#attenteModal');   
  }
}