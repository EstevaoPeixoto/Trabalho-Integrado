let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");
searchBtn.onclick = () =>{
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
}
cancelBtn.onclick = () =>{
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
}

var recreationalEvents = [
    "Piquenique no parque",
    "Festa à fantasia",
    "Campeonato de futebol",
    "Noite de jogos de tabuleiro",
    "Aula de dança",
    "Passeio de bicicleta",
  ];
  
  // Array de exemplos de eventos corporativos
  var corporateEvents = [
    "Seminário de negócios",
    "Workshop de liderança",
    "Conferência sobre inovação",
    "Apresentação de resultados",
    "Treinamento de equipe",
  ];
  
  // Função para exibir exemplos aleatórios em forma de lista
  function displayRandomExamples() {
    var recreationalList = document.getElementById("recreational-events");
    var corporateList = document.getElementById("corporate-events");
  
    // Exibir exemplos aleatórios de eventos recreativos
    for (var i = 0; i < recreationalEvents.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = recreationalEvents[i];
      recreationalList.appendChild(listItem);
    }
  
    // Exibir exemplos aleatórios de eventos corporativos
    for (var j = 0; j < corporateEvents.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = corporateEvents[j];
      corporateList.appendChild(listItem);
    }
  }
  
  // Chamar a função para exibir os exemplos aleatórios ao carregar a página
  displayRandomExamples();
