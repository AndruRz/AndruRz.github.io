document.querySelectorAll('.lever').forEach(lever => {
    let initialY = 0;
    let isDragging = false;

    lever.addEventListener('mousedown', function(event) {
        initialY = event.clientY; // Guardamos la posición inicial del ratón
        isDragging = true;
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            let leverRect = lever.getBoundingClientRect();
            let newY = event.clientY - initialY; // Calcular cuánto se ha movido el ratón verticalmente

            // Limitar el movimiento dentro de un rango definido
            if (newY >= 0 && newY <= 100) {
                lever.style.transform = `translateY(${newY}px)`; // Mover la palanca verticalmente
            }
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false; // Detener el arrastre cuando se suelta el botón del ratón
    });
});
