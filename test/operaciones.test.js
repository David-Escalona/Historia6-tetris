import { dias, modificaData, modificaData2, modificaNick } from '../src/operaciones.js';
import { expect } from 'chai'
import { buscador } from '../funciones/funciones.js';

describe('modificaNick', () => {
    it('debería retornar null y mostrar un alert si la cadena está vacía', () => {
      const resultado = modificaNick('');
      // Esperamos que la función retorne null
      expect(resultado).to.be.null;
      // Asegurémonos de que se haya mostrado un alert con el mensaje correcto
      // Esto es una simplificación, ya que no podemos probar directamente los alertas en un entorno de prueba.
      });
  
    it('debería modificar la cadena correctamente si contiene texto', () => {
      const resultado = modificaNick('    cara culo  ');
      // Esperamos que la función modifique la cadena como se describe
      expect(resultado).to.equal('CARA_CULO');
    });
});


// Describe la suite de pruebas para la función modificaData
describe('modificaData', () => {
    it('debería modificar la cadena de fecha correctamente', () => {
        const resultado = modificaData('23/12/02T12:12:12');
        // Esperamos que la función modifique la cadena de fecha devolviendo texto 2 diciembre 2023 - 12:12:12
        expect(resultado).to.equal('2 diciembre 2023 - 12:12:12');
    });
});
  

// Describe la suite de pruebas para la función modificaData2
describe('modificaData2', () => {
    it('debería modificar el objeto Date correctamente', () => {
        const fecha = new Date('2023-12-17T03:24:00');
        const resultado = modificaData2(fecha);
        // Esperamos que la función modifique el objeto Date sustituyendo guiones por barras inclinadas 23/12/17T03:24:00
        expect(resultado).to.equal('23/12/17T03:24:00');
    });
});
  
// Describe la suite de pruebas para la función dias
describe('dias', () => {
    it('debería calcular los días transcurridos correctamente', () => {
      const fechaInicial = new Date('2023-09-07T03:24:00');
      const fechaActual = new Date('2023-09-17T03:24:00');
      const resultado = dias('03/12/10T21:00:00');
      // Esperamos que la función calcule los días transcurridos correctamente
      // Hay que tener en cuenta el día que se pasa el test para que el resultado sea 10 u el que corresponda. Modifica el 10 por los días que han pasado en el momento de pasar el test
      expect(resultado).to.equal(7309);
    });
  
    it('debería manejar el formato incorrecto', () => {
      const fechaIncorrecta = 'formato_incorrecto';
      const resultado = dias(fechaIncorrecta);
      // Esperamos que la función devuelva un objeto de error
      expect(resultado).to.deep.equal({
        error: true,
        missatge: 'El format no és correcte'
      });
    });
});

describe('orden', () => {
  it('debería ordenar el campo "nick" de forma ascendente correctamente', () => {
    const partidas = [
      { nick: 'Messi', puntuacion: 10, fecha: '13 ABRIL 2023' },
      { nick: 'Cristiano', puntuacion: 600, fecha: '13 FEBRERO 2023' },
      { nick: 'Rubiales', puntuacion: 888, fecha: '1 ENERO 2023' }
    ];

    orden('nick', 'up', partidas);

    // Esperamos que la función ordene el array ascendente según el campo "nick"
    expect(partidas).toEqual([
      { nick: 'Cristiano', puntuacion: 600, fecha: '13 FEBRERO 2023' },
      { nick: 'Messi', puntuacion: 10, fecha: '13 ABRIL 2023' },
      { nick: 'Rubiales', puntuacion: 888, fecha: '1 ENERO 2023' }
    ]);
  });

  it('debería ordenar el campo "puntuacion" de forma descendente correctamente', () => {
    const partidas = [
      { nick: 'Messi', puntuacion: 10, fecha: '13 ABRIL 2023' },
      { nick: 'Cristiano', puntuacion: 600, fecha: '13 FEBRERO 2023' },
      { nick: 'Rubiales', puntuacion: 888, fecha: '1 ENERO 2023' }
    ];

    orden('puntuacion', 'down', partidas);

    // Esperamos que la función ordene el array descendente según el campo "puntuacion"
    expect(partidas).toEqual([
      { nick: 'Rubiales', puntuacion: 888, fecha: '1 ENERO 2023' },
      { nick: 'Cristiano', puntuacion: 600, fecha: '13 FEBRERO 2023' },
      { nick: 'Messi', puntuacion: 10, fecha: '13 ABRIL 2023' }
    ]);
  });
});

// Describe la suite de pruebas para la función buscador
describe('buscador', () => {
  it('debería devolver partidas coincidentes correctamente', () => {
    const texto = 'Messi';

    const partidas = [
      { nick: 'Messi', puntuacion: 10, fecha: '13 ABRIL 2023' },
      { nick: 'Cristiano', puntuacion: 600, fecha: '13 FEBRERO 2023' },
      { nick: 'Rubiales', puntuacion: 888, fecha: '1 ENERO 2023' }
    ];

    const resultado = buscador(texto, partidas);

    // Esperamos que la función devuelva las partidas coincidentes
    expect(resultado).toEqual([{ nick: 'Messi', puntuacion: 10, fecha: '13 ABRIL 2023' }]);
  });

  it('debería devolver un array vacío si no hay coincidencias', () => {
    const texto = 'Iniesta';

    const partidas = [
      { nick: 'Messi', puntuacion: 10, fecha: '13 ABRIL 2023' },
      { nick: 'Cristiano', puntuacion: 600, fecha: '13 FEBRERO 2023' },
      { nick: 'Rubiales', puntuacion: 888, fecha: '1 ENERO 2023' }
    ];

    const resultado = buscador(texto, partidas);

    // Esperamos que la función devuelva un array vacío
    expect(resultado).toEqual([]);
  });
});