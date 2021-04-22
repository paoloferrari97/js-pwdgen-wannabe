//nome utente
var nameUser = prompt("Qual è il tuo nome?");

//cognome utente
var lastNameUser = prompt("Qual è il tuo cognome?");

//colore preferito utente
var favColorUser = prompt("Qual è il tuo colore preferito?");

//password generata (nomecognomecolore21)
var password = nameUser + lastNameUser + favColorUser + 21;
document.getElementById("password_generata").innerHTML = password;