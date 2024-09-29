// Selección de elementos del DOM 
document.addEventListener("DOMContentLoaded", function () {

    // Desactivar los botones inicialmente
    let redButton = document.getElementById("button1");
    let blueButton = document.getElementById("button2");
    let greenButton = document.getElementById("button3");
    let yellowButton = document.getElementById("button4");
    let purpleButton = document.getElementById("button5");
    let orangeButton = document.getElementById("button6");
    let grayButton = document.getElementById("button7");
    let exitButton = document.getElementById("button8");  // Botón de salida

    // Obtener la imagen que quieres cambiar
    let cornerImage = document.querySelector(".corner-image");

    // Almacenar la ruta original de la imagen para poder restaurarla más tarde
    let originalImageSrc = cornerImage.src;

    // Función para desactivar botones
    function disableButtons() {
        blueButton.disabled = true;
        greenButton.disabled = true;
        yellowButton.disabled = true;
        purpleButton.disabled = true;
        orangeButton.disabled = true;
        grayButton.disabled = true;
        redButton.disabled = true;  // Botón rojo también desactivado al inicio
    }

    // Función para activar botones
    function enableButtons() {
        blueButton.disabled = false;
        greenButton.disabled = false;
        yellowButton.disabled = false;
        purpleButton.disabled = false;
        orangeButton.disabled = false;
        grayButton.disabled = false;
    }

    // Crear una sombra de fondo
    let overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";
    document.body.appendChild(overlay);

    // Crear un contenedor para los diálogos
    let dialogContainer = document.createElement("div");
    dialogContainer.style.background = "#fff";
    dialogContainer.style.padding = "20px";
    dialogContainer.style.borderRadius = "10px";
    dialogContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    dialogContainer.style.width = "400px";
    dialogContainer.style.textAlign = "center";
    overlay.appendChild(dialogContainer);

    // Diálogos e interacciones
    let currentStep = 0;
    let userName = '';  // Variable para almacenar el nombre del usuario

    const steps = [
        {
            message: "En este apartado vamos a trabajar con la Trayectoria del avión: Visualizaremos un avión en movimiento afectado por el viento cruzado.",
            buttonText: "Siguiente",
            callback: nextStep
        },
        {
            message: "Coloca tu nombre:",
            input: true, // Indica que es necesario un campo de entrada
            buttonText: "Siguiente",
            callback: nextStep
        },
        {
            message: "Presiona el botón Rojo para iniciar con la dinámica.",
            buttonText: "Siguiente",
            callback: closeDialog
        }
    ];

    function nextStep() {
        currentStep++;
        if (currentStep < steps.length) {
            showStep(currentStep);
        }
    }

    function showStep(stepIndex) {
        // Limpiar el contenido actual del contenedor
        dialogContainer.innerHTML = "";

        const step = steps[stepIndex];

        // Crear el mensaje de texto
        let message = document.createElement("p");
        message.textContent = step.message;
        dialogContainer.appendChild(message);

        // Si es necesario un input
        if (step.input) {
            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.placeholder = "Escribe tu nombre...";
            inputField.style.width = "100%";
            inputField.style.marginBottom = "10px";
            dialogContainer.appendChild(inputField);

            inputField.addEventListener("input", function () {
                userName = inputField.value;  // Almacenar el nombre del usuario
            });
        }

        // Crear el botón
        let button = document.createElement("button");
        button.textContent = step.buttonText;
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "#3498db";
        button.style.color = "#fff";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.onclick = step.callback;
        dialogContainer.appendChild(button);
    }

    function closeDialog() {
        // Al cerrar el diálogo, activar los botones de colores y el botón rojo
        enableButtons();
        redButton.disabled = false;

        // Remover el overlay
        document.body.removeChild(overlay);

        // Asignar evento al botón rojo para mostrar el mensaje de bienvenida
        redButton.addEventListener("click", showPilotMessage);
    }

    function showPilotMessage() {
        // Cambiar la imagen al presionar el botón rojo
        cornerImage.src = "./imagenes/DALL_E-2024-09-20-00.18-removebg-preview.png";  // Cambia a la imagen que desees

        // Crear el mensaje de bienvenida del piloto
        let pilotOverlay = document.createElement("div");
        pilotOverlay.style.position = "fixed";
        pilotOverlay.style.top = "0";
        pilotOverlay.style.left = "0";
        pilotOverlay.style.width = "100vw";
        pilotOverlay.style.height = "100vh";
        pilotOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        pilotOverlay.style.display = "flex";
        pilotOverlay.style.justifyContent = "center";
        pilotOverlay.style.alignItems = "center";
        pilotOverlay.style.zIndex = "1000";
        document.body.appendChild(pilotOverlay);

        let pilotDialog = document.createElement("div");
        pilotDialog.style.background = "#fff";
        pilotDialog.style.padding = "20px";
        pilotDialog.style.borderRadius = "10px";
        pilotDialog.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        pilotDialog.style.width = "400px";
        pilotDialog.style.textAlign = "center";
        pilotOverlay.appendChild(pilotDialog);

        // Mensaje del piloto
        let pilotMessage = document.createElement("p");
        pilotMessage.textContent = `Hola soy el Piloto André Rodriguez Pérez, mucho gusto en conocerte ${userName}. Hoy vamos a trabajar con la Trayectoria del avión.`;
        pilotDialog.appendChild(pilotMessage);

        // Mensaje adicional
        let additionalMessage = document.createElement("p");
        additionalMessage.textContent = "Te voy a explicar qué es, cómo funciona, y un ejemplo sencillo de cómo los pilotos trabajamos con la trayectoria del avión.";
        pilotDialog.appendChild(additionalMessage);

        // Botón de siguiente
        let nextButton = document.createElement("button");
        nextButton.textContent = "Siguiente";
        nextButton.style.padding = "10px 20px";
        nextButton.style.backgroundColor = "#3498db";
        nextButton.style.color = "#fff";
        nextButton.style.border = "none";
        nextButton.style.borderRadius = "5px";
        nextButton.style.cursor = "pointer";
        nextButton.onclick = function () {
            // Cerrar el mensaje del piloto
            document.body.removeChild(pilotOverlay);

            // Restaurar la imagen original
            cornerImage.src = originalImageSrc;

            // Cambiar el estilo del botón rojo
            redButton.disabled = true;  // Desactivar el botón rojo
            redButton.style.backgroundColor = "#555";  // Cambiar el color del botón rojo
            redButton.style.cursor = "not-allowed";  // Cambiar el cursor a no permitido
            redButton.style.transform = "none";  // Quitar animación si la tiene
        };
        pilotDialog.appendChild(nextButton);
    }

    // Evento para el botón "Salir"
    exitButton.addEventListener("click", function () {
    // Cambiar la imagen temporalmente
    cornerImage.src = "./imagenes/DALL_E-2024-09-20-00.29-removebg-preview.png";

    // Crear el cuadro de confirmación personalizado
    let exitOverlay = document.createElement("div");
    exitOverlay.style.position = "fixed";
    exitOverlay.style.top = "0";
    exitOverlay.style.left = "0";
    exitOverlay.style.width = "100vw";
    exitOverlay.style.height = "100vh";
    exitOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    exitOverlay.style.display = "flex";
    exitOverlay.style.justifyContent = "center";
    exitOverlay.style.alignItems = "center";
    exitOverlay.style.zIndex = "1000";
    document.body.appendChild(exitOverlay);

    let exitDialog = document.createElement("div");
    exitDialog.style.background = "#fff";
    exitDialog.style.padding = "20px";
    exitDialog.style.borderRadius = "10px";
    exitDialog.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    exitDialog.style.width = "400px";
    exitDialog.style.textAlign = "center";
    exitOverlay.appendChild(exitDialog);

    // Pregunta de confirmación
    let confirmMessage = document.createElement("p");
    confirmMessage.textContent = "¿Deseas salir del emulador?";
    exitDialog.appendChild(confirmMessage);

    // Botón de "Sí"
    let yesButton = document.createElement("button");
    yesButton.textContent = "Sí";
    yesButton.style.padding = "10px 20px";
    yesButton.style.backgroundColor = "#e74c3c";
    yesButton.style.color = "#fff";
    yesButton.style.border = "none";
    yesButton.style.borderRadius = "5px";
    yesButton.style.cursor = "pointer";
    yesButton.style.marginRight = "10px";
    yesButton.onclick = function () {
        window.location.href = "./index.html";  // Redirigir a la página principal
    };
    exitDialog.appendChild(yesButton);

    // Botón de "No"
    let noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.style.padding = "10px 20px";
    noButton.style.backgroundColor = "#3498db";
    noButton.style.color = "#fff";
    noButton.style.border = "none";
    noButton.style.borderRadius = "5px";
    noButton.style.cursor = "pointer";
    noButton.onclick = function () {
        // Cerrar el cuadro de confirmación y restaurar la imagen original
        document.body.removeChild(exitOverlay);
        cornerImage.src = originalImageSrc;
    };
    exitDialog.appendChild(noButton);
});

    // Mostrar el primer paso del diálogo inicial
    showStep(currentStep);

});
