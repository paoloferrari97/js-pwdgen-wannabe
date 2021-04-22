//nome utente
var nameUser = prompt("Qual è il tuo nome?");

console.log(nameUser);

document.getElementById("nome_utente").innerHTML = "Il tuo nome è:" + " " + nameUser;

//cognome utente
var lastNameUser = prompt("Qual è il tuo cognome?");

console.log(lastNameUser);

document.getElementById("cognome_utente").innerHTML = "Il tuo cognome è:" + " " + lastNameUser;

//colore preferito utente
var favColorUser = prompt("Qual è il tuo colore preferito?");

console.log(favColorUser);

document.getElementById("colore_utente").innerHTML = "Il tuo colore preferito è:" + " " + favColorUser;

//password generata (nomecognomecolore21)
var password = nameUser + lastNameUser + favColorUser + 21;

console.log(password);

document.getElementById("password_generata").innerHTML = "La tua password è:" + " " + password.toLowerCase();