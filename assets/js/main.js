//nome utente
var nameUser = prompt("Qual è il tuo nome?");

console.log(nameUser);

//cognome utente
var lastNameUser = prompt("Qual è il tuo cognome?");

console.log(lastNameUser);

//colore preferito utente
var favColorUser = prompt("Qual è il tuo colore preferito?");

console.log(favColorUser);

//password generata (nomecognomecolore21)
var password = nameUser + lastNameUser + favColorUser + 21;

console.log(password);

document.getElementById("password_generata").innerHTML = password;