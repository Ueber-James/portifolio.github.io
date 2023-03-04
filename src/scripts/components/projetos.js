

const root = document.getElementById("container-item-list");
const list = [
  {
    src: "../img/fairytail.gif",
    titulo: "Expanding-Cards",
    link: "https://expandingcards1993.netlify.app/",
    descrição: "transições de expansão de cartões",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },
  {
    src: "https://img.elo7.com.br/product/zoom/3FE757D/lancamento-em-breve.jpg",
    titulo: "EM BREVE",
    descrição: "EM BREVE",
  },


];

let estruturaCard = "";

list.forEach((card) => {
  estruturaCard += `
    <div class="col card">
      <a class="card-media">
        <img src="${card.src}" width="100%" height="100%" />
      </a>
      <div class="card-content">
        <div class="card-cont-header">
          <div class="cont-left">
            <h3 style="font-weight: 600">${card.titulo}</h3>
          </div>
          <div class="cont-right">
            <a href="${card.link}" target="_blank" class="btn">PROJETO</a>
          </div>
        </div>
        <div class="describe">
          ${card.descrição}
        </div>
      </div>
    </div>
  `;
});

root.innerHTML = estruturaCard;




// Seleciona os botões "Mostrar mais" e "Mostrar menos"
const mostrarMaisBtn = document.getElementById("mostrar-mais");
const mostrarMenosBtn = document.getElementById("mostrar-menos");

// Define a quantidade de cards a serem mostrados inicialmente
const quantidadeInicial = 8;

// Seleciona todos os cards
const cards = document.querySelectorAll(".card");

// Esconde todos os cards que excedem a quantidade inicial
cards.forEach((card, index) => {
  if (index >= quantidadeInicial) {
    card.classList.add("hidden");
  }
});

// Adiciona um event listener ao botão "Mostrar mais"
mostrarMaisBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("hidden");
  });
  mostrarMaisBtn.style.display = "none";
  mostrarMenosBtn.style.display = "block";
});

// Adiciona um event listener ao botão "Mostrar menos"
mostrarMenosBtn.addEventListener("click", () => {
  cards.forEach((card, index) => {
    if (index >= quantidadeInicial) {
      card.classList.add("hidden");
    }
  });
  mostrarMaisBtn.style.display = "block";
  mostrarMenosBtn.style.display = "none";
});