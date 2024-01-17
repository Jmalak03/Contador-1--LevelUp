const contador = document.getElementById("cont");
const btnDisminuir = document.getElementById("disminuir");
const btnReset = document.getElementById("resetear");
const btnAumentar = document.getElementById("aumentar");

let cont = parseInt(contador.textContent);

btnDisminuir.addEventListener('click', disminuir);
function disminuir() {
    cont--;
    if (cont < 0) 
    {
        contador.style = "color:red";
    }
    else if (cont == 0) 
    {
        contador.style = "color:pink";
    }
    contador.innerText = cont;

    btnDisminuir.style.borderColor = "red";
    btnAumentar.style.borderColor = "black";
    btnReset.style.borderColor = "black";
}

btnReset.addEventListener('click', resetear);
function resetear() {
    cont = 0;
    contador.innerText = cont;
    contador.style = "color:pink";

    btnReset.style.borderColor = "pink";
    btnAumentar.style.borderColor = "black";
    btnDisminuir.style.borderColor = "black";
}

btnAumentar.addEventListener('click', aumentar);
function aumentar() {
    cont++;
    if (cont > 0) 
    {
        contador.style = "color:green";
    }
    else if (cont == 0) 
    {
        contador.style = "color:pink";
    }
    contador.innerText = cont;

    btnAumentar.style.borderColor = "green";
    btnReset.style.borderColor = "black";
    btnDisminuir.style.borderColor = "black";
}