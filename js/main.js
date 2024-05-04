const mensajeIngresado = document.getElementById("mensaje-ingresado"); // Cambié el nombre del ID a "mensaje-ingresado"
const chatBox = document.getElementById("chat-box"); // Cambié el nombre del ID a "chat-box"

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

    // Se evalúa la entrada del usuario y se genera una respuesta adecuada
    switch (input) {
        case "1":
        case "ayuda":
            botResponse = "Puedo ayudarte con diversas consultas. ¿En qué necesitas ayuda? (Por ejemplo: Ayuda con Drive, compartir un documento, crear una carpeta)";
            break;
        case "2":
        case "Ayuda con Drive":
            botResponse = "Claro por favor inngresa la duda que tienes ";
            break;
        case "3":
        case "compartir-documento":
            botResponse = "Si quieres compartir un documento para trabajar con otra persona ingresa 1 si quieres compartir via gmail ingresa 2.";
            break;
        case "4":
        case "Crear-carpeta":
            botResponse = "Para crear una carpeta ingresa a Drive, en la parte izquierda dale en nuevo y nueva carpeta, ponle un nombre a tu carpeta y dale aceptar o ingresa a esta pagina y te damos mas informacion ";
            break;
        default:
            botResponse = "Lo siento, no entendí tu consulta. Por favor, ingresa el número correspondiente o una palabra clave válida.";
    }

    return botResponse;
}


const enviarMensajeBtn = document.getElementById("enviar-mensaje"); 
enviarMensajeBtn.addEventListener("click", sendMessage);
