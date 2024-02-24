import { models } from "./models.js";
import { ModeloPieza } from "../funciones/clases.js";

export const panel = { // Exporto un objeto constante llamado panel
    matriz: [ // Esto es una propiedad de un objeto que representa un esquema del diseño del tetris
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
    ],

    pintaPanel: () => { // Esto es una funcion que se encarga de pintar el modelo
        let html = '' // Se inicializa una cadena de texto html vacia

        panel.matriz.forEach((element, index) => { // Se inicia un ciclo con un forEach para repetir sobre cada celda de la fila
            html+='<div class="d-flex m-0 col-12">' // En la variable html me inyecta este codigo
            if(index!=0 && index!=21){ // Si la fila index no es igual a 0 o 21
                element.forEach((celda, index) => { // Se repite sobre cada celda actual
                    if(index!=0 && index!=11){ // Si la fila no es igual a 0 o 11
                        if(celda==1){ // Si la celda tiene el primer valor
                            html+='<div style=" width: 40px;  height: 40px;"  class="border border-light-subtle m-0 col-1 bg-danger"></div>' // En la variable html me agrega esta linea
                        }else{ // Si no
                        html+='<div style=" width: 40px;  height: 40px;"  class="border border-light-subtle m-0 col-1"></div>' // En la variable html me agrega esta linea
                        }
                    }
                });
            }
            html+='</div>' // Enla variable html se cierra el div 
        });
        document.querySelector('#panel').innerHTML = html // Selecciono el id panel y le meto el codigo html de la variable html         
    },

    borrarPieza: () => { // Esto es una funcion que se encarga de borrar las piezas
        if (panel.nuevaPieza) { // Si existe una variable panel.nuevaPieza
          for (let i = 0; i < panel.nuevaPieza.altura; i++) { // Entro en un bucle y le creo una variable i que se incia en 0, y es menor a la altura de la pieza panel.nuevaPieza.altura y se incremeta su valor si se cumple
            for (let x = 0; x < panel.nuevaPieza.longitud; x++) { // Entro en otro bucle que me crea la variable x que se incia en 0 y sera menor a la longitud que panel.nuevapieza.longitud y si se cumple se incrementa su valor
              const elemento = panel.nuevaPieza.matriz[i][x]; // Creo una variable constante llamada elemento que acedera a la posicion i, x
              if (elemento) { // Si la variable elemento existe
                panel.matriz[i + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = 0; // Si en la posicion y,x alguna algun elemento este mismo obtendra el valor 0
              }
            }
          }
          panel.pintaPanel(); // Llamo a la funcion panel.pintaPanel
        }
      },
      
      crearNuevaPieza: () => { // Esto es una funcion que se encarga de crear una nueva pieza
        const modelo = Math.floor(Math.random() * 7); // Creo un valor aleatorio llamado modelo que recibe un numero aleatorio entre el 0 y 6 
        
        const anchura = models[modelo].matriz[0].length; // Creo un valor aleatorio llamado anchura que recibe una anchura aleatoriamente
        
        let anchuraAleatorio; // Creo una nueva variable llamada aleatorio
        switch (anchura) { // Utilizo un switch para determinar las posiciones aleatorias y le paso un valor anchura
          case 1: // En el caso 1
            anchuraAleatorio = Math.floor(Math.random() * 10); // El valor anchuraAleatorio recibira un numero aleatorio entre el 0 y 9
            break; // Si se cumple el caso 1 se sale del switch
          case 2: // En el caso 2
            anchuraAleatorio = Math.floor(Math.random() * 9); // El valor anchuraAleatorio recibira un numero aleatorio entre el 0 y 8
            break; // Si se cumple el caso 2 se sale del switch
          case 3: // En el caso 3
            anchuraAleatorio = Math.floor(Math.random() * 8); // El valor anchuraAleatorio recibira un numero aleatorio entre el 0 y 7
            break; // Si se cumple el caso 3 se sale del switch 
          case 4: // En el caso 4
            anchuraAleatorio = Math.floor(Math.random() * 7); // El valor anchuraAleatorio recibira un numero aleatorio entre el 0 y 6
            break; // Si se cumple el caso 4 se sale del switch
            // Esto determinara que la pieza no sobresalga de la base de matriz
        }
        
        const piezas = new ModeloPieza(modelo, anchuraAleatorio, 1, 0); // Creo la variable piezas que tendra una instancia de clase ModeloPieza con los valores de modelo y anchuraAleatorio
        // El valor 1,0 se debe a que la anchura del eje X empezara en la posicion 1 y la anchura del eje Y empezara en la posicion 0 para comenzar desde arriba de la base matriz
        panel.nuevaPieza = piezas; // En la variable panel.nuevaPieza se guarda los datos de piezas
        return piezas; // Devuelvo el valor de piezas
       
      },

      insertarPieza: () => { // Esto es una funcion que se encarga de insertarPieza

        let i; // Creo las variable i 
        let x; // Creo las variable x

        for(i=0; i<panel.nuevaPieza.altura; i++){ // Esto es un bucle que inica mientras i sea igual a 0 y continua mientras i sea menor a la altura de nueva pieza
          for(x=0; x<panel.nuevaPieza.longitud; x++){ // Esto es un bucle que inica mientras x sea igual a 0 y continua mientras x sea menor a la altura de nueva pieza
            const elemento = panel.nuevaPieza.matriz[i][x]; // Se crea una variable llamada elemento que guardara la posicion de i,x
            if(elemento){ // Si elemento existe
              panel.matriz[i + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = elemento; // Si la celda no esta vacia se asignara su valor a la matriz i,x
            }
          }
        }
        
        panel.pintaPanel(); // Lamo a la funcion pintaPanel.
      },

      iniciarMovimiento: () => { // Esto es una funcion que se encarga de iniciarMovimiento
        setInterval(panel.bajar, 1000); // setInterval llama a panel.bajar cada 1.000 milisegundos
    },

    controlTeclas: () => { // Esto es una funcion que se encarga de controlarTeclas
        document.addEventListener('keydown', (event) => { // Añado un evento escucha a keydown lo que significa que se tiene en cuentas las teclas seleccionadas
            switch(event.key) { // En funcion de la tecla seleccionada hara un caso u otro
                case 'ArrowRight': // Caso Derecha
                    panel.moverDra(); // Mueve la pieza a la derecha
                    break; // Si se cumple se sale del switch
                case 'ArrowLeft': // Caso Derecha
                    panel.moverIzq(); // Mueve la pieza a la izquierda
                    break; // Si se cumple se sale del switch
                case 'ArrowDown': // Caso Abajo
                    panel.bajar(); // Mueve la pieza para abajo
                    break; // Si se cumple se sale del switch
                case 'ArrowUp': // Caso Arriba
                    panel.girar(); // Se gira la pieza
                    break; // Si se cumple se sale del switch
            }
        });
    },

    moverDra: () => { // Esto es una funcion que se encarga de mover la pieza a derecha
        panel.borrarPieza(); // LLamo a esta funcion
        panel.nuevaPieza.x++; // LLamo a esta funcion para desplazar la pieza 1 posicion a la derecha
        panel.insertarPieza(); // LLamo a esta funcion
        panel.pintaPanel(); // LLamo a esta funcion
    },

    moverIzq: () => { // Esto es una funcion que se encarga de mover la pieza a izquierda
        panel.borrarPieza(); // LLamo a esta funcion
        panel.nuevaPieza.x--; // LLamo a esta funcion para desplazar la pieza 1 posicion a la izquierda
        panel.insertarPieza(); // LLamo a esta funcion
        panel.pintaPanel(); // LLamo a esta funcion
    },

    bajar: () => {
      panel.borrarPieza();
      panel.nuevaPieza.y++;

      if (!panel.esPiezaValida()) {
          // Si la nueva posición de la pieza no es válida, revertir el movimiento y crear una nueva pieza
          panel.nuevaPieza.y--;
          panel.insertarPieza();
          panel.crearNuevaPieza();
      } else {
          panel.insertarPieza();
          panel.pintaPanel();
      }
  },

  esPiezaValida: () => {
      // Verificar si la pieza está dentro de los límites del panel
      for (let i = 0; i < panel.nuevaPieza.altura; i++) {
          for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
              const elemento = panel.nuevaPieza.matriz[i][x];
              if (elemento) {
                  const fila = i + panel.nuevaPieza.y;
                  const columna = x + panel.nuevaPieza.x;
                  // Verificar si la posición está fuera del panel o si colisiona con otra pieza
                  if (fila < 0 || fila >= panel.matriz.length || columna < 0 || columna >= panel.matriz[0].length || panel.matriz[fila][columna]) {
                      return false;
                  }
              }
          }
      }
      return true;
  },
  

    girar: () => { // Esto es una funcion que se encarga de girar piezas
        panel.nuevaPieza.girar(); // LLamo a esta funcion para girar la pieza
    }
};