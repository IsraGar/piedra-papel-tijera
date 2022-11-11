function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🪨";
  } else if (jugada == 2) {
    resultado = "Papel 🧻";
  } else if (jugada == 3) {
    resultado = "Tijera ✂️";
  } else {
    resultado = "Opción no válida";
  }
  return resultado;
}
//1 piedra, 2 papel, 3 tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elige una opción:\n 1 piedra\n 2 papel\n 3 tijera");
  //alert('Elegiste ' + jugador);
  alert("Tu eliges " + eleccion(jugador));
  alert("PC elige " + eleccion(pc));

  //Combate
  if (pc == jugador) {
    alert("EMPATE");
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    alert("GANASTE");
    triunfos++;
  } else {
    alert("PERDISTE");
    perdidas++;
  }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces");
