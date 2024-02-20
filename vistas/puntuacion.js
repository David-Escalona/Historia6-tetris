// Variable para almacenar la puntuación
let puntuacion = 0;

// Función para incrementar la puntuación cuando la pieza se mueve
export function incrementarPuntuacionMovimiento() {
    puntuacion += 10;
}

// Función para incrementar la puntuación cuando la pieza gira
export function incrementarPuntuacionGiro() {
    puntuacion += 20;
}

// Función para incrementar la puntuación cuando la pieza llega al fondo
export function incrementarPuntuacionLlegada() {
    puntuacion += 50;
}

// Ejemplo de cómo llamar a las funciones cuando suceden los eventos
// Supongamos que aquí tendrías el código que detecta los movimientos, giros y llegadas de la pieza.

// Ejemplo de llamada cuando la pieza se mueve a la derecha
incrementarPuntuacionMovimiento();

// Ejemplo de llamada cuando la pieza se gira
incrementarPuntuacionGiro();

// Ejemplo de llamada cuando la pieza llega al fondo
incrementarPuntuacionLlegada();

// Finalmente, podrías mostrar la puntuación en la interfaz como desees
console.log("Puntuación actual: " + puntuacion);
