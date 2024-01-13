dbMail = [
  "antoniodibari@gmail.com",
  "mariorossi@gmail.com",
  "giuliorossi@gmail.com",
  "marcorossi@gmail.com",
  "luigibianchi@gmail.com",
  "rossimario@gmail.com",
  "rossigiulio@gmail.com",
  "dibariantonio@gmail.com",
  "rossimarco@gmail.com",
  "bianchiluigi@gmail.com",
];

const userMailInput = document.getElementById("mail-utente");
const validateBtn = document.getElementById("validate-btn");
const result = document.getElementById("result");
let userMail;

validateBtn.addEventListener("click", function () {
  userMail = userMailInput.value.trim();
  if (userMail && userMail.includes("@") && userMail.includes(".com")) {
    let isValid = false;
    for (i = 0; i < dbMail.length; i++) {
      console.log(
        "il ciclo è stato ripetuto per " + i + " volte prima di uscire."
      );
      if (userMail === dbMail[i]) {
        isValid = true;
        i =
          dbMail.length; /* RIASSEGNO L'INDICE PER TERMINARE IL CICLO DATO CHE NON SERVE FARLO GIRARE ULTERIORMENTE */
      }
    }
    if (isValid) {
      result.innerText = `Accesso consentito, Benvenuto ${userMail}`;
      result.className = "text-success";
    } else {
      result.innerText = "Accesso negato";
      result.className = "text-danger";
    }
  } else {
    result.innerText = "Inserisci una mail valida";
    result.className = "text-warning";
  }
});
