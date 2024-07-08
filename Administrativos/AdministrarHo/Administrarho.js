document.querySelector('.logout').addEventListener('click', function(event) {
    event.preventDefault(); // Previene la acción por defecto del enlace
    var mensaje = 'Quiere cerrar sesión?'; // Cambia esto por el mensaje que desees
    var confirmacion = confirm(mensaje);
    if (confirmacion) {
        window.location.href = '../../Inicio/Inicio/Inicio.html'; // Asegúrate de que esta es la página a la que quieres redirigir
    }
});

document.getElementById('TDM32').addEventListener('click', function() {
    document.getElementById('tableh').style.display = 'block';
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('Logo').style.display = 'none';
});

document.getElementById('back').addEventListener('click', function() {
    
    document.getElementById('tableh').style.display = 'none';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('Logo').style.display = 'block';
});