// Initialisieren der ausgaben im Januar und des monatlichen Anstiegs
var ausgabenJanuar = 214;
var monatlicherAnstieg = 34;

// Array mit den Monatsnamen
var monatsnamen = ["Januar", "Februar", "März", "April", "Mai", "Juni"];

// initialisieren der Summe
var summe = 0;

// HTML-Tabelle beginnen
document.write("<table>");
document.write("<tr><th>Haushaltsbuch - Ausgaben</th></tr>");

for (var i = 0; i < monatsnamen.length; i++) {

   // ausgaben für diesen Monat berechnen
  var ausgabenDieserMonat = ausgabenJanuar + i * monatlicherAnstieg;
  document.write("<tr>");
  document.write("<td>" + monatsnamen[i] + "</td>");
  document.write("<td>" + ausgabenDieserMonat + " €</td>");
  document.write("</tr>");
  summe += ausgabenDieserMonat;
}

var durchschnitt = summe / monatsnamen.length;

// Die summe und den Durchschnitt in die Taselle eintragen
document.write("<tr>");
document.write("<td><b>Summe</b></td>");
document.write("<td>" + summe + " €</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><b>Durchschnitt</b></td>");
document.write("<td>" + durchschnitt + " €</td>");
document.write("</tr>");

document.write("</table>");
