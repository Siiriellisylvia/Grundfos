/*const passwordField = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");

eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
  })

  const toggleModal = () => {
    const { classList } = document.body;
    if (classList.contains("open")) {
      classList.remove("open");
      classList.add("closed");
    } else {
      classList.remove("closed");
      classList.add("open");
    }
  };


eye.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});*/

const passwordField = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");

eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
  })

  const toggleModal = () => {
    const { classList } = document.body;
    if (classList.contains("open")) {
      classList.remove("open");
      classList.add("closed");
    } else {
      classList.remove("closed");
      classList.add("open");
    }
  };


eye.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

eye.addEventListener("click", function () {
  passwordField.setAttribute("type", type);
});


/** actual form drop down menu*/
function show(a){
  document.querySelector('.text02').value = a;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
  dropdown.classList.toggle('active');
}


