var nav = document.querySelector("nav ul");
var boolean = false;

function navBar() {
  if (boolean == false) {
    nav.style.margin = "0";
    nav.style.transition = "1s";
    boolean = true;
  } else {
    nav.style.margin = "0 0 0 -100%";
    nav.style.transition = "1s";
    boolean = false;
  }
  console.log('nav bar esta abierto ', boolean);
}
