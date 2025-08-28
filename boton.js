/* Boton que cambia el texto al hacer click e ingresa fecha y hora local*/

document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');

    boton.addEventListener('click', function() {
        const fechaHora = new Date().toLocaleString();
        mensaje.textContent = `Botón Clickeado! ${fechaHora}`;
    });
});

