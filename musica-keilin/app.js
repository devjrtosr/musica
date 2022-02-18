const boton = document.querySelectorAll("#instrumento");

// Por click
boton[0].addEventListener("click", () => {
  new Audio("../assets/sonidos/crash.mp3").play();
});

boton[1].addEventListener("click", () => {
  new Audio("../assets/sonidos/tom-3.mp3").play();
});

boton[2].addEventListener("click", () => {
  new Audio("../assets/sonidos/tom-1.mp3").play();
});

boton[3].addEventListener("click", () => {
  new Audio("../assets/sonidos/kick-bass.mp3").play();
});

boton[4].addEventListener("click", () => {
  new Audio("../assets/sonidos/tom-2.mp3").play();
});

boton[5].addEventListener("click", () => {
  new Audio("../assets/sonidos/snare.mp3").play();
});

boton[6].addEventListener("click", () => {
  new Audio("../assets/sonidos/tom-4.mp3").play();
});

// Por presionar la tecla
document.addEventListener("keypress", (e) => {
  reproducirSonido(e.key);
});

const reproducirSonido = (teclaPresionada) => {
  if (teclaPresionada == "a") {
    new Audio("../assets/sonidos/crash.mp3").play();
  } else if (teclaPresionada == "s") {
    new Audio("../assets/sonidos/tom-3.mp3").play();
  } else if (teclaPresionada == "d") {
    new Audio("../assets/sonidos/tom-1.mp3").play();
  } else if (teclaPresionada == "f") {
    new Audio("../assets/sonidos/kick-bass.mp3").play();
  } else if (teclaPresionada == "g") {
    new Audio("../assets/sonidos/tom-2.mp3").play();
  } else if (teclaPresionada == "h") {
    new Audio("../assets/sonidos/snare.mp3").play();
  } else if (teclaPresionada == "j") {
    new Audio("../assets/sonidos/tom-4.mp3").play();
  }
};
