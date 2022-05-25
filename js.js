const hambuger = document.getElementById("nav-toggle"),
  navList = document.getElementById("nav__menu"),
  navBar = document.getElementById("menu__btn"),
  closeBar = document.getElementById("close-btn"),
  aside = document.querySelector("aside");

// window.onscroll = () => {
//   menuBar.classList.remove("fa-times");
//   navBar.classList.remove("active");
// };

// hambuger.onclick = () => {
//   navList.classList.toggle("open");
// };

navBar.onclick = () => {
  aside.classList.toggle("open");
};

closeBar.onclick = () => {
  aside.classList.remove("open");
};
