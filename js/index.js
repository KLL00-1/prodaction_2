const btnMenu = document.getElementById("btn_menu");
const menu = document.querySelector(".menu_btn");
const navMini = document.querySelector(".nav_mini");
const ulMenuMini = document.querySelector(".ulMenuMini");

// let number = -100;

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  navMini.classList.toggle("transform");
  ulMenuMini.classList.toggle("transform_li");
});

// function menuOpen() {
//   setInterval(() => {
//     if (menu.classList != "menu_btn" && number < 0) {
//       number += 1;
//       navMini.style.top = number + "%";
//       navMini.style.right = number + "%";
//     } else if (menu.classList == "menu_btn" && number > -100) {
//       number -= 1;
//       navMini.style.top = number + "%";
//       navMini.style.right = number + "%";
//     }
//   }, 1);
// }
