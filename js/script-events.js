/* Events JS*/

function myPopUp1() {
  var myPopUp1 = window.open(
    "events-popup1.html",
    "",
    "width=700,height=400,top=200,left=550"
  );
  myPopUp1.focus();
}

function myPopUp2() {
  var myPopUp2 = window.open(
    "events-popup2.html",
    "",
    "width=700,height=400,top=200,left=550"
  );
  myPopUp2.focus();
}

function myPopUp3() {
  var myPopUp3 = window.open(
    "events-popup3.html",
    "",
    "width=700,height=400,top=200,left=550"
  );
  myPopUp3.focus();
}

function myCalendarPopUp() {
  var myCalendarPopUp = window.open(
    "events-popupcalendar.html",
    "",
    "width=800,height=650,top=100,left=500"
  );
  myCalendarPopUp.focus();
}

/*modal window*/

const modal = document.getElementById("myModal");
const btn1 = document.getElementById("eventListing1");

btn1.onclick = function () {
  modal.style.display = "block";
};

const modal2 = document.getElementById("myModal2");
const btn2 = document.getElementById("eventListing2");

btn2.onclick = function () {
  modal2.style.display = "block";
};

const modal3 = document.getElementById("myModal3");
const btn3 = document.getElementById("eventListing3");

btn3.onclick = function () {
  modal.style.display = "block";
};

/*close modal windows*/
const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
