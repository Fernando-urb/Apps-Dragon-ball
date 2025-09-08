/*
 * JUEGO: GOLPEA AL TOPO
 *
 * Objetivo: Crear un juego donde el jugador debe golpear topos que aparecen
 * aleatoriamente en diferentes agujeros para conseguir puntos.
 *
 * Pasos a seguir:
 * 1. Obtener todos los elementos necesarios del HTML
 * 2. Configurar los sonidos del juego
 * 3. Establecer variables principales del juego (tiempo y puntaje)
 * 4. Crear las funciones básicas del juego:
 *    - Iniciar juego
 *    - Mostrar y ocultar topos
 *    - Contar puntos
 *    - Terminar juego
 */

// elementos html
const hoyos = document.querySelectorAll(".item");
const contenedorJuego = document.querySelector(".container");
const btnIniciar = document.getElementById("start-game");
const btnReiniciar = document.getElementById("restart-game");
const mostrarTiempo = document.getElementById("time-count");
const mostrarPuntos = document.getElementById("score-count");

// sonidos

const sonidoGolpe = new Audio("../sound/whack.mp3");
const musicaFondo = new Audio("../sound/buu.mp3");
musicaFondo.loop = true;
musicaFondo.volume = 0.5;

//variables

let tiempo = 25;
let puntuacion = 0;
let temporizador;
let aparicionTopos;

function iniciarJuego() {
  //reiniciar valores
  tiempo = 25;
  puntuacion = 0;
  mostrarTiempo.textContent = tiempo;
  mostrarPuntos.textContent = puntuacion;

  //ocultar botones durante el juego
  btnIniciar.style.display = "none";
  btnReiniciar.style.display = "none";

  //iniciar musica
  musicaFondo.play();

  //iniciar cuenta regresiva
  temporizador = setInterval(() => {
    tiempo--;
    mostrarTiempo.textContent = tiempo;
    if (tiempo <= 0) {
      terminarJuego();
    }
  }, 1000);

  //comienza a mostar topo
  aparicionTopos = setInterval(mostrarTopo, 600);
}
function mostrarTopo() {
  //si  el juego termino
  if (tiempo <= 0) {
    return; // cortar ejecucion
  }
  // selecionar hoyo aleatorio

  const posicionAleatorio = Math.floor(Math.random() * hoyos.length);
  const topo = hoyos[posicionAleatorio].querySelector(".mole");

  //mstrar el topo

  topo.classList.add("mole-appear");

  // ocultar el topo despues de 1seg

  setTimeout(() => {
    topo.classList.remove("mole-appear");
  }, 1000);
}

function terminarJuego() {

  clearInterval(aparicionTopos);
  clearInterval(temporizador);
  

  musicaFondo.pause();
  musicaFondo.currentTime = 0; //reiniciar musica
 
  //mostrar boton reiniciar cuando termina el juego
  btnReiniciar.style.display = "block";
}

// Evento para cuando se hace click en el botón de iniciar
btnIniciar.addEventListener("click", iniciarJuego);

// Evento para cuando se hace click en el botón de reiniciar
btnReiniciar.addEventListener("click", () => {
  btnIniciar.style.display = "block";
  btnReiniciar.style.display = "none";

});

// Evento para cuando se hace click en el topo

contenedorJuego.addEventListener("click", (e) => {
  if (e.target.classList.contains("mole-clicked")) {
    //sumar puntos 
    puntuacion++;
    mostrarPuntos.textContent = puntuacion;
    // reproducir sonido de golpe
    sonidoGolpe.currentTime = 0;
    sonidoGolpe.play();
    
    // mostrar imagen de golpe en lugar de texto
    const arbusto = e.target.parentElement.previousElementSibling;
    const imagenGolpe = document.createElement("img");

    imagenGolpe.src = "../img/golpe.png"; // Cambia por la imagen que quieras
    imagenGolpe.className = "whack-image";
    imagenGolpe.style.position = "absolute";
    imagenGolpe.style.top = "10%";
    imagenGolpe.style.left = "50%";
    imagenGolpe.style.transform = "translate(-50%, -50%) rotate(-90deg)";
    imagenGolpe.style.width = "80px";
    imagenGolpe.style.height = "100px";
    imagenGolpe.style.zIndex = "100";

    arbusto.appendChild(imagenGolpe);

    // remover la imagen después de 400ms
    setTimeout(() => imagenGolpe.remove(), 400);
  }
})



