function akan() {
  var cc = parseInt(document.getElementById("cc").value)
  var yy = parseInt(document.getElementById("yy").value)
  var mm = parseInt(document.getElementById("mm").value)
  var dd = parseInt(document.getElementById("dd").value)

  var gender=parseInt(document.getElementById("gender").value)


  var number = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7

  var daysOfWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

  var maleNames = ["kwasi","kwadwo","kwabena","Kwaku","Yaw","Kofi","Kwame"]

  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

  if (cc < 0 || cc > 20) {
    alert("invalid century");
    return false;
  }
  else if (yy < 0 || yy > 99) {
    alert("invalid year");
    return false;
  }
  else if (mm <= 0 || mm > 20) {
    alert("invalid month");
    return false
  }
  else if (dd <= 0 || dd > 31) {
    alert("invalid day");
    return false
  }
  else if (gender===0) {
    alert("select gender");
    return false;
}
if (gender===1) {
}if (daysOfWeek[number]==="sunday");{
    document.getElementById("results").innerHTML="you were born on a sunday your akan name is " + maleNames[0];
}
if (gender===1) {
}if (daysOfWeek[number]==="monday");{
    document.getElementById("results").innerHTML="you were born on a monday your akan name is " + maleNames[1];
}
if (gender===1) {
}if (daysOfWeek[number]==="tuesday");{
    document.getElementById("results").innerHTML="you were born on a tuesday your akan name is " + maleNames[2];
}
if (gender===1) {
}if (daysOfWeek[number]==="wednesday");{
    document.getElementById("results").innerHTML="you were born on a wednesday your akan name is " + maleNames[3];
}
if (gender===1) {
}if (daysOfWeek[number]==="thursday");{
    document.getElementById("results").innerHTML="you were born on a thursday your akan name is " + maleNames[4];
}
if (gender===1) {
}if (daysOfWeek[number]==="friday");{
    document.getElementById("results").innerHTML="you were born on a friday your akan name is " + maleNames[5];
}
if (gender===1) {
}if (daysOfWeek[number]==="saturday");{
    document.getElementById("results").innerHTML="you were born on a saturday your akan name is " + maleNames[6];
}
if (gender===2) {
}if (daysOfWeek[number]==="sunday");{
    document.getElementById("results").innerHTML="you were born on a sunday your akan name is " + femaleNames[0];
}
}
if (gender===2) {
}if (daysOfWeek[number]==="sunday");{
  document.getElementById("results").innerHTML="you were born on a monday your akan name is " + femaleNames[1];
}
if (gender===2) {
}if (daysOfWeek[number]==="monday");{
  document.getElementById("results").innerHTML="you were born on a tuesday your akan name is " + femaleNames[2];
}
if (gender===2) {
}if (daysOfWeek[number]==="tuesday");{
  document.getElementById("results").innerHTML="you were born on a wednesday your akan name is " + femaleNames[3];
}
if (gender===2) {
}if (daysOfWeek[number]==="wednesday");{
  document.getElementById("results").innerHTML="you were born on a thursday your akan name is " + femaleNames[4];
}
if (gender===2) {
}if (daysOfWeek[number]==="thursday");{
  document.getElementById("results").innerHTML="you were born on a friday your akan name is " + femaleNames[5];
}
if (gender===2) {
}if (daysOfWeek[number]==="friday");{
  document.getElementById("results").innerHTML="you were born on a saturday your akan name is " + femaleNames[6];
}


  // // alert('gender '+gender)

