// Variabili
var presentationText;
var lastnameInput;
var nameInput;

// Costanti
var IndexNomi = 0;
var IndexCognomi = 1;

// Creazione lista
var people = [
["GIUSEPPE","MUSSO"],
["MARIA","CERRATO"],
["ANDREA","FERRERO"],
["MARCO","SEFEROVIC"],
["FRANCESCO","VIARENGO"],
["ALESSANDRO","GALLO"],
["GIOVANNI","CONTI"]
];


// INPUT UTENTE
lastnameInput = prompt("Inserisci il cognome : ").toUpperCase();
nameInput = prompt("Inserisci il nome : ").toUpperCase();
people.push([nameInput,lastnameInput]);


// ORDINAMENTO LISTA
for (var i = people.length - 1; i >= 0 ; i--) {
    for (var j = i - 1 ; j >= 0; j--) {
        if (people[i][IndexCognomi] <= people[j][IndexCognomi]){
            indiceMinimo = j;
            console.log(people[j][IndexCognomi]);
            var temp = people[i];
            people[i] = people[indiceMinimo];
            people[indiceMinimo] = temp;
        }
    }
}


// Presentazione Header pagina
var presentationItem = document.getElementById('presentation');
presentationText = "<h1>Lista Persone</h1>" +
"<p<strong>Persona aggiunta</strong></p>";

presentationItem.innerHTML = presentationText;


/* Inserimento dell' input
nel div "id = presentation"
*/
presentationItem.innerHTML += "<p>" + lastnameInput + " " + nameInput +"</p>";


// to be continued
