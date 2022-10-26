var clickCounter = 0;
function changeImage(fileName) {
  clickCounter++;
  let img = document.querySelector("#original-layout");
  img.setAttribute("src", fileName);

  let opacityChange = document.getElementsByClassName(".room-button");
  opacityChange.style.opacity = "0.75";
  if (clickCounter == 2) {
    img = document.querySelector("#original-layout");
  }
}
function toggle() {
  var x = document.getElementById;
}
