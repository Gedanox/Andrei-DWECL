import anime from "./node_modules/animejs/lib/anime.es.js";

function * generator() {
    while(true) {
        yield Math.floor(Math.random() * 300);
        yield Math.floor(Math.random() * 400);
        yield Math.floor(Math.random() * 1000);
    }
    /*Entiendo que esto es unica y exclusivamente por diseño, para mantener
    mayoria de la distribucion a la izquierda y una pequeña parte a la derecha*/
}

const gen = generator();

function random() {
    let elemento = document.querySelector("#contenedor");
    //El while tengo entendido que se puede escribir como estaba de forma válida, pero para que sea mas intuitivo.
    while(elemento.hasChildNodes()){
        elemento.removeChild(elemento.firstChild);
    }
    for (let i=0; i< 800; i++) {
        //dos puntos y coma.
        let nodo = document.createElement("div");
        nodo.className = "cuadro";
        nodo.style="background-color: rgb("+anime.random(155,255)+",0,0)";
        elemento.appendChild(nodo);
    }

    anime.timeline({
        targets: '.cuadro',
        delay: 400,
        duration: 3500,
        endDelay: 400
    }).add({
        targets: '.cuadro',
        translateX: function() {
            return gen.next().value;
        },
        rotate: function() {
            return anime.random(0,360);
        },
        scale: () => {
            return anime.random(0,20);
        },                             
        opacity: [0.5, 1]
    }).add({
        //falta target cuadro.
        targets: '.cuadro',
        translateX: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        complete: random
    });
}

random();
