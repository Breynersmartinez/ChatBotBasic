/* MANEJO DE OBJETOS EN JS */

   /*Mapeo de palabras clave*/

  /* ( El metodo de soluciones comunes, 
   contiene pares de clave y valor,
   la clave representa un palabra que
    la persona podria ingresar y 
    el valor es la respuesta que esta
     predeterinada en el objeto )*/

     /* LIBRERIAS LENGUAJE NATURA PARA JS */
/* (INSTALADA) TensorFlow.js para tareas de procesamiento de lenguaje 
natural
npm install @tensorflow/tfjs*/
/*Natural Language Toolkit (NLTK) comúnmente utilizado 
en Python pero también puede ser utilizado 
en JavaScript a través de Node.js
 npm install nltk*/
 /* COMPROMISE:
 librería de procesamiento de lenguaje natural en JavaScript
 npm install compromise */
 // Función para mostrar el historial de conversaciones
 
 var isPaused = false;
    
 function sendMessage() {
     var userInput = document.getElementById('userInput').value;
     var chatWindow = document.getElementById('chatWindow');
 
     var userMessage = document.createElement('div');
     userMessage.classList.add('message', 'user-message');
     userMessage.textContent = userInput;
     chatWindow.appendChild(userMessage);
 
     var time = new Date().toLocaleTimeString();
     var timeSpan = document.createElement('span');
     timeSpan.classList.add('message-time');
     timeSpan.textContent = time;
     userMessage.appendChild(timeSpan);
 
     var botMessage = document.createElement('div');
     botMessage.classList.add('message', 'bot-message');
     chatWindow.appendChild(botMessage);
 
     var botResponse = Soluciones_Comunes.hasOwnProperty(userInput.toLowerCase()) ? Soluciones_Comunes[userInput.toLowerCase()] : 'Estoy procesando tu mensaje...';
     var i = 0;
     var intervalId = setInterval(function() {
         if (!isPaused) {
             if (i < botResponse.length) {
                 botMessage.textContent += botResponse[i];
                 i++;
             } else {
                 clearInterval(intervalId);
                 var botTimeSpan = document.createElement('span');
                 botTimeSpan.classList.add('message-time');
                 botTimeSpan.textContent = new Date().toLocaleTimeString();
                 botMessage.appendChild(botTimeSpan);
             }
         }
     }, 20);  // Ajusta este valor para controlar la velocidad de la animación
 
     document.getElementById('userInput').value = '';
     chatWindow.scrollTop = chatWindow.scrollHeight;
 }
 
 function pauseBot() {
     isPaused = true;
 }
 
 function resumeBot() {
     isPaused = false;
 }
 
 function toggleDarkMode() {
     document.body.classList.toggle('modo_oscuro');
 }
     /* se utiliza para abrir un enlace
      en una nueva pestaña del navegador. 
      En este caso, abre un documento compartido 
      en SharePoint.*/
 
     function openDocument() {
         window.open('https://campusuccedu-my.sharepoint.com/:w:/g/personal/breiner_martinez_campusucc_edu_co/EV9j7QzGVzJNnKDSR7nTqAYBQykzAWR3-TmlwBVbl1qb8A?e=2x2n20', '_blank');
     }
     
     /* La  función se llama cuando 
     se cambia el interruptor de tema
      (modo claro / oscuro).
       Dependiendo del estado del interruptor,
        llama a toggleDarkMode() para cambiar
         entre los modos claro y oscuro.*/
 
     function toggleTheme() {
         var themeSwitch = document.getElementById("themeSwitch");
         if (themeSwitch.checked) {
             toggleDarkMode();
         } else {
             toggleDarkMode();
         }
     }
     
     document.addEventListener("DOMContentLoaded", function() {
         const inputField = document.getElementById("userInput");
     
         // Escuchar el evento "keypress" en el campo de entrada
         inputField.addEventListener("keypress", function(event) {
             // Verificar si la tecla presionada es "Enter"
             if (event.key === "Enter") {
                 // Evitar que se envíe un salto de línea al presionar "Enter"
                 event.preventDefault();
                 
                 // Llamar a la función para enviar el mensaje
                 sendMessage();
             }
         });
     });
     
     /* _______________Menu__________*/
 /*
     muestra u ocultar el menú desplegable cuando
      se hace clic en el botón correspondiente. 
      pone o quita la clase "show" al elemento 
      que contiene el menú desplegable.
     */
     function toggleDropdown() {
         var dropdownContent = document.getElementById("dropdownContent");
         dropdownContent.classList.toggle("show");
     }
 
     /* un evento que se activa cuando se hace clic
      en cualquier parte de la ventana del navegador. 
      Se utiliza aquí para cerrar el menú desplegable
       si se hace clic fuera de él. Si el clic no es 
       en el botón del menú desplegable, se cierra el
        menú desplegable.*/
 
     window.onclick = function(event) {
       if (!event.target.matches('.dropdown-btn')) {
         var dropdowns = document.getElementsByClassName("dropdown-content");
         var i;
         for (i = 0; i < dropdowns.length; i++) {
           var openDropdown = dropdowns[i];
           if (openDropdown.classList.contains('show')) {
             openDropdown.classList.remove('show');
           }
         }
       }
     }
/*_________________________________________________ */
function mostrarHistorialConversaciones() {
    const historialConversaciones = cargarHistorialConversaciones();
    let historialHTML = '<h2>Historial de Conversaciones</h2><ul>';
    historialConversaciones.forEach(conversacion => {
        historialHTML += `<li><strong>Usuario:</strong> ${conversacion.userInput}</li>`;
        historialHTML += `<li><strong>Chatbot:</strong> ${conversacion.botResponse}</li>`;
    });
    historialHTML += '</ul>';
    // Mostrar el historial en una ventana emergente o en un área específica de la página
    alert(historialHTML); // Ejemplo: mostrar en una ventana emergente
}

// Función para crear una nueva conversación (limpiar el área de chat)
function crearNuevaConversacion() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = ''; // Limpiar el contenido del área de chat
}

// Función para guardar el historial de conversaciones en el almacenamiento local
function guardarHistorialConversaciones(conversaciones) {
    localStorage.setItem('historialConversaciones', JSON.stringify(conversaciones));
}

// Función para cargar el historial de conversaciones desde el almacenamiento local
function cargarHistorialConversaciones() {
    const historialConversaciones = localStorage.getItem('historialConversaciones');
    return historialConversaciones ? JSON.parse(historialConversaciones) : [];
}

 
// Función para manejar el envío de mensajes del usuario
async function handleUserMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatWindow = document.getElementById('chatWindow');
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = userInput;
    chatWindow.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');
    chatWindow.appendChild(botMessage);

    const botResponse = await generateResponse(userInput);
    botMessage.textContent = botResponse;

       // Guardar la conversación actual en el historial
    const conversacion = { userInput, botResponse };
    const historialConversaciones = cargarHistorialConversaciones();
    historialConversaciones.push(conversacion);
    guardarHistorialConversaciones(historialConversaciones);


    document.getElementById('userInput').value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
/*_________________________________________________ */
        /*INTALAR LIBRERIA:
        npm install botpress
        biblioteca Botpress en tu proyecto,
         y npm gestionará automáticamente las 
         dependencias necesarias.
 */

         /*letra 8421: conversion binaria, binario a decimal */

         /*USO DE LA LIBRERIA  TensorFlow.js */
         // Importa TensorFlow.js

         // Agrega un evento de clic al botón con el ID 'siguienteBtn'
document.getElementById('Perfil').addEventListener('click', function() {
    // Redirige a la página 'index.html' al hacer clic en el botón
    window.location.href = 'https://breynersmartinez.github.io/User_chatbot.github.io/';
});
