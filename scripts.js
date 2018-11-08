function showTable() {
  var stopnieX1 = document.forms["coordinatesForm"]["stopnie1"].value;
  var minutyX1 = document.forms["coordinatesForm"]["minuty1"].value;
  var sekundyX1 = document.forms["coordinatesForm"]["sekundy1"].value;
  var kierunekX1 = document.forms["coordinatesForm"]["kierunek1"].value;
  var stopnieX2 = document.forms["coordinatesForm"]["stopnie2"].value;
  var minutyX2 = document.forms["coordinatesForm"]["minuty2"].value;
  var sekundyX2 = document.forms["coordinatesForm"]["sekundy2"].value;
  var kierunekX2 = document.forms["coordinatesForm"]["kierunek2"].value;


  if (stopnieX1 == "52" && minutyX1 == "18" && sekundyX1 == "39" && kierunekX1.toLowerCase() == "N".toLowerCase() &&
  stopnieX2 == "20" && minutyX2 == "48" && sekundyX2 == "45" && kierunekX2.toLowerCase() == "E".toLowerCase() ) {
    alert("Good job!\nOto miejsce zbiórki.");
    document.getElementById("resultTable").style.visibility = "visible";
    document.getElementById("myMap").style.visibility = "visible";
  }
}
