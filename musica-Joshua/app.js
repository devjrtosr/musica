// Como muestra js la estructura del documento html (DOM)
const element = document.querySelector(".imagen");

//selecciona la primer coincidencia

//querySelectorAll trae un arreglo(nodelist) con todas las coincidencias aunque sea solo una

const instrumentos = document.querySelectorAll("#instrumento");
console.log(instrumentos);

/*
document.addEventListener("click", () => {
  console.log("click");
});

function saludar() {
  console.log("hola");
}

document.addEventListener("keypress", saludar());

document.addEventListener("click", (event) => {
  console.log(event);
});

document.addEventListener("keypress", (e) => {
  console.log(e.key);
});
*/

instrumentos[0].addEventListener("click", (e) => {
  new Audio("../assets/sonidos/crash.mp3").play();
});

instrumentos[1].addEventListener("click", (e) => {
  new Audio("../assets/sonidos/kick-bass.mp3").play();
});

instrumentos[2].addEventListener("click", (e) => {
  new Audio("../assets/sonidos/snare.mp3").play();
});

instrumentos[3].addEventListener("click", (e) => {
  new Audio("../assets/sonidos/tom-1.mp3").play();
});

instrumentos[4].addEventListener("click", (e) => {
  new Audio("../assets/sonidos/tom-2.mp3").play();
});

instrumentos[5].addEventListener("click", (e) => {
  new Audio("../assets/sonidos/tom-3.mp3").play();
});

instrumentos[6].addEventListener("click", (e) => {
  new Audio("../assets/sonidos/tom-4.mp3").play();
});

const reproducirSonido = (tecla) => {
  if (tecla == "q") {
    new Audio("../assets/sonidos/crash.mp3").play();
  } else if (tecla == "w") {
    new Audio("../assets/sonidos/kick-bass.mp3").play();
  } else if (tecla == "e") {
    new Audio("../assets/sonidos/snare.mp3").play();
  } else if (tecla == "r") {
    new Audio("../assets/sonidos/tom-1.mp3").play();
  } else if (tecla == "t") {
    new Audio("../assets/sonidos/tom-2.mp3").play();
  } else if (tecla == "y") {
    new Audio("../assets/sonidos/tom-3.mp3").play();
  } else if (tecla == "u") {
    new Audio("../assets/sonidos/tom-4.mp3").play();
  }
};

document.addEventListener("keypress", (e) => {
  reproducirSonido(e.key);
});
