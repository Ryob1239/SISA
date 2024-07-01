    function handleLogin(event) {
        event.preventDefault(); // Previene la acción por defecto del formulario

        var usuario = document.getElementById('usuario').value;
        var contrasena = document.getElementById('contrasena').value;

        // Detectar la letra en el campo de usuario
        var primeraLetra = usuario.charAt(0).toLowerCase();

        var destino;
        if (primeraLetra === 'a') {
            destino = 'Alumno.html';
        } else if (primeraLetra === 'd') {
            destino = 'Docente.html';
        }
        else if (primeraLetra === 'm') {
            destino = 'Administrativos.html';
        } else {
            alert('Usuario no válido');
            return;
        }

        // Redirigir al usuario al destino correspondiente
        window.location.href = destino;
    }
