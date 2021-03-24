let navBar = document.querySelector(".navbar");
let logText = document.querySelector("#logText");
document.onscroll = () => {
   if(window.scrollY > 20) {
    navBar.classList.add("sticky")
   } else {
    navBar.classList.remove("sticky");
   }
}


let menuBtn = document.querySelector("#btn-menu");
let menu = document.querySelector(".menu");


menuBtn.addEventListener("click", openMenu)
function openMenu(e) {
   menu.classList.toggle("active");
   e.target.classList.toggle("active"); 
}

