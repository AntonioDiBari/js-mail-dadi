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
  userMail = userMailInput.value;
  console.log(userMail);
  let isValid = false;
  for (i = 0; i < dbMail.length; i++) {
    if (userMail === dbMail[i]) {
      isValid = true;
    }
  }
  if (isValid) {
    alert("sei dentro");
  } else {
    alert("sei fuori");
  }
});
