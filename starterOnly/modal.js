function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const form =document.querySelectorAll('[name="reserve"]');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event

modalClose.forEach((btn) => btn.addEventListener("click", function () {
  modalbg.style.display = "none";
}));

// event onsubmit

form.forEach((btn) => btn.addEventListener ("submit", confirmation ));

//close modal form

function closeModal() {
  formData.style.display = "none";
}

//clear modal

function clearModal() {
  var allInputs = document.querySelectorAll('input');
  allInputs.forEach(singleInput => singleInput.value = '');

}
//
function stopdefaultevent() {
  var allInputs = document.querySelectorAll('input');
  allInputs.forEach(btn => btn.addEventListener("click", function (event) {
    event.defaultPrevented()
  }))
}


//clear box terms
function clearBox() {
  let checkbox = document.getElementById('checkbox1');
  checkbox.checked = false;
}

//clear radio 
function clearRadio() {
  const Radio = document.getElementsByName("location");
  for (let i = 0; i < Radio.length; i++) {
    if (Radio[i].type == "radio") {
      Radio[i].checked = false;
    }
  }
}
// get input first name and display error
function get_first_name() {
  const message = document.getElementById("msgfirst");
  message.innerHTML = "";
  let first = document.getElementById("first").value;
  try {

    if (first.length == 0) throw "Le champs Nom est vide";
    if (first.length < 2) throw " Le champ Prénom a un minimum de 2 caractères ";
    if (isNaN(first) == false) throw "le champs doit contenir des caractères pas des numéros";
    return "";
  }
  catch (err) {
    message.innerHTML = err;
  }
}
// get input last name and display error
function get_last_name() {
  const message = document.getElementById("msglast");
  message.innerHTML = "";
  let last = document.getElementById("last").value;
  try {
    if (last.length == 0) throw "Le champs Nom est vide";
    if (last.length < 2) throw "Le champ du nom de famille a un minimum de 2 caractères";
    if (isNaN(last) == false) throw "Le champs doit contenir des caractères pas des numéros";
    return message.innerHTML= "";
  }
  catch (err) {
    message.innerHTML = err;
  }
}

//get input email and display error

function validateEmail() {
  const message = document.getElementById("msgemail");
  const email = document.getElementById("email").value;
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  // button.addEventListener('click', function(event) { event.preventDefault();});

try{
  if (email.length === 0) throw "Le champs Email est vide"; 
  if (emailRegExp.test(email)==false)  throw "Email n'est pas valide"; 
  return message.innerHTML= "";
}
catch(err){
  message.innerHTML =err;
} 
}

//verify date of birth
function validedate() {
  const message = document.getElementById("msgdate");

  let date = document.getElementById("birthdate").value;
  let dateRegExp = new RegExp("[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])");
  try {
    if (date.length == 0) { throw "Le champs date est vide"; }
    if (dateRegExp.test(date) == false) { throw "Vous devez entrer votre date de naissance"; }

    return   message.innerHTML = "";
  }
  catch (err) {
    message.innerHTML = err;
  }
}


// Number of competitions is valid
function valideNBComp() {
  const message = document.getElementById("msgnbcompt");
  let quantity = document.getElementById("quantity").value;
 
  try {
    if ( quantity.length == 0 || (quantity > 99) || (quantity < 0)) { throw "Vous devez entrer un nombre entre 0 et 99"; }
    return message.innerHTML= "";
  }
  catch (err) {
    message.innerHTML = err;
  }
}

//verify radio button checked
function checkradio() {
  const location = document.getElementsByName("location");
  for (let i = 0; i < location.length; i++) {
    if (location[i].checked == true) { return document.getElementById("mscheck").innerHTML = "" }

    else { document.getElementById("mscheck").innerHTML = "Vous devez selectionner un tournoi" }
  }

}

//Accept terms and conditions checkbox1
function AccetTerms() {
  const message = document.getElementById("mscheckbox");
  
  const mscheck = document.getElementById("checkbox1");
  try {
    if (mscheck.checked == false) throw "Vous devez vérifier que vous acceptez les termes et conditions.";
    return message.innerHTML = "";
  }

  catch (err) {
    message.innerHTML = err;
  }
}




// send message confirmation
const modalbady = document.querySelector(".modal-body");
const msgalert = document.getElementById("msgalert");
msgalert.style.display = "none";
const button = document.getElementById('btnsubmit');


function onSubmit() {
  button.style.display = "block";
  msgalert.style.display = "block";
  formData.forEach(singleData => singleData.style.display = "none");
  document.querySelector(".text-label").style.display = "none";
  msgalert.innerHTML = "Merci Pour <br> votre inscription";
  button.addEventListener("click", function () {
    formData.forEach(singleData => singleData.style.display = "none");
    modalbg.style.display = "none";
    document.getElementById("msgalert").innerHTML = "";
    location.reload();
    clearModal(); clearBox(); clearRadio();
     })
  button.addEventListener('click', button.value = "fermer");
  
}


//validation && closemodal  && clear modal
function confirmation(event) {
  event.preventDefault();
  let last = get_last_name();
  let first = get_first_name();
  let email = validateEmail(event);
  let competition = valideNBComp();
  let radio = checkradio();
  let terms = AccetTerms();
  let date = validedate();
  

  if (last === "" && first === "" && email === "" && competition === "" && radio === "" && terms === "" && date === "") {
  onSubmit();
  }
 
}