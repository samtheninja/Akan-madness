function akan() {
  var cc=parseInt(prompt("cc"))
  var yy=parseInt(prompt("yy"))
  var mm=parseInt(prompt("mm"))
  var dd=parseInt(prompt("dd"))
  
  var gender=prompt("male/female")
  
  
  var maleNames=[
    "kwasi",
    "kwadwo",
    "kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ]
  
  var femaleNames=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ]
  var number=(((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7
  
  
  if (cc<0 || cc>20) {
    alert("invalid century")
  }
  else if (yy<0 || yy>99) {
    alert("invalid year")
  }
  else if (mm<=0 || mm>20) {
    alert("invalid month")
  }
  else if (dd<=0 || dd>31) {
    alert("invalid day")
  }
  else if (gender!=="male" && gender!=="female") {
  alert("please enter gender")
  }
  }
  akan();