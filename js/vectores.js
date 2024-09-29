document.addEventListener("DOMContentLoaded", function () {
    let redButton = document.getElementById("button1");
    let greenButton = document.getElementById("button3");
    let cornerImage = document.querySelector(".corner-image");
    let originalImageSrc = cornerImage.src;

    // Verificación del botón rojo al intentar presionar el botón verde
    greenButton.addEventListener("click", function () {
        if (redButton.disabled === false) {
            // Si el botón rojo no ha sido desactivado, mostrar un cuadro de diálogo indicando que el simulador no se ha iniciado
            cornerImage.src = "./imagenes/DALL_E-2024-09-20-02.08-removebg-preview.png"; // Cambiar la imagen

            showDialog("No se ha iniciado el simulador", function () {
                cornerImage.src = originalImageSrc;
            });
        } else {
            // Si el botón rojo ha sido desactivado, permitir el flujo normal del botón verde
            iniciarFlujoBotonVerde();
        }
    });

    // Función para iniciar el flujo del botón verde
    function iniciarFlujoBotonVerde() {
        // Cambiar la imagen al inicio del cuadro de diálogo
        cornerImage.src = "./imagenes/DALL_E-2024-09-20-00.18-removebg-preview.png";

        showDialog("Un avión en movimiento tiene un vector de velocidad que describe su dirección y rapidez en relación con el aire que lo rodea.", function () {
            showDialog("El viento cruzado se refiere a un viento que sopla perpendicularmente a la dirección del vuelo o de la pista, lo que puede afectar la trayectoria del avión.", function () {
                showDialog("Para esto contamos con tres velocidades importantes:", function () {
                    showDialog("Velocidad del avión respecto al aire (Vp/A): La velocidad a la que el avión se mueve a través del aire.", function () {
                        showDialog("Velocidad del viento respecto al suelo (Va/E): La velocidad del viento medida en relación al suelo.", function () {
                            showDialog("Velocidad del avión respecto al suelo (Vp/E): La velocidad resultante del avión en el suelo, que es la suma vectorial de las dos anteriores.", function () {
                                showDialog("En este caso tenemos el caso de un simulador de vectores", function () {
                    ///             mostrarSimuladorVectores();
                                   // Reemplazamos mostrarSimuladorVectores por una redirección a un enlace
                                    window.location.href = "https://www.geogebra.org/geometry/qjhubzpz"; // Coloca aquí el enlace que desees abrir

                                    cornerImage.src = originalImageSrc; // Restablecer la imagen original
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    // Función para mostrar el simulador de vectores con viento cruzado
    function mostrarSimuladorVectores() {
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

        // Crear el contenedor del simulador
        let simuladorContainer = document.createElement("div");
        simuladorContainer.style.display = "flex";
        simuladorContainer.style.justifyContent = "space-between";
        simuladorContainer.style.width = "80%";
        simuladorContainer.style.margin = "20px auto";
        simuladorContainer.style.padding = "20px";
        simuladorContainer.style.border = "2px solid #ccc";
        simuladorContainer.style.borderRadius = "10px";
        simuladorContainer.style.backgroundColor = "#fff"; // Fondo blanco para la tabla

        // Crear la tabla de vectores a la izquierda
        let tabla = document.createElement("div");
        tabla.innerHTML = `
            <h3 style="text-align: center; color: #007bff; font-weight: bold;">Simulador de Vectores con Viento Cruzado</h3>
            <p>Este simulador te permitirá comprender de manera interactiva cómo el viento cruzado afecta la trayectoria de un avión.</p>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="border-bottom: 2px solid #ddd; padding: 10px; background-color: #f2f2f2;">Vector (Magnitud; Dirección)</th>
                        <th style="border-bottom: 2px solid #ddd; padding: 10px; background-color: #f2f2f2;">Valores</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;" title="Introduce la velocidad del avión en km/h o nudos y el ángulo en grados respecto al norte.">Vp/a (Velocidad del avión respecto al aire)</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><input type="text" id="vpaInput" placeholder="Ej: 39.8 ; 6.5°" style="width: 100%;"></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;" title="Introduce la velocidad del viento en km/h o nudos y el ángulo respecto al norte (por ejemplo, 90° si sopla desde el este).">Va/e (Velocidad del viento)</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><input type="text" id="vaeInput" placeholder="Ej: 15 ; 90°" style="width: 100%;"></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;" title="Este es el resultado de sumar los vectores Vp/a y Va/e.">Vp/e (Velocidad del avión respecto al suelo)</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><input type="text" value="Resultado: Vp/a + Va/e" readonly style="width: 100%; background-color: #f2f2f2;"></td>
                    </tr>
                </tbody>
            </table>
            <br>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="border-bottom: 2px solid #ddd; padding: 10px; background-color: #f2f2f2;">Vector (Componente x; Componente y)</th>
                        <th style="border-bottom: 2px solid #ddd; padding: 10px; background-color: #f2f2f2;">Valores</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;" title="Introduce la velocidad del avión en términos de sus componentes.">Vp/a (Componente x, Componente y)</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><input type="text" id="vpaCompInput" placeholder="Ej: 39.5, 4.5" style="width: 100%;"></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;" title="Introduce la velocidad del viento en términos de sus componentes.">Va/e (Componente x, Componente y)</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><input type="text" id="vaeCompInput" placeholder="Ej: 0, 15" style="width: 100%;"></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;" title="Este es el resultado de sumar las componentes de Vp/a y Va/e.">Vp/e (Componente x, Componente y)</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><input type="text" id="vpeCompInput" placeholder="Componente x, Componente y" style="width: 100%;"></td>
                    </tr>
                </tbody>
            </table>
        `;

        tabla.style.width = "50%";

        // Crear el plano cartesiano a la derecha
        let plano = document.createElement("div");
        plano.style.width = "45%";
        plano.style.height = "500px";
        plano.style.border = "2px solid #000";
        plano.style.backgroundColor = "#fff";
        plano.id = "plano-cartesiano";  // Asignamos un id para usarlo luego con JSXGraph
        simuladorContainer.appendChild(plano);

                // Agregar JSXGraph al div del plano cartesiano
                let script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/npm/jsxgraph@1.2.0/distrib/jsxgraphcore.js";
                script.onload = function () {
                    let board = JXG.JSXGraph.initBoard('plano-cartesiano', {
                        boundingbox: [-10, 10, 10, -10],
                        axis: true,
                        grid: true,
                        pan: { enabled: true },
                        zoom: { enabled: true, factorX: 1.25, factorY: 1.25 }
                    });
                  //  board.create('point', [0, 0], { name: 'O', size: 4 });
                };
                document.head.appendChild(script);

        //Crear funcionamiento de los vectores


        // Agregar los botones "Insertar Datos" y "Salir"
        let botonesContainer = document.createElement("div");
        botonesContainer.style.display = "flex";
        botonesContainer.style.justifyContent = "space-between";
        botonesContainer.style.marginTop = "20px";

        let insertarButton = document.createElement("button");
        insertarButton.textContent = "Insertar Datos";
        insertarButton.style.padding = "10px 20px";
        insertarButton.style.backgroundColor = "#3498db";
        insertarButton.style.color = "#fff";
        insertarButton.style.border = "none";
        insertarButton.style.borderRadius = "5px";
        insertarButton.style.cursor = "pointer";
        botonesContainer.appendChild(insertarButton);

        let salirButton = document.createElement("button");
        salirButton.textContent = "Salir";
        salirButton.style.padding = "10px 20px";
        salirButton.style.backgroundColor = "#e74c3c";
        salirButton.style.color = "#fff";
        salirButton.style.border = "none";
        salirButton.style.borderRadius = "5px";
        salirButton.style.cursor = "pointer";
        salirButton.onclick = function () {
            document.body.removeChild(overlay);  // Eliminar la sombra y el formulario
        };
        botonesContainer.appendChild(salirButton);

        // Agregar los botones y tabla al contenedor
        tabla.appendChild(botonesContainer);
        simuladorContainer.appendChild(tabla);
        simuladorContainer.appendChild(plano);

        // Agregar el simulador al overlay
        overlay.appendChild(simuladorContainer);
    }

    // Función para mostrar diálogos sin sombra
    function showDialog(message, callback) {
        let dialogOverlay = document.createElement("div");
        dialogOverlay.classList.add("dialog-overlay");
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

});
