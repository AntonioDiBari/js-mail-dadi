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
console.log(userNumber);

const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log(computerNumber);
