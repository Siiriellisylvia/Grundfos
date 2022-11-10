//left side navigation
//Date
var dateToday = new Date();
var dd = dateToday.getDate();
var mm = dateToday.getMonth() + 1;
var yyyy = dateToday.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}
dateToday = dd + "." + mm + "." + yyyy;
console.log(dateToday);
document.getElementById("date").innerHTML = dateToday;

//Time
function time() {
  var timeToday = new Date();
  var hh = timeToday.getHours();
  var mm = timeToday.getMinutes();
  if (hh < 10) {
    hh = "0" + hh;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  timeToday = hh + ":" + mm;
  console.log(timeToday);
  document.getElementById("time").innerHTML = timeToday;
}

setInterval(time, 1000);

function changeImage(facility_element, fileName) {
  let img = document.querySelector("#original-layout");
  img.setAttribute("src", fileName);

  // fetch all buttons
  var buttons = document.getElementsByClassName("room-button");

  // set opacity of all buttons to 0.75
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.opacity = "0.75";
  }

  // set opacity of button in current facility to 1
  facility_element.getElementsByClassName("room-button")[0].style.opacity = "1";
}
