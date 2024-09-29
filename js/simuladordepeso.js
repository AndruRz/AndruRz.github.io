document.addEventListener("DOMContentLoaded", function () {
    // Reference to buttons
    let redButton = document.getElementById("button1");
    let yellowButton = document.getElementById("button4");
    let cornerImage = document.querySelector(".corner-image");
    let originalImageSrc = cornerImage.src;

    // Event listener for the yellow button
    yellowButton.addEventListener("click", function () {
        if (redButton.disabled === false) {
            // Show a dialog indicating that the simulator hasn't started
            cornerImage.src = "./imagenes/DALL_E-2024-09-20-02.08-removebg-preview.png"; // Change the image
            showDialog("No se ha iniciado el simulador", function () {
                cornerImage.src = originalImageSrc;
            });
        } else {
            // Start the normal flow
            iniciarFlujoBotonAmarillo();
        }
    });

    // Function to start the flow when the yellow button is clicked
    function iniciarFlujoBotonAmarillo() {
        // Change the image at the start of the dialog
        cornerImage.src = "./imagenes/DALL_E-2024-09-20-00.18-removebg-preview.png";

        showDialog("En este simulador podrás descubrir cómo la carga adicional y el viento cruzado afectan el rendimiento y la trayectoria de un avión.", function () {
            showDialog("Cada avión tiene una capacidad máxima de carga. Agregar pasajeros, equipamiento o armas afecta el peso total.", function () {
                showDialog("El viento cruzado es un factor importante a la hora de mantener la trayectoria correcta.", function () {
                    showDialog("Ahora puedes empezar a configurar las condiciones del avión y el vuelo. Añade carga adicional y ajusta las condiciones atmosféricas.", function () {
                        showDialog("¿Preparado? Elige la aeronave que vas a utilizar para este simulador.", function () {
                            mostrarTarjetasAeronaves();
                            cornerImage.src = originalImageSrc; // Restore the original image
                        });
                    });
                });
            });
        });
    }

    // Function to show the aircraft selection cards
    function mostrarTarjetasAeronaves() {
        // Create an overlay
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

        // Close button "X"
        let closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "20px";
        closeButton.style.padding = "5px 10px";
        closeButton.style.fontSize = "18px";
        closeButton.style.border = "none";
        closeButton.style.backgroundColor = "#e74c3c";
        closeButton.style.color = "#fff";
        closeButton.style.borderRadius = "5px";
        closeButton.style.cursor = "pointer";
        closeButton.onclick = function () {
            document.body.removeChild(overlay);  // Remove the overlay when "X" is clicked
        };
        overlay.appendChild(closeButton);

        // Container for the cards
        let cardsContainer = document.createElement("div");
        cardsContainer.style.display = "flex";
        cardsContainer.style.justifyContent = "space-around";
        cardsContainer.style.width = "80%";

        // Aircraft information
        let tarjetasInfo = [
            {
                titulo: "Aviones de entrenamiento",
                imagen: "./imagenes/cessna.png",
                nombre: "C-172S",
                descripcion: "El Cessna 172S es una versión del popular avión monomotor Cessna 172, uno de los aviones de entrenamiento más utilizados en el mundo.",
                informacionTecnica: `
                    <h4>Características Técnicas</h4>
                    <p><strong>Peso vacío:</strong> 1,680 lbs (762 kg).</p>
                    <p><strong>Peso máximo de despegue (MTOW):</strong> 2,550 lbs (1,157 kg).</p>
                    <p><strong>Máximos tripulantes:</strong> 1 piloto + 3 pasajeros.</p>
                    <p><strong>Armas:</strong> No lleva armas.</p>
                    <p><strong>Capacidad de carga útil:</strong> 870 lbs (395 kg).</p>
                    <p><strong>Velocidad de crucero:</strong> 124 nudos (230 km/h).</p>
                    <p><strong>Velocidad máxima:</strong> 126 nudos (233 km/h).</p>
                `,
                videoSrc: "./videos/Video Cessna 172S.mp4"
            },
            {
                titulo: "Helicópteros",
                imagen: "./imagenes/uh60.png",
                nombre: "UH-60L (Ángel)",
                descripcion: "El UH-60L (Ángel) es una variante del helicóptero militar UH-60 Black Hawk, diseñado para mejorar la capacidad de carga y el rendimiento en misiones militares y de rescate.",
                informacionTecnica: `
                    <h4>Características Técnicas</h4>
                    <p><strong>Peso vacío:</strong> 10,624 lbs (4,820 kg).</p>
                    <p><strong>Peso máximo de despegue (MTOW):</strong> 22,000 lbs (9,979 kg).</p>
                    <p><strong>Máximos tripulantes:</strong> 2 pilotos + 2 tripulantes + 11 soldados.</p>
                    <p><strong>Armas:</strong> Puede llevar ametralladoras M240 de 7.62 mm.</p>
                    <p><strong>Capacidad de carga externa:</strong> 9,000 lbs (4,080 kg).</p>
                    <p><strong>Velocidad de crucero:</strong> 140 nudos (260 km/h).</p>
                    <p><strong>Velocidad máxima:</strong> 150 nudos (277 km/h).</p>
                `,
                videoSrc: "./videos/Video UH-60L.mp4"
            },
            {
                titulo: "Aviones de ataque ligero",
                imagen: "./imagenes/supertucano.png",
                nombre: "A-29B Super Tucano",
                descripcion: "El A-29B Super Tucano es un avión turbohélice de ataque ligero y entrenamiento avanzado diseñado para operar en entornos difíciles.",
                informacionTecnica: `
                    <h4>Características Técnicas</h4>
                    <p><strong>Peso vacío:</strong> 7,200 lbs (3,266 kg).</p>
                    <p><strong>Peso máximo de despegue (MTOW):</strong> 11,905 lbs (5,400 kg).</p>
                    <p><strong>Máximos tripulantes:</strong> 1 piloto + 1 copiloto/instructor.</p>
                    <p><strong>Armas:</strong> Puede llevar hasta 1,500 kg (3,300 lbs) de armamento.</p>
                    <p><strong>Capacidad de carga útil:</strong> 1,500 kg (3,300 lbs).</p>
                    <p><strong>Velocidad de crucero:</strong> 260 nudos (482 km/h).</p>
                    <p><strong>Velocidad máxima:</strong> 320 nudos (593 km/h).</p>
                `,
                videoSrc: "./videos/Video a29b Super Tucano.mp4"
            }
        ];

        // Create the cards
        tarjetasInfo.forEach((info) => {
            let card = document.createElement("div");
            card.style.width = "30%";
            card.style.height = "500px";
            card.style.backgroundColor = "#fff";
            card.style.padding = "10px";
            card.style.borderRadius = "10px";
            card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
            card.style.textAlign = "center";
            card.style.display = "flex";
            card.style.flexDirection = "column";
            card.style.justifyContent = "space-between";

            let titulo = document.createElement("h3");
            titulo.textContent = info.titulo;
            card.appendChild(titulo);

            let imagen = document.createElement("img");
            imagen.src = info.imagen;
            imagen.style.width = "100%";
            imagen.style.flexGrow = "1";
            card.appendChild(imagen);

            let nombre = document.createElement("h4");
            nombre.textContent = info.nombre;
            card.appendChild(nombre);

            let descripcion = document.createElement("p");
            descripcion.textContent = info.descripcion;
            descripcion.style.overflowY = "auto";
            card.appendChild(descripcion);

            // Navigation arrows
            let navContainer = document.createElement("div");
            navContainer.style.display = "flex";
            navContainer.style.justifyContent = "space-between";
            navContainer.style.marginTop = "10px";

            let leftArrow = document.createElement("button");
            leftArrow.textContent = "←";
            leftArrow.style.padding = "5px 10px";
            leftArrow.style.border = "none";
            leftArrow.style.backgroundColor = "#ccc";
            leftArrow.style.cursor = "pointer";
            leftArrow.disabled = true;
            navContainer.appendChild(leftArrow);

            let rightArrow = document.createElement("button");
            rightArrow.textContent = "→";
            rightArrow.style.padding = "5px 10px";
            rightArrow.style.border = "none";
            rightArrow.style.backgroundColor = "#3498db";
            rightArrow.style.color = "#fff";
            rightArrow.style.cursor = "pointer";
            navContainer.appendChild(rightArrow);

            card.appendChild(navContainer);

            // Arrow functionality
            let currentSection = 1;
            rightArrow.addEventListener("click", function () {
                if (currentSection === 1) {
                    // Show technical information
                    descripcion.innerHTML = info.informacionTecnica;
                    currentSection++;
                    leftArrow.disabled = false;
                } else if (currentSection === 2) {
                    // Hide image, title, and name when showing video
                    imagen.style.display = "none";
                    titulo.style.display = "none";
                    nombre.style.display = "none";

                    // Show video
                    descripcion.innerHTML = `<video width="100%" height="340px" controls>
                        <source src="${info.videoSrc}" type="video/mp4">
                        Tu navegador no soporta la etiqueta de video.
                    </video>`;
                    currentSection++;
                    rightArrow.disabled = true;
                }
            });

            leftArrow.addEventListener("click", function () {
                if (currentSection === 2) {
                    // Return to the first description
                    descripcion.textContent = info.descripcion;
                    currentSection--;
                    leftArrow.disabled = true;
                    rightArrow.disabled = false;
                } else if (currentSection === 3) {
                    // Show image, title, and name again
                    imagen.style.display = "block";
                    titulo.style.display = "block";
                    nombre.style.display = "block";

                    // Return to technical information
                    descripcion.innerHTML = info.informacionTecnica;
                    currentSection--;
                    rightArrow.disabled = false;
                }
            });

            let seleccionButton = document.createElement("button");
            seleccionButton.textContent = "Seleccionar Aeronave";
            seleccionButton.style.padding = "10px 20px";
            seleccionButton.style.backgroundColor = "#3498db";
            seleccionButton.style.color = "#fff";
            seleccionButton.style.border = "none";
            seleccionButton.style.borderRadius = "5px";
            seleccionButton.style.cursor = "pointer";
            seleccionButton.onclick = function () {
                abrirDialogoSimulacion(info.nombre, overlay);  // Pass the overlay to close it later
            };
            card.appendChild(seleccionButton);

            cardsContainer.appendChild(card);
        });

        overlay.appendChild(cardsContainer);
    }

    // Function to show dialogs without overlay
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




// Datos de límite de pasajeros para cada aeronave
const limitesPasajeros = {
    "C-172S": { min: 1, max: 4 }, // 1 piloto + 3 pasajeros
    "UH-60L (Ángel)": { min: 4, max: 15 },  // 2 pilotos + 2 tripulantes + 11 soldados
    "A-29B Super Tucano": { min: 1, max: 2 }   // 1 piloto + 1 copiloto/instructor
};

// Datos de combustible requerido por ciudad y aeronave
const combustibleNecesario = {
    "medellín": { "C-172S": 20, "UH-60L (Ángel)": 10, "A-29B Super Tucano": 50 },
    "bogotá": { "C-172S": 30, "UH-60L (Ángel)": 20, "A-29B Super Tucano": 60 },
    "cartagena": { "C-172S": 50, "UH-60L (Ángel)": 30, "A-29B Super Tucano": 80 },
    "barranquilla": { "C-172S": 60, "UH-60L (Ángel)": 40, "A-29B Super Tucano": 90 },
    "cúcuta": { "C-172S": 70, "UH-60L (Ángel)": 50, "A-29B Super Tucano": 85 },
    "pasto": { "C-172S": 40, "UH-60L (Ángel)": 20, "A-29B Super Tucano": 60 },
    "bucaramanga": { "C-172S": 50, "UH-60L (Ángel)": 30, "A-29B Super Tucano": 80 }
};

// Aumento de combustible por peso extra
const aumentoCombustible = {
    "C-172S": function (pesoAdicional) {
        return Math.ceil((pesoAdicional / 100) * 4); // 4% por cada 100 kg
    },
    "UH-60L (Ángel)": function (pesoAdicional) {
        return Math.ceil((pesoAdicional / 500) * 1.5); // 1.5% por cada 500 kg
    },
    "A-29B Super Tucano": function (pesoAdicional) {
        return Math.ceil((pesoAdicional / 200) * 1); // 1% por cada 200 kg
    }
};

// Datos de las aeronaves
const datosAeronaves = {
    "C-172S": {
        pesoVacio: 767,            // kg
        pesoMaximo: 1160,          // kg (MTOW)
        velocidadBase: 226,        // km/h (velocidad de crucero)
        pesoPorPasajero: 80        // kg (peso promedio por pasajero)
    },
    "UH-60L (Ángel)": {
        pesoVacio: 4980,           // kg
        pesoMaximo: 9980,          // kg
        velocidadBase: 280,        // km/h
        // No definimos pesoPorPasajero aquí, ya que lo manejamos en la función
    },
    "A-29B Super Tucano": {
        pesoVacio: 3200,           // kg
        pesoMaximo: 5200,          // kg
        velocidadBase: 530,        // km/h
        pesoPorPasajero: 80        // kg (peso promedio por pasajero)
    }
};

// Función para calcular el peso total de pasajeros y armamento
function calcularPesoAdicional(aeronave, numeroPasajeros, pesoEquipoAdicional) {
    let pesoPasajeros = 0;

    if (aeronave === "UH-60L (Ángel)") {
        // Para los primeros 4 pasajeros, 80 kg por persona
        // A partir del quinto pasajero, 80 kg + 30 kg por equipamiento
        for (let i = 1; i <= numeroPasajeros; i++) {
            if (i <= 4) {
                pesoPasajeros += 80; // 80 kg por persona
            } else {
                pesoPasajeros += 80 + 30; // 80 kg + 30 kg de equipamiento
            }
        }
    } else {
        // Para otras aeronaves, asumimos peso fijo por pasajero
        const pesoPorPasajero = datosAeronaves[aeronave].pesoPorPasajero;
        pesoPasajeros = numeroPasajeros * pesoPorPasajero;
    }

    // Añadir peso de equipo adicional
    if (pesoEquipoAdicional > 0) {
        pesoPasajeros += parseInt(pesoEquipoAdicional);
    }

    return pesoPasajeros;
}

// Función para calcular la velocidad ajustada en función del peso adicional
function calcularVelocidadAjustada(aeronave, pesoAdicional) {
    const velocidadBase = datosAeronaves[aeronave].velocidadBase;
    const pesoMaximo = datosAeronaves[aeronave].pesoMaximo;
    const porcentajePesoAdicional = pesoAdicional / pesoMaximo;
    const factorReduccion = 0.1; // Ajusta este valor según datos reales
    return velocidadBase * (1 - (factorReduccion * porcentajePesoAdicional));
}

// Función para generar datos para la gráfica de Velocidad en función del Peso
function generarDatosVelocidad(aeronave, pesoEquipoAdicional) {
    const { min, max } = limitesPasajeros[aeronave];
    const pesosAdicionales = [];
    const velocidades = [];

    for (let pasajeros = min; pasajeros <= max; pasajeros++) {
        const pesoAdicional = calcularPesoAdicional(aeronave, pasajeros, pesoEquipoAdicional);
        const velocidadAjustada = calcularVelocidadAjustada(aeronave, pesoAdicional);

        pesosAdicionales.push(pesoAdicional);
        velocidades.push(velocidadAjustada);
    }

    return { pesosAdicionales, velocidades };
}

// Función para generar datos para la gráfica de Gasolina en función del Peso
function generarDatosGasolina(aeronave, ciudadDestino, pesoEquipoAdicional) {
    const combustibleBase = combustibleNecesario[ciudadDestino][aeronave];
    const { min, max } = limitesPasajeros[aeronave];
    const pesosAdicionales = [];
    const consumosTotales = [];

    for (let pasajeros = min; pasajeros <= max; pasajeros++) {
        const pesoAdicional = calcularPesoAdicional(aeronave, pasajeros, pesoEquipoAdicional);
        const aumento = aumentoCombustible[aeronave](pesoAdicional);
        const consumoTotal = combustibleBase + aumento;

        pesosAdicionales.push(pesoAdicional);
        consumosTotales.push(consumoTotal);
    }

    return { pesosAdicionales, consumosTotales };
}

// Función para abrir el simulador
function abrirDialogoSimulacion(nombreAeronave, overlayAnterior) {
    // Cerrar el overlay anterior si existe
    if (overlayAnterior) {
        document.body.removeChild(overlayAnterior);
    }

    // Crear el overlay para el cuadro de diálogo de simulación
    let dialogOverlay = document.createElement("div");
    dialogOverlay.style.position = "fixed";
    dialogOverlay.style.top = "0";
    dialogOverlay.style.left = "0";
    dialogOverlay.style.width = "100vw";
    dialogOverlay.style.height = "100vh";
    dialogOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    dialogOverlay.style.display = "flex";
    dialogOverlay.style.justifyContent = "center";
    dialogOverlay.style.alignItems = "center";
    dialogOverlay.style.zIndex = "1000";
    document.body.appendChild(dialogOverlay);

    // Crear el cuadro de diálogo
    let dialogBox = document.createElement("div");
    dialogBox.style.width = "80%";
    dialogBox.style.margin = "auto";
    dialogBox.style.backgroundColor = "#fff";
    dialogBox.style.padding = "20px";
    dialogBox.style.borderRadius = "15px";
    dialogBox.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.3)";
    dialogBox.style.display = "flex";
    dialogBox.style.flexDirection = "row"; // Hacer que las secciones estén una al lado de la otra
    dialogBox.style.fontFamily = "Arial, sans-serif";
    dialogBox.style.gap = "20px"; // Agregar espacio entre las secciones

    // Sección izquierda para el formulario
    let leftSection = document.createElement("div");
    leftSection.style.flex = "1";
    leftSection.style.paddingRight = "20px";

    // Título dinámico dependiendo de la aeronave seleccionada
    let title = document.createElement("h2");
    title.textContent = `Estás utilizando la nave: ${nombreAeronave}`;
    title.style.color = "#3498db";
    title.style.marginBottom = "20px";
    leftSection.appendChild(title);

    // Formulario de datos de simulación
    let form = document.createElement("form");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.alignItems = "flex-start";
    form.style.gap = "15px";

    // Campo de número de pasajeros
    let labelPasajeros = document.createElement("label");
    labelPasajeros.textContent = "Número de pasajeros:";
    labelPasajeros.style.fontWeight = "bold";
    form.appendChild(labelPasajeros);

    let inputPasajeros = document.createElement("input");
    inputPasajeros.type = "number";
    inputPasajeros.min = limitesPasajeros[nombreAeronave].min;
    inputPasajeros.max = limitesPasajeros[nombreAeronave].max;
    inputPasajeros.style.width = "100%";
    inputPasajeros.style.padding = "10px";
    inputPasajeros.style.border = "1px solid #ddd";
    inputPasajeros.style.borderRadius = "5px";
    form.appendChild(inputPasajeros);

    // Campo de cantidad de combustible
    let labelCombustible = document.createElement("label");
    labelCombustible.textContent = "Consumo de Combustible del tanque lleno (%):";
    labelCombustible.style.fontWeight = "bold";
    form.appendChild(labelCombustible);

    let inputCombustible = document.createElement("input");
    inputCombustible.type = "number";
    inputCombustible.min = "0";
    inputCombustible.max = "100";
    inputCombustible.style.width = "100%";
    inputCombustible.style.padding = "10px";
    inputCombustible.style.border = "1px solid #ddd";
    inputCombustible.style.borderRadius = "5px";
    form.appendChild(inputCombustible);

    // Campo de selección de ciudades
    let labelCiudad = document.createElement("label");
    labelCiudad.textContent = "Ciudad de destino:";
    labelCiudad.style.fontWeight = "bold";
    form.appendChild(labelCiudad);

    let selectCiudad = document.createElement("select");
    selectCiudad.style.width = "100%";
    selectCiudad.style.padding = "10px";
    selectCiudad.style.border = "1px solid #ddd";
    selectCiudad.style.borderRadius = "5px";

    let ciudades = ["Medellín", "Bogotá", "Cartagena", "Barranquilla", "Cúcuta", "Pasto", "Bucaramanga"];
    ciudades.forEach(ciudad => {
        let optionCiudad = document.createElement("option");
        optionCiudad.value = ciudad.toLowerCase();
        optionCiudad.textContent = ciudad;
        selectCiudad.appendChild(optionCiudad);
    });

    form.appendChild(selectCiudad);

    // Campo de equipo o armamento adicional (bloquear si es C-172S)
    let labelArmamento = document.createElement("label");
    labelArmamento.textContent = "¿Lleva equipo o armamento adicional?";
    labelArmamento.style.fontWeight = "bold";
    form.appendChild(labelArmamento);

    let selectArmamento = document.createElement("select");
    selectArmamento.style.width = "100%";
    selectArmamento.style.padding = "10px";
    selectArmamento.style.border = "1px solid #ddd";
    selectArmamento.style.borderRadius = "5px";

    let optionNo = document.createElement("option");
    optionNo.value = "no";
    optionNo.textContent = "No";
    selectArmamento.appendChild(optionNo);

    let optionSi = document.createElement("option");
    optionSi.value = "si";
    optionSi.textContent = "Sí";
    selectArmamento.appendChild(optionSi);
    form.appendChild(selectArmamento);

    if (nombreAeronave === "C-172S") {
        selectArmamento.disabled = true; // Bloquear opción de equipo adicional para C-172S
    }

    // Campo de peso adicional si selecciona "Sí"
    let labelPesoAdicional = document.createElement("label");
    labelPesoAdicional.textContent = "Peso adicional (kg):";
    labelPesoAdicional.style.fontWeight = "bold";
    labelPesoAdicional.style.display = "none"; // Se oculta por defecto
    form.appendChild(labelPesoAdicional);

    let inputPesoAdicional = document.createElement("input");
    inputPesoAdicional.type = "number";
    inputPesoAdicional.style.width = "100%";
    inputPesoAdicional.style.padding = "10px";
    inputPesoAdicional.style.border = "1px solid #ddd";
    inputPesoAdicional.style.borderRadius = "5px";
    inputPesoAdicional.style.display = "none"; // Se oculta por defecto
    form.appendChild(inputPesoAdicional);

    // Mostrar el campo de peso adicional si selecciona "Sí"
    selectArmamento.addEventListener("change", function () {
        if (selectArmamento.value === "si") {
            labelPesoAdicional.style.display = "block";
            inputPesoAdicional.style.display = "block";
        } else {
            labelPesoAdicional.style.display = "none";
            inputPesoAdicional.style.display = "none";
        }
    });

    leftSection.appendChild(form);

    // Botón "Insertar Datos"
    let botonInsertar = document.createElement("button");
    botonInsertar.textContent = "Insertar Datos";
    botonInsertar.style.marginTop = "20px";
    botonInsertar.style.padding = "10px 20px";
    botonInsertar.style.backgroundColor = "#3498db";
    botonInsertar.style.color = "#fff";
    botonInsertar.style.border = "none";
    botonInsertar.style.borderRadius = "5px";
    botonInsertar.style.cursor = "pointer";
    botonInsertar.onclick = function (e) {
        e.preventDefault();
        let pasajeros = parseInt(inputPasajeros.value);
        let maxPasajeros = limitesPasajeros[nombreAeronave].max;
        let minPasajeros = limitesPasajeros[nombreAeronave].min;
        let combustible = parseInt(inputCombustible.value);
        let ciudadDestino = selectCiudad.value;
        let pesoEquipoAdicional = selectArmamento.value === "si" ? parseInt(inputPesoAdicional.value) : 0;

        // Validaciones
        if (isNaN(pasajeros) || pasajeros < minPasajeros || pasajeros > maxPasajeros) {
            alert(`Atención: El número de pasajeros debe estar entre ${minPasajeros} y ${maxPasajeros}.`);
            return;
        }
        if (isNaN(combustible) || combustible <= 0 || combustible > 100) {
            alert("Por favor, ingresa un porcentaje de combustible válido (1-100%).");
            return;
        }
        if (selectArmamento.value === "si" && (isNaN(pesoEquipoAdicional) || pesoEquipoAdicional <= 0)) {
            alert("Por favor, ingresa un peso adicional válido.");
            return;
        }

        // Calcular el peso total de pasajeros y equipo
        let pesoTotalAdicional = calcularPesoAdicional(nombreAeronave, pasajeros, pesoEquipoAdicional);

        // Combustible requerido según ciudad y aeronave
        let combustibleRequerido = combustibleNecesario[ciudadDestino][nombreAeronave];

        // Si hay peso adicional, calcular aumento de combustible
        let aumentoComb = aumentoCombustible[nombreAeronave](pesoTotalAdicional);
        combustibleRequerido += aumentoComb;

        // Verificar si el peso total excede el MTOW (peso máximo de despegue)
        const pesoMaximo = datosAeronaves[nombreAeronave].pesoMaximo;
        const pesoVacio = datosAeronaves[nombreAeronave].pesoVacio;
        const pesoDespegue = pesoVacio + pesoTotalAdicional;

        if (pesoDespegue > pesoMaximo) {
            alert("Advertencia: El peso total excede el peso máximo de despegue para la aeronave.");
            return;
        }

        // Verificar si el combustible es suficiente
        if (combustible < combustibleRequerido) {
            alert(`Precaución: Se necesita al menos ${combustibleRequerido}% de combustible para el vuelo.`);
            return;
        }

        // Datos correctos, proceder con la simulación
        alert("Datos ingresados correctamente. Procediendo con la simulación.");

        // Actualizar las gráficas con los datos ingresados
        generarYMostrarGraficas(nombreAeronave, ciudadDestino, pesoEquipoAdicional);
    };

    leftSection.appendChild(botonInsertar);


        // Botón "Conocer Información"
        let botonConocerInfo = document.createElement("button");
        botonConocerInfo.textContent = "Conocer Información";
        botonConocerInfo.style.marginTop = "10px";
        botonConocerInfo.style.padding = "10px 20px";
        botonConocerInfo.style.backgroundColor = "#f39c12";
        botonConocerInfo.style.color = "#fff";
        botonConocerInfo.style.border = "none";
        botonConocerInfo.style.borderRadius = "5px";
        botonConocerInfo.style.cursor = "pointer";
    
        // Funcionalidad del botón "Conocer Información"
        botonConocerInfo.onclick = function () {
            let pasajeros = parseInt(inputPasajeros.value) || 0;
            let combustible = parseInt(inputCombustible.value) || 0;
            let ciudadDestino = selectCiudad.value;
            let pesoEquipoAdicional = selectArmamento.value === "si" ? parseInt(inputPesoAdicional.value) || 0 : 0;
    
            // Calcular peso total de los pasajeros
            const pesoPasajero = 80;
            const pesoArmamento = 30;
            let pesoTotalPasajeros = pasajeros > 4 ? (4 * pesoPasajero) + ((pasajeros - 4) * (pesoPasajero + pesoArmamento)) : pasajeros * pesoPasajero;
            let pesoTotal = pesoTotalPasajeros + pesoEquipoAdicional;
    
            // Consumo de combustible ajustado según peso adicional
            let consumoBase = combustibleNecesario[ciudadDestino][nombreAeronave];
            let incrementoCombustible = aumentoCombustible[nombreAeronave](pesoTotal);
            let consumoAjustado = consumoBase + incrementoCombustible;
    
            // Velocidad ajustada
            let velocidadBase = datosAeronaves[nombreAeronave].velocidadBase;
            let factorReduccion = 0.1;
            let mtow = datosAeronaves[nombreAeronave].pesoMaximo;
            let porcentajePesoAdicional = pesoTotal / mtow;
            let velocidadAjustada = velocidadBase * (1 - (factorReduccion * porcentajePesoAdicional));
    
            // Crear mensaje con la información
            let mensaje = `
            Cálculos Esperados:
            
            Peso total:
            - Peso de los pasajeros: ${pesoTotalPasajeros} kg.
            - Peso adicional del equipo: ${pesoEquipoAdicional} kg.
            - Peso total adicional: ${pesoTotal} kg.
            
            Consumo de combustible:
            - Consumo base para ${ciudadDestino}: ${consumoBase}%.
            - Incremento por peso adicional: ${incrementoCombustible.toFixed(2)}%.
            - Consumo ajustado: ${consumoAjustado.toFixed(2)}%.
    
            Velocidad ajustada:
            - Velocidad base: ${velocidadBase} km/h.
            - Velocidad ajustada: ${velocidadAjustada.toFixed(2)} km/h.
            `;
    
            alert(mensaje);
        };
        leftSection.appendChild(botonConocerInfo);

    // Botón para cerrar el diálogo
    let closeButton = document.createElement("button");
    closeButton.textContent = "Salir del simulador";
    closeButton.style.marginTop = "10px";
    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "#e74c3c";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = function () {
        document.body.removeChild(dialogOverlay);
    };
    leftSection.appendChild(closeButton);

    dialogBox.appendChild(leftSection);

    // Sección derecha para el gráfico y la animación
    let rightSection = document.createElement("div");
    rightSection.style.flex = "1";
    rightSection.style.paddingLeft = "20px";
    rightSection.style.display = "flex";
    rightSection.style.flexDirection = "column";
    rightSection.style.gap = "20px";

    // Título del gráfico (encima del gráfico)
    let chartTitle = document.createElement("h3");
    chartTitle.textContent = "Gráfica de Velocidad en función del Peso";
    chartTitle.style.textAlign = "center";
    rightSection.appendChild(chartTitle);

    // Canvas para el gráfico
    let canvasGrafico = document.createElement("canvas");
    canvasGrafico.id = "canvasGrafico";
    canvasGrafico.style.width = "100%";
    canvasGrafico.style.height = "300px";
    rightSection.appendChild(canvasGrafico);

    // Agregar Chart.js al documento si no está ya agregado
    if (!document.getElementById('chartjs-script')) {
        let scriptChart = document.createElement("script");
        scriptChart.id = 'chartjs-script';
        scriptChart.src = "https://cdn.jsdelivr.net/npm/chart.js";
        document.head.appendChild(scriptChart);
    }

    // Variables de control para el gráfico
    let currentGraph = 0; // 0: Velocidad vs Peso, 1: Gasolina vs Peso
    let chartInstance = null; // Variable para almacenar la instancia del gráfico

    // Función para inicializar el gráfico vacío
    function inicializarGraficoVacio() {
        // Definir el labelY y el color según el gráfico actual
        let labelY = currentGraph === 0 ? 'Velocidad (km/h)' : 'Consumo de Combustible (%)';
        let borderColor = currentGraph === 0 ? 'red' : 'blue';
        chartTitle.textContent = currentGraph === 0 ? "Gráfica de Velocidad en función del Peso" : "Gráfica de Gasolina en función del Peso";

        const ctx = canvasGrafico.getContext('2d');
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],
                    borderColor: borderColor,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: { title: { display: true, text: 'Peso Adicional (kg)' } },
                    y: { title: { display: true, text: labelY } }
                }
            }
        });
    }

    // Llamar a la función para inicializar el gráfico vacío al cargar el simulador
    // Esperar a que Chart.js esté cargado
    if (typeof Chart !== 'undefined') {
        inicializarGraficoVacio();
    } else {
        // Si Chart.js aún no está cargado, esperar y volver a intentar
        setTimeout(() => inicializarGraficoVacio(), 100);
    }

    // Función para generar y mostrar las gráficas
    function generarYMostrarGraficas(aeronave, ciudadDestino, pesoEquipoAdicional) {
        // Obtener los datos según el gráfico actual
        let data, labelY, borderColor;
        if (currentGraph === 0) {
            // Gráfica de Velocidad vs Peso
            let datosVelocidad = generarDatosVelocidad(aeronave, pesoEquipoAdicional);
            data = datosVelocidad.velocidades;
            chartInstance.data.labels = datosVelocidad.pesosAdicionales;
            chartInstance.data.datasets[0].label = 'Velocidad (km/h)';
            labelY = 'Velocidad (km/h)';
            borderColor = 'red';
            chartTitle.textContent = "Gráfica de Velocidad en función del Peso";
        } else {
            // Gráfica de Gasolina vs Peso
            let datosGasolina = generarDatosGasolina(aeronave, ciudadDestino, pesoEquipoAdicional);
            data = datosGasolina.consumosTotales;
            chartInstance.data.labels = datosGasolina.pesosAdicionales;
            chartInstance.data.datasets[0].label = 'Consumo de Combustible (%)';
            labelY = 'Consumo de Combustible (%)';
            borderColor = 'blue';
            chartTitle.textContent = "Gráfica de Gasolina en función del Peso";
        }
        // Actualizar los datos del dataset
        chartInstance.data.datasets[0].data = data;
        chartInstance.data.datasets[0].borderColor = borderColor;
        chartInstance.options.scales.y.title.text = labelY;
        // Actualizar el gráfico
        chartInstance.update();
    }

    // Flechas de cambio de gráfico
    let arrowContainer = document.createElement("div");
    arrowContainer.style.display = "flex";
    arrowContainer.style.justifyContent = "center";
    arrowContainer.style.alignItems = "center";
    arrowContainer.style.gap = "20px";
    arrowContainer.style.marginTop = "-25px"; // Subir las flechas para que estén al ras del gráfico
    rightSection.appendChild(arrowContainer);

    let leftArrow = document.createElement("button");
    leftArrow.textContent = "←";
    leftArrow.style.fontSize = "2rem";
    leftArrow.style.border = "none";
    leftArrow.style.backgroundColor = "transparent";
    leftArrow.style.cursor = "pointer";
    leftArrow.style.position = "relative";
    arrowContainer.appendChild(leftArrow);

    let rightArrow = document.createElement("button");
    rightArrow.textContent = "→";
    rightArrow.style.fontSize = "2rem";
    rightArrow.style.border = "none";
    rightArrow.style.backgroundColor = "transparent";
    rightArrow.style.cursor = "pointer";
    rightArrow.style.position = "relative";
    arrowContainer.appendChild(rightArrow);

    // Función para cambiar el gráfico al hacer clic en las flechas
    function cambiarGrafico() {
        currentGraph = (currentGraph === 0) ? 1 : 0; // Alternar entre gráficos
        if (chartInstance) {
            // Actualizar el título y los ejes
            let labelY = currentGraph === 0 ? 'Velocidad (km/h)' : 'Consumo de Combustible (%)';
            chartTitle.textContent = currentGraph === 0 ? "Gráfica de Velocidad en función del Peso" : "Gráfica de Gasolina en función del Peso";
            chartInstance.options.scales.y.title.text = labelY;
            chartInstance.data.datasets[0].borderColor = currentGraph === 0 ? 'red' : 'blue';

            // Verificar si hay datos ingresados
            if (chartInstance.data.labels.length > 0) {
                // Regenerar y mostrar la gráfica con los datos actuales
                let ciudadDestino = selectCiudad.value;
                let pesoEquipoAdicional = selectArmamento.value === "si" ? parseInt(inputPesoAdicional.value) : 0;
                generarYMostrarGraficas(nombreAeronave, ciudadDestino, pesoEquipoAdicional);
            } else {
                // No hay datos, limpiar el gráfico
                chartInstance.data.labels = [];
                chartInstance.data.datasets[0].data = [];
                chartInstance.data.datasets[0].label = '';
                chartInstance.update();
            }
        }
    }

    leftArrow.addEventListener("click", cambiarGrafico);
    rightArrow.addEventListener("click", cambiarGrafico);

    dialogBox.appendChild(rightSection);
    dialogOverlay.appendChild(dialogBox);
}


});
