const elemento = document.querySelectorAll('#instrumentros');
console.log(elemento); 

// document.addEventListener('click', function(){
//     console.log('Estoy haciendo algo'); 
// })
elemento[0].addEventListener("click", function () {
    new Audio("../assets/sonidos/crash.mp3").play();
});
elemento[1].addEventListener("click", function () {
    new Audio("../assets/sonidos/kick-bass.mp3").play();
});
elemento[2].addEventListener("click", function () {
    new Audio("../assets/sonidos/snare.mp3").play();
});
elemento[3].addEventListener("click", function () {
    new Audio("../assets/sonidos/tom-1.mp3").play();
});
elemento[4].addEventListener("click", function () {
    new Audio("../assets/sonidos/tom-2.mp3").play();
});
elemento[5].addEventListener("click", function () {
    new Audio("../assets/sonidos/tom-3.mp3").play();
});
elemento[6].addEventListener("click", function () {
    new Audio("../assets/sonidos/tom-4.mp3").play();
});

document.addEventListener("keypress", function(e){
    reproducirSonido(e.key); 
})

const reproducirSonido = (tecla) => {
    if(tecla == 'a'){
        new Audio("../assets/sonidos/crash.mp3").play();
    }else if (tecla == 's'){
        new Audio("../assets/sonidos/kick-bass.mp3").play();
    }else if (tecla == 'd'){
        new Audio("../assets/sonidos/snare.mp3").play();
    }else if (tecla == 'f'){
        new Audio("../assets/sonidos/tom-1.mp3").play();
    }else if (tecla == 'g'){
        new Audio("../assets/sonidos/tom-2.mp3").play();
    }else if (tecla == 'h'){
        new Audio("../assets/sonidos/tom-3.mp3").play();
    }else if (tecla == 'j'){
        new Audio("../assets/sonidos/tom-4.mp3").play();
    }

}