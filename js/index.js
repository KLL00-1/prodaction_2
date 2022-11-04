const btnMenu = document.getElementById("btn_menu");
const menu = document.querySelector(".menu_btn");
const navMini = document.querySelector(".nav_mini");
const ulMenuMini = document.querySelector(".ulMenuMini");
const scrollBar1 = document.getElementById("1");
const scrollBar2 = document.getElementById("2");
let pos1 = 0;
let pos2 = -1400;

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  navMini.classList.toggle("transform");
  ulMenuMini.classList.toggle("transform_li");
});

setInterval(() => {
  if (pos1 < 1400 && pos2 < 1400) {
    pos1 += 0.3;
    pos2 += 0.3;
    scrollBar2.style.left = pos2 + "px";
    scrollBar1.style.left = pos1 + "px";
  } else if (pos2 > 0) {
    pos1 = -1400;
    pos2 = 0;
  } else if (pos1 >= 0 && pos2 >= 1400) {
    pos2 = -1400;
    pos1 = 0;
  }
}, 1);

const elA = document.querySelector(".a");

window.addEventListener("scroll", trackScroll);
function trackScroll() {
  let scroll = window.pageYOffset;
  // let coord = document.documentElement.clientHeight;

  if (scroll >= 100) {
    elA.classList.add("scroll_transform");
  } else if (scroll < 100) elA.classList.remove("scroll_transform");
}
