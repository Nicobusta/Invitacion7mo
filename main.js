 // Fecha objetivo: 12 de diciembre a las 22:00
 const targetDate = new Date("2023-12-12T22:00:00").getTime();

 // Actualiza el temporizador cada segundo
 const timer = setInterval(function() {
     const currentDate = new Date().getTime();
     const timeRemaining = targetDate - currentDate;

     if (timeRemaining <= 0) {
         // Si la fecha objetivo ya ha pasado
         clearInterval(timer);
         document.getElementById("countdown").innerHTML = "¡Ha llegado el 12 de diciembre a las 22:00!";
     } else {
         // Calcula días, horas, minutos y segundos restantes
         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

         // Muestra el tiempo restante  
         document.getElementById("dia").innerHTML = `${days}`;
         document.getElementById("horas").innerHTML = `${hours}`;
         document.getElementById("minutos").innerHTML = `${minutes}`;
         document.getElementById("segundos").innerHTML = `${seconds}`;
     }
 }, 1000); // Actualiza cada segundo


 document.getElementById("google-calendar-button").addEventListener("click", function() {
    // Información del evento
    const eventName = "Mi Evento";
    const eventDate = "2023-12-12T22:00:00"; // Fecha y hora del evento en formato ISO 8601
    const eventLocation = "Ubicación del Evento";

    // URL para agregar un evento a Google Calendar
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${eventDate}&details=${encodeURIComponent(eventLocation)}`;

    // Redirecciona al enlace de Google Calendar
    window.open(googleCalendarUrl);
});