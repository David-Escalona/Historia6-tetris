// Función para finalizar la partida cuando la pieza llega al fondo del panel
export function finalizarPartida() {
    detenerJuego(); // Detener el juego (puedes implementar esta función según tus necesidades)

    // Mostrar un mensaje al jugador
    alert("¡Partida finalizada! ¿Deseas guardar la partida?");

    // Si el jugador decide guardar la partida, llamar a la función para registrar la partida
    if (confirm("¿Deseas guardar la partida?")) {
        registrarPartida(); // Llamar a la función para registrar la partida
    }
}

// Función para registrar la partida
export function registrarPartida() {
    // Aquí puedes implementar la lógica para guardar la partida, por ejemplo, enviarla al servidor
    // También puedes interactuar con el DOM para mostrar un formulario de guardado o cualquier otra interfaz
    console.log("Partida guardada correctamente");
}
