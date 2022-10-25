var clickCounter = 0;
function changeImage(fileName) {
  clickCounter++;
  let img = document.querySelector("#original-layout");
  img.setAttribute("src", fileName);
  if (clickCounter == 2) {
    img = document.querySelector("#original-layout");
  }
}
