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
["GIOVANNI","CONTI"],
["GIOVANNI","CONTI"]
];


// INPUT UTENTE
lastnameInput = prompt("Inserisci il cognome : ").toUpperCase();
nameInput = prompt("Inserisci il nome : ").toUpperCase();

// OPERAZIONI SULLA LISTA
people.push([nameInput,lastnameInput]);
peopleSorted = people.slice().sort();


// ULTIMA LUNGHEZZA LISTA
var ListLength = peopleSorted.length;

// ORDINAMENTO LISTA
for (var i = ListLength - 1; i > 0 ; i--) {
    for (var j = i - 1 ; j >= 0; j--) {
        if (peopleSorted[i][IndexCognomi] <= peopleSorted[j][IndexCognomi]){
            var temp = peopleSorted[i];
            peopleSorted[i] = peopleSorted[j];
            peopleSorted[j] = temp;
        }
    }
}


// Presentazione Header pagina
var presentationItem = document.getElementById('presentation');
presentationText = "<h1>Lista Persone</h1>" +
"<p class =\" mb-0\"><strong>Persona aggiunta</strong></p>";

presentationItem.innerHTML = presentationText;


/* Inserimento dell' input
nel div "id = presentation"
*/
presentationItem.innerHTML += "<p  class =\" text-success\">" + lastnameInput + " " + nameInput +"</p>";




// Creazione row tabelle + cell --- Dati persona;
for (var i = 0; i < ListLength; i++) {

    document.getElementById('tabellaPersone').innerHTML +=
    "<tr>";

    if (peopleSorted[i][IndexCognomi] == lastnameInput) {
        document.getElementById('tabellaPersone').innerHTML += "<td class = \" bg-success\">" + peopleSorted[i][IndexCognomi] + "</td><td class =\" bg-success\"> " + peopleSorted[i][IndexNomi] + "</td>";
    }else {
        document.getElementById('tabellaPersone').innerHTML += "<td>" + peopleSorted[i][IndexCognomi] + "</td><td> " + peopleSorted[i][IndexNomi] + "</td>";
    }

    document.getElementById('tabellaPersone').innerHTML +=
    "</tr>";
}
