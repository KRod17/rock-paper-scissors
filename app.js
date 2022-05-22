const eleccionComputadoraDisplay = document.getElementById('eleccion-computadora');
const eleccionUsuarioDisplay = document.getElementById('eleccion-usuario');
const resultDisplay = document.getElementById('resultado');
const opcionesPosibles = document.querySelectorAll('img');
const countWinDisplay = document.getElementById('winCount');
const countLoseDisplay = document.getElementById('loseCount');
let eleccionUsuario;
let resultado;
let countWin = 0;
let countLose = 0;

opcionesPosibles.forEach(opcionesPosibles => opcionesPosibles.addEventListener('click', (e) => {
    eleccionUsuario = e.target.id;
    eleccionUsuarioDisplay.innerHTML = eleccionUsuario;
    generaEleccionComputadora();
    getResultados();
}))

function generaEleccionComputadora(){
    const nroRandom = Math.floor(Math.random() * 3 + 1);
    switch(nroRandom){
        case 1:
            eleccionComputadora = 'Piedra';
            break;
        
        case 2:
            eleccionComputadora = 'Papel';
            break;

        case 3:
            eleccionComputadora = 'Tijeras';
            break;
    }
    eleccionComputadoraDisplay.innerHTML = eleccionComputadora;
}

function getResultados(){
    if(eleccionComputadora === eleccionUsuario){
        resultado = "Es un Empate!";
    }
    if(eleccionComputadora==='Piedra' && eleccionUsuario === 'Papel'){
        resultado = "Tu Ganas!";
        countWin++;
    }
    if(eleccionComputadora==='Piedra' && eleccionUsuario === 'Tijeras'){
        resultado = "Perdiste!";
        countLose++;
    }
    if(eleccionComputadora==='Papel' && eleccionUsuario === 'Tijeras'){
        resultado = "Tu Ganas!";
        countWin++;
    }
    if(eleccionComputadora==='Papel' && eleccionUsuario==='Piedra'){
        resultado = "Perdiste!";
        countLose++;
    }
    if(eleccionComputadora==='Tijeras' && eleccionUsuario==='Piedra'){
        resultado = 'Tu Ganas!'
        countWin++;
    }
    if ( eleccionComputadora==='Tijeras' && eleccionUsuario==='Papel'){
        resultado = "Perdiste!"
        countLose++;
    }
    resultDisplay.innerHTML = resultado;
    countWinDisplay.innerHTML = countWin;
    countLoseDisplay.innerHTML = countLose;
}

function reset(){
    countLose = 0;
    countWin = 0;
    countWinDisplay.innerHTML = countWin;
    countLoseDisplay.innerHTML = countLose;
    eleccionComputadoraDisplay.innerHTML = "";
    eleccionUsuarioDisplay.innerHTML = "";
    resultDisplay.innerHTML = "";
}