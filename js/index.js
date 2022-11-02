const btnMenu = document.getElementById("btn_menu");
const menu = document.querySelector(".menu_btn");
const navMini = document.querySelector(".nav_mini");
const anime = document.querySelector(".one");
console.log(anime);
let number = -100;

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  addAnimeMenu();
  menuOpen();
});

function menuOpen() {
  setInterval(() => {
    if (menu.classList != "menu_btn" && number < 0) {
      number += 2;
      navMini.style.right = number + "%";
      navMini.style.top = number + "%";
    } else if (menu.classList == "menu_btn" && number > -100) {
      number -= 2;
      navMini.style.right = number + "%";
      navMini.style.top = number + "%";
    }
  }, 1);
}
function addAnimeMenu() {
  anime.classList.toggle("anime");
}
