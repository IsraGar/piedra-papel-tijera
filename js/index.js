const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

let pc = 0;
let jugador = 0;

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccionJugador(opt){
  let resultado = "";
  if (opt == 1) {
    resultado = "Piedra 🪨";
  } else if (opt == 2) {
    resultado = "Papel 🧻";
  } else if (opt == 3) {
    resultado = "Tijera ✂️";
  } else {
    resultado = "Opción no válida";
  }
  return resultado;
}