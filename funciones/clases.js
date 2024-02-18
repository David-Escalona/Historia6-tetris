import { models } from "../piezas/models.js"

export class ModeloPieza { // Exporto una clase llamada ModeloPieza
  constructor (modelo = 0, x = 0, y = 0, angulo = 0) { // Esto es un constructor de la clase MP que recibe cuatro parametros, modelo,x,y,angulo tendran el valor 0
    this.modelo = modelo // Asigno los valores pasados por el constructor
    this.angulo = angulo // Asigno los valores pasados por el constructor
    this.matriz = models[this.modelo].matriz[this.angulo] // Accedo a la matriz correspondiente del modelo, modelo es un objeto con informacion de un modelo y matrizy matriz es una propiedad de cada modelo
    this.x = x // Asigno los valores pasados por el constructor
    this.y = y // Asigno los valores pasados por el constructor
    this.longitud = this.matriz[0].length // Calculo la longitud de la matriz con su cadena de caracteres
    this.altura = this.matriz.length // Calculo la altura de la matriz con su cadena de caracteres
  }
  
    girar () { // Creo una funcion llamada girar
      this.angulo = this.angulo + 1 // El valor de angulo se ve incrementado en 1
      if (this.angulo > 3) { // Si el valor angulo es superior a 3 (0,90,180,270 grados)
        this.angulo = 0 // El valor de angulo se restablece a 0
      }
      this.matriz = models[this.modelo].matriz[this.angulo] // Este valor matriz accede al model y busca el modelo de la pieza y luego accede a su matriz correspondiente
      this.longitud = this.matriz[0].length // Calculo la longitud de la matriz con su cadena de caracteres
      this.altura = this.matriz.length // Calculo la altura de la matriz con su cadena de caracteres
    }
}

