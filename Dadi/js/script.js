// generare due numeri random, uno per user e uno per computer
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il tuo numero è", userNumber);

const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il numero del pc è", computerNumber);

// confrontare i due numeri e stabilire il vincitorre in base al numero più alto e comunicare l'esito del gioco
// if (userNumber > computerNumber) {
//     console.log("Hai vinto tu!");
// } else if (userNumber < computerNumber) {
//     console.log("Mi dispiace, ha vinto il pc!");
// } else if (userNumber == computerNumber) {
//     console.log("E' un pareggio!");
// }

//output in pagina HTML
let result = `Il tuo numero è ${userNumber}, il numero del computer è ${computerNumber}.`;

if (userNumber > computerNumber) {
    result +="Hai vinto tu!";
} else if (userNumber < computerNumber) {
    result +="Mi dispiace, ha vinto il pc!";
} else if (userNumber == computerNumber) {
    result +="E' un pareggio!";
}

console.log(result);

document.getElementById("result-text").innerHTML = result;