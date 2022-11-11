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

//Another attempt - doesn't work for any of the modal windows

/*var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
btn[0].onclick = function () {
  modal[0].style.display = "block";
};

btn[1].onclick = function () {
  modal[1].style.display = "block";
};
btn[2].onclick = function () {
  modal[2].style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span[0].onclick = function () {
  modal[0].style.display = "none";
};

span[1].onclick = function () {
  modal[1].style.display = "none";
};
span[2].onclick = function () {
  modal[2].style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};*/

// One attempt (only works for the first modal window)

/*const modal = document.getElementById("myModal");
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
  modal3.style.display = "block";
};

/*close modal windows*/
/*const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};*/
