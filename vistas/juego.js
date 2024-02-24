import { panel } from "../piezas/panel.js";

export const juego = {
    template: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Prototipo</title>
            <!-- bootstrap -->
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                crossorigin="anonymous"
            />
            <!-- fonts -->
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=VT323&display=swap"
                rel="stylesheet"
            />
            <!-- icons -->
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
            />

            <style>
                body {
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-image: url("img/fondo.jpg");
                    font-family: "VT323", monospace;
                    font-size: 25px;
                }
            </style>
            <link rel="stylesheet" href="src/style.css"/>
        </head>

        <div id="juego">
            <div class="row">
                <div class="col-4 d-flex flex-column justify-content-end align-items-center p-5">
                    <h4 class="text-light">Puntos: <span id="puntuacion">0</span></h4>
                    <h4 class="text-light">Tiempo: <span>10 Minutos</span></h4>
                    <h4 class="text-light">Lineas: <span>5</span></h4>
                    <h4 class="text-light">Puntos: <span>777777</span></h4>
                </div>
                <!-- Panel central -->
                <div class="col-4 d-flex justify-content-center">
                    <div id="panel" class="p-5">
                        <div class="fila d-flex justify-content-center">
                        </div>
                    </div>
                    <div
                        class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
                    >
                        <div id="piezaSiguiente">
                            <h4>Pieza siguiente:</h4>
                            <div class="piezaSiguiente m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                    <div class="celda bg-dark border-secondary">x</div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                    <div class="celda bg-dark border-secondary">x</div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                </div>
                            </div>
                            <div class="piezaSiguiente m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                    <div class="celda bg-dark border-secondary">x</div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                    <div class="celda bg-dark border-secondary">x</div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                </div>
                            </div>
                            <div class="piezaSiguiente m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                    <div class="celda bg-dark border-secondary">x</div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                    <div class="celda bg-dark border-secondary">x</div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="piezaGuardada">
                            <h4>Pieza guardada:</h4>
                            <div class="piezaGuardada">
                                <div class="piezaSiguiente m-2">
                                    <div class="fila d-flex justify-content-center">
                                        <div class="celda bg-warning bg-gradient border-dark">x</div>
                                        <div class="celda bg-warning border-secondary">x</div>
                                    </div>
                                    <div class="fila d-flex justify-content-center">
                                        <div class="celda bg-warning bg-gradient border-dark">x</div>
                                        <div class="celda bg-warning border-secondary">x</div>
                                    </div>
                                    <button id="terminarPartida" class="btn btn-info mt-3">Terminar Partida</button>
                                    <div id="nombreJugadorForm" class="d-none">
                                        <input type="text" id="nombreJugador" placeholder="Ingresa tu nombre">
                                        <button id="enviarNombre" class="btn btn-primary">Enviar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,

        script: () => {
            panel.crearNuevaPieza();
            panel.insertarPieza();
            panel.pintaPanel();
            panel.controlTeclas();
            panel.iniciarMovimiento();
    
            const puntuacionSpan = document.getElementById("puntuacion");
            let puntuacionActual = 0;
    
            function actualizarPuntuacion() {
                puntuacionSpan.textContent = puntuacionActual;
            }
    
            const botonTerminarPartida = document.getElementById("terminarPartida");
    
            botonTerminarPartida.addEventListener("click", () => {
                const confirmacion = confirm("¿Deseas terminar la partida y reiniciar?");
                if (confirmacion) {
                    reiniciarPartida();
                }
            });
    
            function reiniciarPartida() {
                alert("Partida reiniciada");
                window.location.reload();
            }
    
            // Event listener para detectar movimientos laterales de la ficha
            document.addEventListener("keydown", (event) => {
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                    // Incrementar la puntuación en 10 cada vez que se detecte un movimiento lateral
                    puntuacionActual += 10;
                    actualizarPuntuacion();
                }
            });
        }
};

