export function buscador(texto){ // Exporto una funcion llamada buscador con el parametro texto

    const partidas = [ // Creo un array de partidas con los datos de las personas que participasn
      {nick: "Messi", puntuacion: 10, fecha: "13 ABRIL 2023" },
      {nick: "Cristiano", puntuacion: 600, fecha: "13 FEBRERO 2023" },
      {nick: "Rubiales", puntuacion: 888, fecha: "1 ENERO 2023" }
    ];
  
    const coincidencias = partidas.filter(partida => partida.nick.toLowerCase().includes(texto.toLowerCase())) 
    // Creo una variable llamada coincidencias que tendra:
    // partidas.filter que saca los datos del array y los filtra 
    // partida.nick selecciona del array el nick del participante .toLowerCase() hara que da igual si lo escribes en minusculas o mayusculas
    // .includes(texto.toLowerCase) verificara si en el texto esta escrito el nick en minusculas

    return coincidencias; // Devulevo las coincidencias
}
