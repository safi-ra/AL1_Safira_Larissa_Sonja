
var submit = document.getElementById("submit");
var formContainer = document.getElementById("form-container");
//var gameContainer = document.getElementById("game-container");

document.getElementById("submitButton").addEventListener("click", async (event) => {
  event.preventDefault(); // Verhindert das automatische Neuladen der Seite nach dem Absenden des Formulars




  // Lesen Sie die Werte aus den Formularfeldern aus
  let playeranrede;
  var playerfrau = document.getElementById("anredeFieldFrau");
  var playermann = document.getElementById("anredeFieldMann");
  if (playerfrau.checked) {
    playeranrede = "Frau";
  } else if (playermann.checked) {
    playeranrede = "Herr";
  }
  var playervname = document.getElementById("vnameField").value;
  var playernname = document.getElementById("nnameField").value;
  var playeradresse = document.getElementById("adresseField").value;
  var playerplz = document.getElementById("plzField").value;
  var playerstadt = document.getElementById("stadtField").value;
  var playeremail = document.getElementById("emailField").value;
  var playerzahl = document.getElementById("zahlField").value;
  let playergewinn;
  var gewinn1 = document.getElementById("gewinn1");
  var gewinn2 = document.getElementById("gewinn2");
  var gewinn3 = document.getElementById("gewinn3");
  if (gewinn1.selected) {
    playergewinn = "Gratis Menu";
  } else if (gewinn2.selected) {
    playergewinn = "1 Jahr 5% Rabatt";
  } else if (gewinn3.selected) {
    playergewinn = "einmalig 75% Rabatt";
  }
 
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "al1", // SQL Gruppen Namen
    pw: "633aa9e9", // SQL Passwort
    tableName: "spieler", // Name der Tabelle in der SQL Datenbank

    columns: {
      anrede: playeranrede,
      vname: playervname,
      nname: playernname,
      adresse: playeradresse,
      plz: playerplz,
      stadt: playerstadt,
      email: playeremail,
      zahl: playerzahl,
      gewinn: playergewinn
    }
  };

  // Beispiel-Ausgabe der Daten in der Konsole
  console.log("anrede:", playeranrede);
  console.log("vname:", playervname);
  console.log("nname:", playernname);
  console.log("adresse:", playeradresse);
  console.log("plz:", playerplz);
  console.log("stadt:", playerstadt);
  console.log("email:", playeremail);
  console.log("zahl:", playerzahl);
  console.log("gewinn:", playergewinn);

  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  // Nach dem Speichern verschwindet das Formular
  formContainer.classList.add("hidden");
  
});