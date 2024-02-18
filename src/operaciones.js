export const modificaNick = (nick) => {
    if (typeof document === 'undefined') {
        // Si no hay acceso al DOM, maneja la lógica sin funciones del DOM
        if (!nick || nick.trim() === "") {// Si nick esta vacio
            return null;// Devuelve un valor nulo
        }

        const textoDefinitivo = nick.toUpperCase().trim().replaceAll(' ', "_");// Creo un valor con la siguiente operacion que muestra todo en mayusculas y remplaza los espacios por _
        console.log(textoDefinitivo);// Lo muestro por consola
        return textoDefinitivo;// Me devuelve el valor anterior

    } else {// Si el nick no esta vacio
        const nombreJava = nombreInput.value.trim();// Creo una variable y le meto el siguiente valor
        nombreJava = nombreJava.toUpperCase().replaceAll(' ', "_");// Creo una variable y le meto la siguiente operacion que muestra todo en mayusculas y remplaza los espacios por _

        if (nombreJava == "") {// Si el valor esta vacio 
            return null;// Devuelve un valor nulo
        }
    }
}


export const modificaData = (data) => {

    const Fecha = data.split('T')// Divide la cadena de fecha en dos partes, usando 'T' como separador entre la fecha y la hora.
    
    
    if (Fecha.length >= 2) {
        const FechaPrincipal = Fecha[0].split('/')// Divide la parte de la fecha usando '/' como separador.
        const partesHora = Fecha[1].split(':')// Divide la parte de la hora usando ':' como separador.
        const fechaDia = FechaPrincipal[2]// Extrae las partes individuales de la fecha y la hora.
        const fechaMes = FechaPrincipal[1]// Extrae las partes individuales de la fecha y la hora.
        const fechaAño = FechaPrincipal[0]// Extrae las partes individuales de la fecha y la hora.
        const fechaHoras = partesHora[0]// Extrae las partes individuales de la fecha y la hora.
        const fechaMinutos = partesHora[1]// Extrae las partes individuales de la fecha y la hora.
        const fechaSegundos = partesHora[2]// Extrae las partes individuales de la fecha y la hora.
        
        // Lista de meses
        const meses = 
        [
        'enero', 
        'febrero', 
        'marzo', 
        'abril', 
        'mayo', 
        'junio', 
        'julio', 
        'agosto', 
        'septiembre',
        'octubre', 
        'noviembre', 
        'diciembre'
        ];
        
        const fechaFormateada = `${parseInt(fechaDia)} ${meses[parseInt(fechaMes) - 1]} ${fechaAño.padStart(4, '20')} - ${fechaHoras}:${fechaMinutos}:${fechaSegundos}`;
        // Formatea la fecha en un nuevo formato deseado.

        return fechaFormateada; // No devuleve la fehcaFormateada
    } else {
        return null;// Devuleve null.
    }
}


export const modificaData2 = (objecteDate) => {
    // Obtiene las partes individuales del objeto Date.
    const año = objecteDate.getFullYear().toString().slice(-2);
    const mes = (objecteDate.getMonth() + 1).toString().padStart(2, '0');
    const dia = objecteDate.getDate().toString().padStart(2, '0');
    const horas = objecteDate.getHours().toString().padStart(2, '0');
    const minutos = objecteDate.getMinutes().toString().padStart(2, '0');
    const segundos = objecteDate.getSeconds().toString().padStart(2, '0');

    // Formatea la fecha en el nuevo formato deseado.
    return `${dia}/${mes}/${año}T${horas}:${minutos}:${segundos}`;
};


  export function dias (date) {
    
    const fechahoy = new Date()// Creo una variable llamada fechahoy que recoge la fecha de hoy

    const fecha = new Date(date)// Creo una variable fecha que recoge la fecha de hoy y la guarda en date
  
    if (isNaN(fecha)) {// Si el valor isNAN es un numero devuelve devulve true, si es un numero devuelve true
        // y la variable fecha se esta comprobando en este if
        return {// Nos devulve un valor
          error: true,// Si el error es true nos saldra un mensaje
          missatge: 'El format no és correcte'// Nos muestra un mensaje
        }
      }


    const dias = Math.floor(Math.abs(fechahoy.getTime() - fecha.getTime()) / (1000 * 3600 * 24))
    // Creo una variable dias que guarda los siguientes datos:
    //Math.floor que es una función que redondea hacia abajo un número decimal al numero entero mas cercano.
    //Math.abs que devuelve el valor absoluto de un numero, eliminando cualquier signo negativo.
    //fechahoy y fecha que devuelve el valor numerico correspondiente al tiempo representado por la variable Date
    // /(1000 * 3600 * 24) Se hace una division la diferencia en milisegundos por el numero de milisegundos en un dia para obtener la diferencia en dias.

    return dias // Devuelve el valor dias
  }

