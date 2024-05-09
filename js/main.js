const mensajeIngresado = document.getElementById("mensaje-ingresado"); 
const chatBox = document.getElementById("chat-box"); 

// Función enviar mensaje
function sendMessage() {
    const userInput = mensajeIngresado.value.trim();
    // Si el mensaje no está vacío, se envía
    if (userInput !== "") {
        // Se muestra el mensaje en la pantalla
        displayMessage(userInput, "user");
        // Se envía el mensaje al bot
        processUserInput(userInput);
        // Se limpia el input
        mensajeIngresado.value = "";
    }
}

function displayMessage(message, sender) {
    // Se crea un elemento div para el mensaje
    const messageElement = document.createElement("div");
    // Se agrega la clase message y sender al elemento div
    messageElement.classList.add("message", sender);
    // Se agrega el mensaje al elemento div
    messageElement.innerText = message;
    // Se agrega el elemento div al chatbox
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function processUserInput(input) {
    // Se genera una respuesta del bot
    const botResponse = generateBotResponse(input);
    // Se muestra la respuesta del bot en la pantalla
    displayMessage(botResponse, "bot");
}

function generateBotResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Variable para almacenar la respuesta del chatbot
    let botResponse;

    // Mensaje inicial con las opciones disponibles
    if (input === "" || isNaN(input)) {
        botResponse = "¡Hola! Soy un chatbot. Estaré para ayudarte, Por favor, elige una opción:\n" +
                      "1. Eliminar Documento\n" +
                      "2. Subir archivos \n" +
                      "3. Compartir documento\n" +
                      "4. Crear carpeta";
    } else {
        // Utilizamos un switch-case para manejar diferentes tipos de consultas del usuario
        switch (input) {
            case "1":
            case "Eliminar Documento":
                botResponse = "Para eliminar un documento necesitas seguir los siguientes pasos: \n 1. Seleccionar el archivo o carpeta a eliminar \n 2. Da click derecho \n 3. Seleciona la opcion mover a la papelera \n 4. Aceptar ";
                break;
            case "2":
            case "Subir archivo":
                botResponse = " Para subir un archivo sigue los siguientes pasos: \n 1. en la parte izquierda superior dale click en nuevo \n 2. Selecciona la opcion subir archivo \n 3. Selecciona tu archivo \n 4.Dale abrir \n Felicidades tu archivo ya esta en la nube";
                break;
            case "3":
            case "compartir documento":
                botResponse = "Para compartir un documento sigue los siguientes pasos: \n 1. Selecciona el archivo a compartir \n 2. Da click derecho \n3. Selecciona compartir , en este punto puedes escoger 2 opciones si compartir mediante enlace o agregar colaboradores. \n4. Si Das click a copiar enlace, este se copiara directamente en tu portapapeles. \n5. Para añadir colaboradores da Click a 'Compartir' e ingresa los correos a los cuales quieres compartir el archivo ";
                break;
            case "4":
            case "crear carpeta":
                botResponse = "Para crear una carpeta sigue los siguientes pasos:\n1. en la parte izquierda dale en 'Nuevo'\n 2. 'Nueva carpeta', ponle un nombre a tu carpeta \n3. dale 'Aceptar'.";
                break;
            default:
                botResponse = "Lo siento, no entendí tu consulta. Estoy aprendiendo cada vez mas para solucionar tus problemas";
        }
    }

    return botResponse;
}

const enviarMensajeBtn = document.getElementById("enviar-mensaje"); 
enviarMensajeBtn.addEventListener("click", sendMessage);
