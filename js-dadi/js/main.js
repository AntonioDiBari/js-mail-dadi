// PRENDO GLI ELEMENTI CHE MI SERVIRANNO DAL DOM

const userNumberResult = document.getElementById("numero-utente");
// console.log(userNumberResult);

const resultBtn = document.getElementById("result-btn");
// console.log(resultBtn);

const computerNumberResult = document.getElementById("numero-pc");
// console.log(computerNumberResult);

const finalResult = document.getElementById("result");
// console.log(finalResult);

// ASSEGNO I NUMERI RANDOM A DUE COSTANTI

const userNumber = Math.floor(Math.random() * 6 + 1);
console.log("numero Utente " + userNumber);

const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log("numero Computer " + computerNumber);

// RENDO NOTO ALL'UTENTE DEL SUON NUMERO
userNumberResult.innerText = `Il numero generato randomicamente per te è: ${userNumber}`;

// ASCOLTO L'EVENTO DEL BTN
resultBtn.addEventListener("click", function () {
  computerNumberResult.innerText = `Il numero generato randomicamente per il computer è: ${computerNumber}`;
  let result = "";
  //   CONDIZIONE PER CONTROLLARE LA GIOCATA
  if (userNumber > computerNumber) {
    result = "HAI VINTO!!";
  } else if (userNumber == computerNumber) {
    result = "PAREGGIO :/";
  } else {
    result = "HAI PERSO :(";
  }
  finalResult.innerText = result;
});
