const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links li");
const linkHref = document.querySelectorAll(".linksNav")

if(burger){
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}

function linkAction(){
  nav.classList.remove("nav-active")
  burger.classList.remove("toggle")
}
linkHref.forEach(n => n.addEventListener('click', linkAction))
