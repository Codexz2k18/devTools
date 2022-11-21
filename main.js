function moverPosicionRandom(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + "px";
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + "px";
    elm.style.transform = `translate(${moverPosicionRandom}px, 0px)`;
    elm.style.transition = "all 0.3s ease";
}

let btnNo = document.getElementById("btn_no");

btnNo.addEventListener("mouseenter", function (e) { moverPosicionRandom(e.target) });

btnNo.addEventListener("mouseenter", function (e) {
    const sonido = new Audio("sounds/sound.mp4")
    sonido.play();
    sonido.volume = 0.1;
});
