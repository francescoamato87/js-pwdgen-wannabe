alert("nome" + "cognome" + "colorepreferito19");

var nome = window.prompt ("Ciao, inserisci il tuo nome: ");

document.getElementById("titolo").innerHTML = "Benvenuto " + nome;

var cognome = window.prompt ("inserisci il tuo Cognome: ");

document.getElementById("informazioni").innerHTML = "Cognome: " + cognome;

var colore = window.prompt ("qual'é il tuo colore preferito?!? ");

document.getElementById("colore").innerHTML = "Colore preferito: " + colore;

// Costruzione password
var password = nome + cognome + colore + '19';
console.log(password);

document.getElementById('password').innerHTML = 'La tua password è ' + password;

// due linee sono i commenti!!!
