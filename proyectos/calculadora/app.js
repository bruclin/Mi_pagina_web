const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumero = document.querySelectorAll('.numero');
const botonesDeoperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual)

botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => {
         display.agregarNumero(boton.innerHTML);
    });
});


botonesDeoperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})