const sobremi= document.getElementById("sobremi");
const pag2= document.getElementById("pag2");
const volver= document.getElementById("volver");

sobremi.addEventListener("click",()=>{
    pag2.classList.add("entrar");
});

volver.addEventListener("click",()=>{
    pag2.classList.remove("entrar");
})