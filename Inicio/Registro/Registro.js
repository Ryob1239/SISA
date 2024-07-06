function handleLogin(event) {
    event.preventDefault(); // Previene la acción por defecto del formulario
    var destino;
        alert('Usuario registrado exitosamente');
        destino = '../Inicio/inicio.html';
    // Redirigir al usuario al destino correspondiente
    window.location.href = destino;
}
