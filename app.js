let links = document.querySelector("#myLinks");
let burger = document.querySelector("#hamburger");

burger.addEventListener("click", function() {
  if (links.style.display === "") {
    links.style.display = "block";
  } else {
    links.style.display = "";
  }
});
