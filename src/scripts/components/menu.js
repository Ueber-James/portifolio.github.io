export default function hamburgerMenu(){

// selecionar elementos do DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

// adicionar evento de clique ao botão do menu
menuBtn.addEventListener("click", () => {
  // adicionar ou remover a classe "menu--open"
  menu.classList.toggle("menu--open");
});

// adicionar evento de redimensionamento da tela
window.addEventListener("resize", () => {
  // remover a classe "menu--open" caso a tela seja redimensionada acima de 1024px
  if (window.innerWidth > 1024) {
    menu.classList.remove("menu--open");
  }
});



}

hamburgerMenu()
