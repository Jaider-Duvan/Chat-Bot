const mensajeIngresado = document.getElementById("mensaje-ingresado"); 
const chatBox = document.getElementById("chat-box"); 

/**
 * Función para mostrar un mensaje en el chat.
 * @param {string} message - El mensaje a mostrar.
 * @param {string} sender - El remitente del mensaje ("user" o "bot-message").
 */
function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

/**
 * Función para procesar la entrada del usuario.
 * @param {string} input - La entrada del usuario.
 */
function processUserInput(input) {
    const botResponse = generateBotResponse(input);
    displayMessage(botResponse, "bot-message");
}

/**
 * Función para enviar un mensaje.
 */
async function sendMessage() {
    const userInput = mensajeIngresado.value.trim();
    if (userInput !== "") {
        displayMessage(userInput, "user");
        processUserInput(userInput);
        mensajeIngresado.value = "";
        setTimeout(clearMessages, 60000); // Limpia los mensajes después de 60 segundos
    }
}

/**
 * Función para limpiar los mensajes del chat.
 */
function clearMessages() {
    const userMessages = document.querySelectorAll('.user');
    userMessages.forEach(message => message.remove());
    const botMessages = document.querySelectorAll('.bot-message');
    botMessages.forEach(message => message.remove());
}

/**
 * Función para generar la respuesta del bot.
 * @param {string} userInput - La entrada del usuario.
 * @returns {string} - La respuesta del bot.
 */
function generateBotResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    let botResponse;

    if (input === "" || isNaN(input)) {
        botResponse = "¡Hola! Soy un chatbot. Estaré para ayudarte, Por favor, elige una opción:\n" +
                      "1. Enviar un documento a la papelera\n" +
                      "2. Subir archivos \n" +
                      "3. Compartir documento\n" +
                      "4. Crear carpeta\n" +
                      "5. Restaurar archivo\n" +
                      "6. Eliminar permanentemente un archivo\n" +
                      "7. ¿Ya no quieres ser parte de un documento compartido?";
    } else {
        switch (input) {
            case "1":
            case "enviar un documento a la papelera":
                botResponse = "Para enviar un documento a la papelera, necesitas seguir los siguientes pasos: \n 1. Seleccionar el archivo o carpeta a eliminar \n 2. Da click derecho \n 3. Selecciona la opción mover a la papelera \n 4. Aceptar.";
                break;
            case "2":
            case "subir archivos":
                botResponse = "Para subir un archivo sigue los siguientes pasos: \n 1. En la parte izquierda superior dale click en nuevo \n 2. Selecciona la opción subir archivo \n 3. Selecciona tu archivo \n 4. Dale abrir \n Felicidades tu archivo ya está en la nube.";
                break;
            case "3":
            case "compartir documento":
                botResponse = "Para compartir un documento sigue los siguientes pasos: \n 1. Selecciona el archivo a compartir \n 2. Da click derecho \n 3. Selecciona compartir. Puedes escoger entre compartir mediante enlace o agregar colaboradores. \n 4. Si das click a copiar enlace, este se copiará directamente en tu portapapeles. \n 5. Para añadir colaboradores, da click en 'Compartir' e ingresa los correos a los cuales quieres compartir el archivo.";
                break;
            case "4":
            case "crear carpeta":
                botResponse = "Para crear una carpeta sigue los siguientes pasos:\n1. En la parte izquierda, dale click en 'Nuevo'\n 2. Selecciona 'Nueva carpeta', ponle un nombre a tu carpeta \n 3. Dale 'Aceptar'.";
                break;
            case "5":
            case "restaurar archivo":
                botResponse = "Para restaurar un archivo que se envió a la papelera, sigue estos pasos:\n 1. En la parte izquierda, dale click en 'Papelera' \n 2. Selecciona el archivo que deseas recuperar \n 3. Dale click derecho en 'Restaurar'.";
                break;
            case "6":   
            case "eliminar permanentemente un archivo":
                botResponse = "Para eliminar permanentemente un archivo que se envió a la papelera, sigue estos pasos:\n 1. En la parte izquierda, dale click en 'Papelera' \n 2. Selecciona el archivo que deseas eliminar permanentemente \n 3. Dale click derecho en 'Eliminar definitivamente'.";
                break;
            case "7":
            case "¿ya no quieres ser parte de un documento compartido?":
                botResponse = "Si ya no quieres ser parte de un archivo que se ha compartido contigo, sigue estos pasos:\n 1. Selecciona el archivo que compartieron contigo\n 2. Dale click derecho y selecciona 'Quitar'.";
                break;
            default:
                botResponse = "Lo siento, no entendí tu consulta. Estoy aprendiendo cada vez más para solucionar tus problemas."; 
        }
    }

    return botResponse;
}

const enviarMensajeBtn = document.getElementById("enviar-mensaje"); 
enviarMensajeBtn.addEventListener("click", sendMessage);
