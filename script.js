let paragrafo = document.querySelector("p");
let paragrafos = document.querySelectorAll("p");
let botao = document.querySelector("button");
let sonic = document.querySelector("#sonic");

botao.onclick = pintarAzul;
sonic.onclick = correr;

//onmouseenter
//onmouseleave
//onmouseover
//onkeydown
//onblur

function pintarAzul(){
    for(let p of paragrafos){
        p.style.color = "blue";
    }
}

function correr(){
    sonic.style.transform = "translateX(1000px) scale(0.1)";
}
