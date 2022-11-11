const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const divHistory = document.querySelector(".history");
const divResult = document.querySelector(".result");

btnRock.addEventListener("click", getValor);
btnPaper.addEventListener("click", getValor);
btnScissors.addEventListener("click", getValor);

let pc = 0;
let jugador = 0;
let triunfos = 0;
let perdidas = 0;

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getValor() {
  pc = aleatorio(1, 3);
  jugador = this.value;
  const pCont = document.createElement("p");
  pCont.innerText =
    "Elegiste " +
    eleccion(jugador) +
    " | PC elige " +
    eleccion(pc) +
    " - " +
    jugar(jugador, pc);
  divHistory.appendChild(pCont);
  if (jugar(jugador, pc) == "GANASTE") {
    triunfos++;
  } else if (jugar(jugador, pc) == "PERDISTE") {
    perdidas++;
  }
  marcador(triunfos,perdidas);
}

function marcador(victoria, derrota){
  if(victoria == 3){
    divResult.classList.remove('inactive');
    const pContGanar = document.createElement("p");
    pContGanar.innerText = 'Has gando el juego, tienes 3 victorias 😀';    

    const pContGanarImg = document.createElement("p");
    const imgVictoria = document.createElement('img');
    imgVictoria.setAttribute('src', 'https://images.pexels.com/photos/4588037/pexels-photo-4588037.jpeg?auto=compress&cs=tinysrgb&w=300');
    pContGanarImg.append(imgVictoria);

    const pContGanarBtn = document.createElement("p");
    const btnReset = document.createElement('button');
    btnReset.innerText = 'Reiniciar';
    pContGanarBtn.append(btnReset);

    btnReset.addEventListener('click', reset);

    divResult.append(pContGanar,pContGanarImg, pContGanarBtn);
  }else if(derrota == 3){
    divResult.classList.remove('inactive');
    const pContGanar = document.createElement("p");
    pContGanar.innerText = 'Has perdido el juego, tienes 3 derrotas 😥';    

    const pContGanarImg = document.createElement("p");
    const imgVictoria = document.createElement('img');
    imgVictoria.setAttribute('src', 'https://images.pexels.com/photos/4445619/pexels-photo-4445619.jpeg?auto=compress&cs=tinysrgb&w=300');
    pContGanarImg.append(imgVictoria);

    const pContGanarBtn = document.createElement("p");
    const btnReset = document.createElement('button');
    btnReset.innerText = 'Reiniciar';
    pContGanarBtn.append(btnReset);

    btnReset.addEventListener('click', reset);

    divResult.append(pContGanar,pContGanarImg, pContGanarBtn);
  }  
}

function reset(){
  triunfos = 0;
  perdidas = 0;
  divHistory.innerText = '';
  divResult.innerText = '';
  divResult.classList.add('inactive');

}

function eleccion(opt) {
  let resultado = "";
  if (opt == 1) {
    resultado = "Piedra 🥌";
  } else if (opt == 2) {
    resultado = "Papel 🧻";
  } else if (opt == 3) {
    resultado = "Tijera ✂️";
  } else {
    resultado = "Opción no válida";
  }
  return resultado;
}

function jugar(jugador, pc) {
  let resultado = "";
  if (pc == jugador) {
    resultado = "EMPATE";
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    resultado = "GANASTE";
  } else {
    resultado = "PERDISTE";
  }
  return resultado;
}
