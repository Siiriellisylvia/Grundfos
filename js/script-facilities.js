function changeImage(fileName) {
  let img = document.querySelector("#original-layout");
  img.setAttribute("src", fileName);
}

function changeStyle() {
  let element = document.getElementById("facility-element1");
  element.style.opacity = 0.75;
  console.log("czy to działa!");
}
