document.addEventListener("DOMContentLoaded", function () {
    let redButton = document.getElementById("button1");
    let blueButton = document.getElementById("button2");
    let cornerImage = document.querySelector(".corner-image");
    // Almacenar la imagen original para restaurarla más tarde
    let originalImageSrc = cornerImage.src;

    // Verificación del botón rojo al intentar presionar el botón azul
    blueButton.addEventListener("click", function () {
        if (redButton.disabled === false) {
            // Si el botón rojo no ha sido desactivado, mostrar un cuadro de diálogo indicando que el simulador no se ha iniciado

            cornerImage.src = "./imagenes/DALL_E-2024-09-20-02.08-removebg-preview.png"; // Cambiar la imagen


            showDialog("No se ha iniciado el simulador", function () {
                // Aquí puedes agregar cualquier otra acción que necesites cuando el simulador no esté iniciado
                cornerImage.src = originalImageSrc;   
            });
        } else {
            // Si el botón rojo ha sido desactivado, permitir el flujo normal del botón azul
            iniciarFlujoBotonAzul();
        }
    });

    // Función para el flujo del botón azul cuando está habilitado
    function iniciarFlujoBotonAzul() {
        // Cambiar la imagen
        cornerImage.src = "./imagenes/DALL_E-2024-09-20-00.18-removebg-preview.png";

        // Mostrar el primer cuadro de diálogo
        showDialog("La trayectoria del avión se refiere a la ruta o el camino que sigue un avión en vuelo. Este trayecto está influenciado por múltiples factores, tales como la velocidad del avión, la dirección del viento, la gravedad, y las fuerzas aerodinámicas, que incluyen la sustentación, el arrastre, y el empuje. En particular, cuando se vuela en condiciones de viento cruzado (viento que viene desde un costado), la trayectoria del avión se desvía de la ruta prevista si no se realizan ajustes.", function () {
            showDialog("Principios clave de la trayectoria de un avión", function () {
                showDialog("Velocidad del avión: La velocidad del avión a través del aire se llama 'velocidad relativa al aire'. Esta velocidad, junto con la dirección del avión, determina la trayectoria que seguiría en condiciones sin viento.", function () {
                    showDialog("Viento cruzado: El viento cruzado es el componente del viento que sopla desde un lado del avión. Este viento introduce una fuerza lateral que puede desviar al avión de su curso previsto. Para contrarrestar este efecto, los pilotos ajustan el ángulo de la nariz del avión (esto se llama 'crab angle' o ángulo de deriva) para compensar el viento.", function () {
                        showDialog("Efecto del viento en la trayectoria: Cuando un avión vuela con viento cruzado, su trayectoria aparente (el camino que sigue sobre el terreno) será diferente de su trayectoria en el aire. La velocidad y dirección del viento afectarán la dirección en la que el avión se mueve con respecto al suelo. Por ejemplo, si el viento viene del lado izquierdo, el avión necesitará ajustar su dirección hacia la izquierda para mantener una trayectoria recta.", function () {
                            // Cambiar a la siguiente imagen
                            cornerImage.src = "./imagenes/DALL_E-2024-09-20-00.57-removebg-preview.png";
                            showDialog("Tenemos un ejemplo: Imagina un Boeing 777-300 que vuela a 200 km/h en una ruta directa al norte, pero hay un viento cruzado desde el oeste con una velocidad de 50 km/h. Si el piloto no ajusta la dirección, el avión sería empujado hacia el este, resultando en una trayectoria desviada. Sin embargo, ajustando la nariz del avión hacia el oeste, el piloto puede mantener una trayectoria recta hacia el norte.", function () {

                                // Mostrar imágenes y leyenda con el fondo oscuro
                                let darkOverlay = document.createElement("div");
                                darkOverlay.style.position = "fixed";
                                darkOverlay.style.top = "0";
                                darkOverlay.style.left = "0";
                                darkOverlay.style.width = "100vw";
                                darkOverlay.style.height = "100vh";
                                darkOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                                darkOverlay.style.display = "flex";
                                darkOverlay.style.justifyContent = "center";
                                darkOverlay.style.alignItems = "center";
                                darkOverlay.style.zIndex = "1000";

                                let imagesContainer = document.createElement("div");
                                imagesContainer.style.display = "flex";
                                imagesContainer.style.flexDirection = "row";
                                imagesContainer.style.justifyContent = "space-around";
                                imagesContainer.style.alignItems = "center";
                                imagesContainer.style.textAlign = "center";
                                imagesContainer.style.width = "80%";
                                imagesContainer.style.margin = "0 auto";
                                imagesContainer.style.color = "#fff";

                                // Primera imagen
                                let firstImageContainer = document.createElement("div");
                                let firstImage = document.createElement("img");
                                firstImage.src = "./imagenes/b34574d7-2c66-4e11-9275-a5daa4a934ca.png";
                                firstImage.style.width = "350px";
                                firstImageContainer.appendChild(firstImage);

                                // Leyenda de la primera imagen
                                let firstImageLegend = document.createElement("p");
                                firstImageLegend.textContent = "Mitad izquierda: Muestra un Boeing 777-300 volando directamente hacia su destino al norte, con una trayectoria recta sin verse afectado por el viento. La línea azul representa la ruta recta del avión sin desviación, Mitad derecha: Representa el mismo avión, pero siendo afectado por un viento cruzado desde el oeste a 50 km/h. La línea roja muestra cómo el avión es desviado hacia el este debido a la fuerza del viento cruzado, y hay flechas que indican la dirección del viento empujando al avión.";
                                firstImageLegend.style.maxWidth = "350px";
                                firstImageLegend.style.marginTop = "10px";
                                firstImageLegend.style.fontSize = "14px";
                                firstImageContainer.appendChild(firstImageLegend);

                                // Segunda imagen
                                let secondImageContainer = document.createElement("div");
                                let secondImage = document.createElement("img");
                                secondImage.src = "./imagenes/output.png";
                                secondImage.style.width = "500px";
                                secondImageContainer.appendChild(secondImage);

                                // Leyenda de la segunda imagen
                                let secondImageLegend = document.createElement("p");
                                secondImageLegend.textContent = "La línea azul representa la trayectoria del avión sin viento, que sigue siendo recta. La línea roja, muestra cómo el avión es gradualmente desviado hacia el este debido al viento cruzado.";
                                secondImageLegend.style.maxWidth = "500px";
                                secondImageLegend.style.marginTop = "10px";
                                secondImageLegend.style.fontSize = "14px";
                                secondImageContainer.appendChild(secondImageLegend);

                                // Agregar las imágenes al contenedor
                                imagesContainer.appendChild(firstImageContainer);
                                imagesContainer.appendChild(secondImageContainer);

                                // Botón "Siguiente"
                                let nextButton = document.createElement("button");
                                nextButton.textContent = "Siguiente";
                                nextButton.style.padding = "10px 20px";
                                nextButton.style.backgroundColor = "#3498db";
                                nextButton.style.color = "#fff";
                                nextButton.style.border = "none";
                                nextButton.style.borderRadius = "5px";
                                nextButton.style.cursor = "pointer";
                                nextButton.style.marginTop = "20px";
                                nextButton.onclick = function () {
                                    document.body.removeChild(darkOverlay);
                                    showFinalDialog();
                                };

                                darkOverlay.appendChild(imagesContainer);
                                darkOverlay.appendChild(nextButton);
                                document.body.appendChild(darkOverlay);    

                            });
                        });
                    });
                });
            });
        });
    }

    // Función para mostrar el cuadro de diálogo
    function showDialog(message, callback) {
        let dialogOverlay = document.createElement("div");
        dialogOverlay.style.position = "fixed";
        dialogOverlay.style.top = "0";
        dialogOverlay.style.left = "0";
        dialogOverlay.style.width = "100vw";
        dialogOverlay.style.height = "100vh";
        dialogOverlay.style.display = "flex";
        dialogOverlay.style.justifyContent = "center";
        dialogOverlay.style.alignItems = "center";
        dialogOverlay.style.zIndex = "1000";

        let dialogBox = document.createElement("div");
        dialogBox.style.background = "#fff";
        dialogBox.style.padding = "20px";
        dialogBox.style.borderRadius = "10px";
        dialogBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        dialogBox.style.width = "400px";
        dialogBox.style.textAlign = "center";

        let messageParagraph = document.createElement("p");
        messageParagraph.textContent = message;
        dialogBox.appendChild(messageParagraph);

        let nextButton = document.createElement("button");
        nextButton.textContent = "Siguiente";
        nextButton.style.padding = "10px 20px";
        nextButton.style.backgroundColor = "#3498db";
        nextButton.style.color = "#fff";
        nextButton.style.border = "none";
        nextButton.style.borderRadius = "5px";
        nextButton.style.cursor = "pointer";
        nextButton.onclick = function () {
            document.body.removeChild(dialogOverlay);
            if (callback) callback();
        };

        dialogBox.appendChild(nextButton);
        dialogOverlay.appendChild(dialogBox);
        document.body.appendChild(dialogOverlay);
    }

    // Función para mostrar un cuadro de diálogo con un botón de "Siguiente"
    function showDialogWithNextButton(message, callback) {
        let dialogOverlay = document.createElement("div");
        dialogOverlay.style.position = "fixed";
        dialogOverlay.style.top = "0";
        dialogOverlay.style.left = "0";
        dialogOverlay.style.width = "100vw";
        dialogOverlay.style.height = "100vh";
        dialogOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        dialogOverlay.style.display = "flex";
        dialogOverlay.style.justifyContent = "center";
        dialogOverlay.style.alignItems = "center";
        dialogOverlay.style.zIndex = "1000";

        let dialogBox = document.createElement("div");
        dialogBox.style.background = "#fff";
        dialogBox.style.padding = "20px";
        dialogBox.style.borderRadius = "10px";
        dialogBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        dialogBox.style.width = "400px";
        dialogBox.style.textAlign = "center";

        let messageParagraph = document.createElement("p");
        messageParagraph.textContent = message;
        dialogBox.appendChild(messageParagraph);

        let nextButton = document.createElement("button");
        nextButton.textContent = "Siguiente";
        nextButton.style.padding = "10px 20px";
        nextButton.style.backgroundColor = "#3498db";
        nextButton.style.color = "#fff";
        nextButton.style.border = "none";
        nextButton.style.borderRadius = "5px";
        nextButton.style.cursor = "pointer";
        nextButton.onclick = function () {
            document.body.removeChild(dialogOverlay);
            if (callback) callback();
        };

        dialogBox.appendChild(nextButton);
        dialogOverlay.appendChild(dialogBox);
        document.body.appendChild(dialogOverlay);
    }

    function showFinalDialog() {
        // Crear la sombra para el cuadro de diálogo
        let dialogOverlay = document.createElement("div");
        dialogOverlay.style.position = "fixed";
        dialogOverlay.style.top = "0";
        dialogOverlay.style.left = "0";
        dialogOverlay.style.width = "100vw";
        dialogOverlay.style.height = "100vh";
        dialogOverlay.style.display = "flex";
        dialogOverlay.style.justifyContent = "center";
        dialogOverlay.style.alignItems = "center";
        dialogOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        dialogOverlay.style.zIndex = "1000";
    
        let dialogBox = document.createElement("div");
        dialogBox.style.background = "#fff";
        dialogBox.style.padding = "20px";
        dialogBox.style.borderRadius = "10px";
        dialogBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        dialogBox.style.width = "400px";
        dialogBox.style.textAlign = "center";
    
        let messageParagraph = document.createElement("p");
        messageParagraph.textContent = "¿Te gustaría hacer un gráfico para conocer cómo afecta el viento a la trayectoria?";
        dialogBox.appendChild(messageParagraph);
    
        // Crear el contenedor de los botones para alinear los botones "Sí" y "No"
        let buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.justifyContent = "space-around";
        buttonContainer.style.marginTop = "20px";
    
        let yesButton = document.createElement("button");
        yesButton.textContent = "Sí";
        yesButton.style.padding = "10px 20px";
        yesButton.style.backgroundColor = "#3498db";
        yesButton.style.color = "#fff";
        yesButton.style.border = "none";
        yesButton.style.borderRadius = "5px";
        yesButton.style.cursor = "pointer";
        yesButton.onclick = function () {
            document.body.removeChild(dialogOverlay);
            showFormDialog('kmh'); // Mostrar formulario en km/h inicialmente
        };
    
        let noButton = document.createElement("button");
        noButton.textContent = "No";
        noButton.style.padding = "10px 20px";
        noButton.style.backgroundColor = "#e74c3c";
        noButton.style.color = "#fff";
        noButton.style.border = "none";
        noButton.style.borderRadius = "5px";
        noButton.style.cursor = "pointer";
        noButton.onclick = function () {
        // Restaurar la imagen original
        cornerImage.src = "./imagenes/DALL_E-2024-09-19-22.40-removebg-preview.png";
            document.body.removeChild(dialogOverlay);
        };
    
        // Agregar los botones al contenedor de botones
        buttonContainer.appendChild(yesButton);
        buttonContainer.appendChild(noButton);
    
        // Agregar el contenedor de botones al cuadro de diálogo
        dialogBox.appendChild(buttonContainer);
    
        // Agregar el cuadro de diálogo al overlay
        dialogOverlay.appendChild(dialogBox);
        document.body.appendChild(dialogOverlay);
    }

    // Función para mostrar el formulario para ingresar los datos
// Botón "Sí" y función para mostrar el formulario
let yesButton = document.createElement("button");
yesButton.textContent = "Sí";
yesButton.style.padding = "10px 20px";
yesButton.style.backgroundColor = "#3498db";
yesButton.style.color = "#fff";
yesButton.style.border = "none";
yesButton.style.borderRadius = "5px";
yesButton.style.cursor = "pointer";
yesButton.onclick = function () {
    document.body.removeChild(dialogOverlay);
    showFormDialog('kmh'); // Mostrar formulario en km/h inicialmente
};




// Función para mostrar el formulario para ingresar los datos
function showFormDialog(unit) {
    // Cambiar Imagen
    cornerImage.src = "./imagenes/DALL_E-2024-09-20-03.10-removebg-preview.png";

    // Crear la sombra para el formulario
    let formOverlay = document.createElement("div");
    formOverlay.style.position = "fixed";
    formOverlay.style.top = "0";
    formOverlay.style.left = "0";
    formOverlay.style.width = "100vw";
    formOverlay.style.height = "100vh";
    formOverlay.style.display = "flex";
    formOverlay.style.justifyContent = "center";
    formOverlay.style.alignItems = "center";
    formOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    formOverlay.style.zIndex = "1000";

    let formBox = document.createElement("div");
    formBox.style.background = "#fff";
    formBox.style.padding = "20px";
    formBox.style.borderRadius = "10px";
    formBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    formBox.style.width = "400px";
    formBox.style.textAlign = "center";

    let formTitle = document.createElement("p");
    formTitle.textContent = unit === 'kmh' ? "Formulario (km/h)" : "Formulario (nudos)";
    formBox.appendChild(formTitle);

    // Crear los campos de entrada
    let vAvionLabel = document.createElement("label");
    vAvionLabel.textContent = unit === 'kmh' ? "Velocidad del avión (Vavion) en km/h:" : "Velocidad del avión (Vavion) en nudos:";
    formBox.appendChild(vAvionLabel);

    let vAvionInput = document.createElement("input");
    vAvionInput.type = "number";
    vAvionInput.style.display = "block";
    vAvionInput.style.margin = "10px auto";
    formBox.appendChild(vAvionInput);

    let vVientoLabel = document.createElement("label");
    vVientoLabel.textContent = unit === 'kmh' ? "Velocidad del Viento Cruzado (Vviento) en km/h:" : "Velocidad del Viento Cruzado (Vviento) en nudos:";
    formBox.appendChild(vVientoLabel);

    let vVientoInput = document.createElement("input");
    vVientoInput.type = "number";
    vVientoInput.style.display = "block";
    vVientoInput.style.margin = "10px auto";
    formBox.appendChild(vVientoInput);


    // Agregar campo opcional para el ángulo de inclinación
    let anguloLabel = document.createElement("label");
    anguloLabel.textContent = "Ángulo de Inclinación del Avión (α) en grados (opcional):";
    formBox.appendChild(anguloLabel);

    let anguloInput = document.createElement("input");
    anguloInput.type = "number";
    anguloInput.style.display = "block";
    anguloInput.style.margin = "10px auto";
    formBox.appendChild(anguloInput);

    // Mensaje adicional si se trabaja en nudos
    if (unit === 'knots') {
        let note = document.createElement("p");
        note.textContent = "Recuerda: 1 nudo equivale a 1.852 km/h.";
        note.style.fontSize = "12px";
        note.style.color = "#555";
        formBox.appendChild(note);
    }

    // Mensaje adicional si se trabaja en km/h
    if (unit === 'kmh') {
        let note = document.createElement("p");
        note.textContent = "Recuerda: 1 km/h equivale a 0.54 nudos.";
        note.style.fontSize = "12px";
        note.style.color = "#555";
        formBox.appendChild(note);
    }

    // Botón para cambiar entre km/h y nudos
    let toggleButton = document.createElement("button");
    toggleButton.textContent = unit === 'kmh' ? "Deseo Trabajar con nudos" : "Deseo Trabajar con km/h";
    toggleButton.style.padding = "10px 20px";
    toggleButton.style.marginRight = "10px";
    toggleButton.style.backgroundColor = "#e67e22";
    toggleButton.style.color = "#fff";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
    toggleButton.onclick = function () {
        document.body.removeChild(formOverlay); // Eliminar el formulario actual
        showFormDialog(unit === 'kmh' ? 'knots' : 'kmh'); // Mostrar el formulario en la unidad opuesta
    };
    formBox.appendChild(toggleButton);

    // Botón de continuar para km/h
    if (unit === 'kmh') {
        let continueButtonKmH = document.createElement("button");
        continueButtonKmH.textContent = "Generar gráfica (km/h)";
        continueButtonKmH.style.padding = "10px 20px";
        continueButtonKmH.style.backgroundColor = "#3498db";
        continueButtonKmH.style.color = "#fff";
        continueButtonKmH.style.border = "none";
        continueButtonKmH.style.borderRadius = "5px";
        continueButtonKmH.style.cursor = "pointer";
        continueButtonKmH.onclick = function () {
            // Obtener los valores ingresados por el usuario
            let vAvion = parseFloat(vAvionInput.value);
            let vViento = parseFloat(vVientoInput.value);
            
            let angulo = parseFloat(anguloInput.value);

            // Verificar si los valores son válidos
            if (isNaN(vAvion) || isNaN(vViento) ) {
                alert("Por favor, ingrese valores válidos.");
                return;
            }

            // Calcular el ángulo automáticamente si no se ingresó
            if (isNaN(angulo)) {
                angulo = Math.atan(vViento / vAvion) * (180 / Math.PI);
            }

            // Generar la gráfica en km/h y descargar
            generarGraficaYDescargar(vAvion, vViento, angulo);
            
            // Restablecer la imagen original
            cornerImage.src = "./imagenes/DALL_E-2024-09-19-22.40-removebg-preview.png";
            document.body.removeChild(formOverlay); // Eliminar el formulario después de continuar
        };
        formBox.appendChild(continueButtonKmH);
    }

    // Botón de continuar para nudos
    if (unit === 'knots') {
        let continueButtonNudos = document.createElement("button");
        continueButtonNudos.textContent = "Generar gráfica (nudos)";
        continueButtonNudos.style.padding = "10px 20px";
        continueButtonNudos.style.backgroundColor = "#3498db";
        continueButtonNudos.style.color = "#fff";
        continueButtonNudos.style.border = "none";
        continueButtonNudos.style.borderRadius = "5px";
        continueButtonNudos.style.cursor = "pointer";
        continueButtonNudos.onclick = function () {
            // Obtener los valores ingresados por el usuario
            let vAvion = parseFloat(vAvionInput.value) * 1.852; // Convertir de nudos a km/h
            let vViento = parseFloat(vVientoInput.value) * 1.852; // Convertir de nudos a km/h
            let angulo = parseFloat(anguloInput.value);

            // Verificar si los valores son válidos
            if (isNaN(vAvion) || isNaN(vViento) ) {
                alert("Por favor, ingrese valores válidos.");
                return;
            }

            // Calcular el ángulo automáticamente si no se ingresó
            if (isNaN(angulo)) {
                angulo = Math.atan(vViento / vAvion) * (180 / Math.PI);
            }

            // Generar la gráfica en nudos y descargar
            generarGraficaYDescargar(vAvion, vViento, angulo);

            // Restablecer la imagen original
            cornerImage.src = "./imagenes/DALL_E-2024-09-19-22.40-removebg-preview.png";
            document.body.removeChild(formOverlay); // Eliminar el formulario después de continuar
        };
        formBox.appendChild(continueButtonNudos);
    }

    // Agregar el formulario a la pantalla
    formOverlay.appendChild(formBox);
    document.body.appendChild(formOverlay);
}


// Función para dibujar una cuadrícula de fondo
function dibujarCuadricula(ctx, width, height, step) {
    ctx.strokeStyle = "#e0e0e0"; // Líneas de cuadrícula de color gris claro
    ctx.lineWidth = 1;

    for (let x = 0; x <= width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    for (let y = 0; y <= height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

// Función para generar la gráfica y descargarla
function generarGraficaYDescargar(vAvion, vViento, angulo) {
    // Crear canvas para la gráfica
    let canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 400;
    let ctx = canvas.getContext("2d");

    // Establecer fondo blanco
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar la cuadrícula de fondo
    dibujarCuadricula(ctx, canvas.width, canvas.height, 20);

    // Ajustes generales de estilo
    ctx.font = "16px Arial";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // Definir colores
    const colorAvion = "#1f77b4"; // Azul para el avión
    const colorViento = "#2ca02c"; // Verde para el viento
    const colorResultante = "#d62728"; // Rojo para el vector resultante

    // Posición de origen
    const origenX = 50;
    const origenY = 350;

    // Calcular la escala para ajustar los vectores al canvas
    let vPE = Math.sqrt(Math.pow(vAvion, 2) + Math.pow(vViento, 2)); // Velocidad resultante
    let maxValor = Math.max(vAvion, vViento, vPE);

    // Definir el tamaño máximo permitido para los vectores en píxeles
    const maxLongitudVector = 250; // Puedes ajustar este valor según el tamaño del canvas

    // Calcular la escala
    const escala = maxLongitudVector / maxValor;

    // Dibujar los ejes coordenados
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(origenX, origenY);
    ctx.lineTo(origenX + 500, origenY); // Eje X (Este-Oeste)
    ctx.moveTo(origenX, origenY);
    ctx.lineTo(origenX, origenY - 300);   // Eje Y (Norte-Sur)
    ctx.stroke();

    // Etiquetas de los ejes
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText("Este", origenX + 500 - 20, origenY + 20);
    ctx.fillText("Norte", origenX - 40, origenY - 300 + 20);

    // Dibujar el vector de la velocidad del avión (hacia el norte)
    dibujarFlecha(ctx, origenX, origenY, origenX, origenY - vAvion * escala, colorAvion);
    dibujarAvion(ctx, origenX - 15, origenY - vAvion * escala - 30); // Ajustar posición del avión
    ctx.fillStyle = "black";
    ctx.fillText(`V avión = ${vAvion} km/h`, origenX + 10, origenY - vAvion * escala - 40);

    // Dibujar el vector de la velocidad del viento (hacia el este)
    dibujarFlecha(ctx, origenX, origenY, origenX + vViento * escala, origenY, colorViento);
    ctx.fillText(`V viento = ${vViento} km/h`, origenX + vViento * escala + 10, origenY + 15);

    // Dibujar el vector resultante (velocidad respecto a la Tierra)
    let endX = origenX + vViento * escala;
    let endY = origenY - vAvion * escala;
    dibujarFlecha(ctx, origenX, origenY, endX, endY, colorResultante);

    // Ajustar la posición del texto de la VPE para que no tape la flecha
    ctx.fillText(`V PE = ${vPE.toFixed(2)} km/h`, endX + 10, endY - 10);

    // Mostrar el ángulo (usar un arco para mejor visualización)
    ctx.beginPath();
    let anguloRad = Math.atan2(vAvion, vViento);
    ctx.arc(origenX, origenY, 50, -anguloRad, 0, false);
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText(`Ángulo (α) = ${angulo.toFixed(2)}°`, origenX + 60, origenY - 10);

    // Dibujar la brújula en la esquina superior derecha
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    const brujulaX = 500;
    const brujulaY = 80;
    ctx.beginPath();
    ctx.moveTo(brujulaX, brujulaY); // Centro de la brújula
    ctx.lineTo(brujulaX, brujulaY - 30); // Norte
    ctx.moveTo(brujulaX, brujulaY);
    ctx.lineTo(brujulaX + 30, brujulaY); // Este
    ctx.moveTo(brujulaX, brujulaY);
    ctx.lineTo(brujulaX, brujulaY + 30); // Sur
    ctx.moveTo(brujulaX, brujulaY);
    ctx.lineTo(brujulaX - 30, brujulaY); // Oeste
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Letras de la brújula
    ctx.fillText("N", brujulaX - 5, brujulaY - 35);
    ctx.fillText("S", brujulaX - 5, brujulaY + 45);
    ctx.fillText("E", brujulaX + 35, brujulaY + 5);
    ctx.fillText("O", brujulaX - 45, brujulaY + 5);

    // Crear un enlace temporal para descargar la imagen
    let link = document.createElement("a");
    link.download = "grafica.png";
    link.href = canvas.toDataURL();
    link.click();
}

// Función para dibujar un avión más pequeño y ajustado
function dibujarAvion(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(0.4, 0.4); // Reducir tamaño del avión

    // Dibujar cuerpo del avión
    ctx.fillStyle = "gray";
    ctx.fillRect(-10, -30, 20, 60); // Rectángulo central

    // Dibujar las alas
    ctx.fillStyle = "black";
    ctx.fillRect(-30, -10, 60, 20); // Ala horizontal
    ctx.fillRect(-6, -50, 12, 30);  // Ala vertical superior

    // Dibujar la cola del avión
    ctx.fillRect(-16, 24, 32, 10);  // Cola

    ctx.restore();
}

// Función para dibujar una flecha con punta rellena
function dibujarFlecha(ctx, fromX, fromY, toX, toY, color) {
    let headlen = 10; // Longitud de la punta en píxeles
    let angle = Math.atan2(toY - fromY, toX - fromX);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    // Dibujar la punta de la flecha
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(
        toX - headlen * Math.cos(angle - Math.PI / 6),
        toY - headlen * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
        toX - headlen * Math.cos(angle + Math.PI / 6),
        toY - headlen * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

// Ejemplo de llamada a la función
// generarGraficaYDescargar(200, 150, 36.87);





});
