const mensajeIngresado = document.getElementById("mensaje-ingresado"); 
const chatBox = document.getElementById("chat-box"); 

/**
 * Función para mostrar un mensaje en el chat.
 * @param {string} message - El mensaje a mostrar.
 * @param {string} sender - El remitente del mensaje ("user" o "bot-message").
 */
function displayMessage(message, sender) {
    // Se crea un elemento div para el mensaje
    const messageElement = document.createElement("div");
    // Se agrega la clase message y sender al elemento div
    messageElement.classList.add("message", sender);
    // Se agrega el mensaje al elemento div
    messageElement.innerText = message;
    // Se agrega el elemento div al chatbox
    chatBox.appendChild(messageElement);

    // Desplaza automáticamente hacia abajo para mostrar el nuevo mensaje
    chatBox.scrollTop = chatBox.scrollHeight;
}

/**
 * Función para procesar la entrada del usuario.
 * @param {string} input - La entrada del usuario.
 */
function processUserInput(input) {
    // Se genera una respuesta del bot
    const botResponse = generateBotResponse(input);
    // Se muestra la respuesta del bot en la pantalla
    displayMessage(botResponse, "bot-message");
}

/**
 * Función para enviar un mensaje.
 */
async function sendMessage() {
    const userInput = mensajeIngresado.value.trim();
    // Si el mensaje no está vacío, se envía
    if (userInput !== "") {
        // Se muestra el mensaje en la pantalla
        displayMessage(userInput, "user");
        // Se envía el mensaje al bot
        processUserInput(userInput);
        // Se limpia el input
        mensajeIngresado.value = "";
        // Limpia los mensajes después de 30 segundos
        setTimeout(clearMessages, 60000);
    }
}

/**
 * Función para limpiar los mensajes del chat.
 */
function clearMessages() {
    // Elimina los mensajes del usuario
    const userMessages = document.querySelectorAll('.user');
    userMessages.forEach(message => message.remove());
    // Elimina los mensajes del bot
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
    
    // Variable para almacenar la respuesta del chatbot
    let botResponse;

    // Mensaje inicial con las opciones disponibles
    if (input === "" || isNaN(input)) {
        botResponse = "¡Hola! Soy un chatbot. Estaré para ayudarte, Por favor, elige una opción:\n" +
                      "1. Enviar un documento a la papelera\n" +
                      "2. Subir archivos \n" +
                      "3. Compartir documento\n" +
                      "4. Crear carpeta\n" +
                      "5. Restaurar archivo\n" +
                      "6. Eliminar permanentemente un archivo\n" +
                      "7. ¿ya no quieres ser parte de un docuemnto compartido?";
    } else {
        // Utilizamos un switch-case para manejar diferentes tipos de consultas del usuario
        switch (input) {
            case "1":
            case "enviar un documento a la papelera":
                botResponse = "Para enviar un documento a la papelera, necesitas seguir los siguientes pasos: \n 1. Seleccionar el archivo o carpeta a eliminar \n 2. Da click derecho \n 3. Seleciona la opcion mover a la papelera \n 4. Aceptar ";
                break;
            case "2":
            case "subir archivos":
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
            case "5":
            case "Restaurar archivo":
                botResponse = "Para restaurar un archivo que se envio a la papelera, sigue los siguientes pasos:\n 1. en la parte izquierda dale en 'papelera' \n 2. Selecciona el archivo que deseas recuperar \n3. dale click derecho 'restaruar'.";
                break;
            case "6":   
            case "eliminar permanentemente un archivo":
                botResponse = "Para eliminar permanentemente un archivo un archivo que se envio a la papelera, sigue los siguientes pasos:\n 1. en la parte izquierda dale en 'papelera' \n 2. Selecciona el archivo que deseas eliminar permanentemente \n3. dale click derecho 'eliminar definitivamente'.";
                break;
            case "7":
            case "¿ya no quieres ser parte de un docuemnto compartido?":
                botResponse = "si ya no quieres ser parte de un archivo que se ha compartido contigo, sigue los siguientes pasos:\n 1. Selecciona el archivo que compartieron contigo\n2. dale click derecho 'quitar'.";
                break;
            default:
                botResponse = "Lo siento, no entendí tu consulta. Estoy aprendiendo cada vez mas para solucionar tus problemas"; 
        }
    }

    return botResponse;
}

// Obtener el botón de enviar mensaje y agregar un event listener
const enviarMensajeBtn = document.getElementById("enviar-mensaje"); 
enviarMensajeBtn.addEventListener("click", sendMessage);
