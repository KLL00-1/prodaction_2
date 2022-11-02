const btnMenu = document.getElementById("btn_menu");
const menu = document.querySelector(".menu_btn");
const navMini = document.querySelector(".nav_mini");
let number = -100;

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  menuOpen();
});

function menuOpen() {
  setInterval(() => {
    if (menu.classList != "menu_btn" && number < 0) {
      number += 2;
      navMini.style.right = number + "%";
    }
  }, 1);
  setInterval(() => {
    if (
      menu.classList == "menu_btn" &&
      menu.classLists != "menu_open" &&
      number > -100
    ) {
      number -= 2;
      navMini.style.right = number + "%";
    }
  }, 1);
}
