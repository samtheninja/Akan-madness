function akan() {
  var cc = parseInt(document.getElementById("cc").value)
  var yy = parseInt(document.getElementById("yy").value)
  var mm = parseInt(document.getElementById("mm").value)
  var dd = parseInt(document.getElementById("dd").value)

  var gender = document.getElementById("gender").value
  var gender = document.getElementById("gender").value
  var gender = document.getElementById("gender").value


  var number = parseFloat(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7

  var daysofweek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]

  var maleNames = [
    "kwasi",
    "kwadwo",
    "kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ]

  var femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ]

  if (cc < 0 || cc > 20) {
    alert("invalid century")
  }
  else if (yy < 0 || yy > 99) {
    alert("invalid year")
  }
  else if (mm <= 0 || mm > 20) {
    alert("invalid month")
  }
  else if (dd <= 0 || dd > 31) {
    alert("invalid day ")
  }
  else if (gender !== "male" && gender !== "female") {
    alert("please  enter gender")
  }

}
akan();