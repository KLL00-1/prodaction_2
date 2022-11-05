const btnMenu = document.getElementById("btn_menu");
const menu = document.querySelector(".menu_btn");
const navMini = document.querySelector(".nav_mini");
const ulMenuMini = document.querySelector(".ulMenuMini");
const scrollBar1 = document.getElementById("1");
const scrollBar2 = document.getElementById("2");
const transformLinks = document.querySelector(".start_links");
let pos1 = 0;
let pos2 = -1400;

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  navMini.classList.toggle("transform");
  ulMenuMini.classList.toggle("transform_li");
  transformLinks.classList.toggle("transform_links");
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

const scrollButton = document.getElementById("Up");

window.addEventListener("scroll", trackScroll);
function trackScroll() {
  let scroll = window.pageYOffset;
  // let coord = document.documentElement.clientHeight;

  if (scroll >= 100) {
    scrollButton.classList.add("scroll_buttom");
  } else if (scroll < 100) {
    scrollButton.classList.remove("scroll_buttom");
  }
}
