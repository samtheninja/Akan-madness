function akan() {
  var cc = parseInt(document.getElementById("cc").value)
  var yy = parseInt(document.getElementById("yy").value)
  var mm = parseInt(document.getElementById("mm").value)
  var dd = parseInt(document.getElementById("dd").value)

  var gender=parseInt(document.getElementById("gender").value)


  var number = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  var daysOfWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

  var maleNames = ["kwasi","kwadwo","kwabena","Kwaku","Yaw","Kofi","Kwame"];

  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

  if (cc < 0 || cc > 20) {
    alert("invalid century");
    return false;
  }
  else if (yy < 0 || yy > 99) {
    alert("invalid year");
    return false;
  }
  else if (mm <= 0 || mm > 12) {
    alert("invalid month");
    return false
  }
  else if (dd <= 0 || dd > 31) {
    alert("invalid day");
    return false
  }
  else if (mm===2 && dd>29) {
    alert("invalid day");
    return false
  }
  else if ((mm===2 || mm===4 || mm===6 || mm===8 || mm===10) && dd>30) {
    alert("invalid day");
    return false
  }

  else if (gender===0) {
    alert("select gender");
    return false;
}
if (gender===1 && (daysOfWeek[number]==="sunday")) {
    document.getElementById("results").innerHTML="you were born on a sunday your akan name is " + maleNames[0];
}
else if (gender===1 && (daysOfWeek[number]==="monday")) {
    document.getElementById("results").innerHTML="you were born on a monday your akan name is " + maleNames[1];
}
else if (gender===1 && (daysOfWeek[number]==="tuesday")) {
    document.getElementById("results").innerHTML="you were born on a tuesday your akan name is " + maleNames[2];
}
else if (gender===1 && (daysOfWeek[number]==="wednesday")) {
    document.getElementById("results").innerHTML="you were born on a wednesday your akan name is " + maleNames[3];
}
else if (gender===1 && (daysOfWeek[number]==="thursday")) {
    document.getElementById("results").innerHTML="you were born on a thursday your akan name is " + maleNames[4];
}
else if (gender===1 && (daysOfWeek[number]==="friday")) {
    document.getElementById("results").innerHTML="you were born on a friday your akan name is " + maleNames[5];
} 
else if(gender===1 && (daysOfWeek[number]==="saturday")) {
    document.getElementById("results").innerHTML="you were born on a saturday your akan name is " + maleNames[6];
}
else if (gender===2 && (daysOfWeek[number]==="sunday")) {
    document.getElementById("results").innerHTML="you were born on a sunday your akan name is " + femaleNames[0];
}

else if (gender===2 && (daysOfWeek[number]==="monday")) {
  document.getElementById("results").innerHTML="you were born on a monday your akan name is " + femaleNames[1];
}
else if (gender===2 && (daysOfWeek[number]==="tuesday")) {
  document.getElementById("results").innerHTML="you were born on a tuesday your akan name is " + femaleNames[2];
}
else if (gender===2 && (daysOfWeek[number]==="wednesday")) {
  document.getElementById("results").innerHTML="you were born on a wednesday your akan name is " + femaleNames[3];
}
else if (gender===2 && (daysOfWeek[number]==="thursday")) {
  document.getElementById("results").innerHTML="you were born on a thursday your akan name is " + femaleNames[4];
}
else if (gender===2 && (daysOfWeek[number]==="friday")) {
  document.getElementById("results").innerHTML="you were born on a friday your akan name is " + femaleNames[5];
}
else if (gender===2 && (daysOfWeek[number]==="saturday")) {
  document.getElementById("results").innerHTML="you were born on a saturday your akan name is " + femaleNames[6];
}

}


