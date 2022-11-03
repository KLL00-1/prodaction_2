const btnMenu = document.getElementById("btn_menu");
const menu = document.querySelector(".menu_btn");
const navMini = document.querySelector(".nav_mini");
const anime = document.querySelector(".one");
const anime2 = document.querySelector(".two");
const anime3 = document.querySelector(".three");
const anime4 = document.querySelector(".four");
const anime5 = document.querySelector(".five");
let number = 0;

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  addAnimeMenu();
  menuOpen();
});

function menuOpen() {
  setInterval(() => {
    if (menu.classList != "menu_btn" && number < 100) {
      number += 1;
      navMini.style.height = number + "vh";
      navMini.style.width = number + "vw";
      anime.style.opacity = number + "%";
      anime2.style.opacity = number + "%";
      anime3.style.opacity = number + "%";
      anime4.style.opacity = number + "%";
      anime5.style.opacity = number + "%";
    } else if (menu.classList == "menu_btn" && number > 0) {
      number -= 1;
      navMini.style.width = number + "vw";
      navMini.style.height = number + "vh";
      anime.style.opacity = number + "%";
      anime2.style.opacity = number + "%";
      anime3.style.opacity = number + "%";
      anime4.style.opacity = number + "%";
      anime5.style.opacity = number + "%";
    }
  }, 1);
}
function addAnimeMenu() {
  anime.classList.toggle("anime");
  anime2.classList.toggle("anime");
  anime3.classList.toggle("anime");
  anime4.classList.toggle("anime");
  anime5.classList.toggle("anime");
}
