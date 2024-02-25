let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroDeIntentos = 3;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (intentos == numeroDeIntentos) {
        asignarTextoElemento('h1',`completaste los ${numeroDeIntentos} intentos`);
        asignarTextoElemento('p','No tienes más intentos');
        //habilitar el reinicio del juego
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            //El usuario no acertó.
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p','El número secreto es menor');
            } else {
                asignarTextoElemento('p','El número secreto es mayor');
                }
                intentos =intentos + 1;
                limpiarCaja();
            }
            return;   
        }    
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    //console.log(listaNumerosSorteados);
    //console.log(listaNumerosSorteados.length);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //console.log("intentos " + intentos);
    //console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
