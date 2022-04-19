// chiedo la mail all'utente
const userMail = prompt("Ciao! Qual'è la tua mail?");
console.log(userMail);

// controllo che sia presente nella lista delle mail autorizzate all'accesso
// array per lista mail autorizzate all'accesso
const mailList = ["pincopallo@gmail.com", "pippo@yahoo.com", "topolino@libero.it", "tiziocaio@gmail.com", "sempronio@protonmail.com"];

let authorizedMail = false;

// scorro le mail della lista per vedere se quella immessa è presente
for (let i = 0; i < mailList.length; i++) {
    const mailCheck = mailList[i];
    if (mailCheck === userMail) {
        authorizedMail = true;
    }
    console.log(authorizedMail);
}

// messaggio sull'esito del controllo
if (authorizedMail === true) {
    console.log("La tua mail è presente tra quelle autorizzate all'accesso");
} else {
    console.log("Mi dispiace, la tua mail non è presente tra quelle autorizzate all'accesso");
}


// includes, ritorna vero o falso se l'elemento è presente o no nell'array
//const authorizedMail = mailList.includes(userMail);