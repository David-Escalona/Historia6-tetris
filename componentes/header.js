import { home } from "../vistas/home.js"
import { vistaRanking } from "../vistas/vistaRanking.js"
import { juego } from "../vistas/juego.js"

export const header = {
    template:
      `
      <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid p-3 bg-dark">
          <div class="mx-auto">
            <button id="Home" class="btn btn-success mx-2 fs-4">HOME</button>
            <button id="vistaRanking" class="btn btn-success mx-2 fs-4">RANKING</button>
            <button id="Juego" class="btn btn-success mx-2 fs-4">JUEGO</button>
          </div>
        </div>
      </nav>
      `,
    script: () => {
      document.querySelector('#Home').addEventListener('click', () => {
        document.querySelector('main').innerHTML = home.template
        home.script()
      })
  
      document.querySelector('#vistaRanking').addEventListener('click', () => {
        document.querySelector('main').innerHTML = vistaRanking.template
        vistaRanking.script()
      })
  
      document.querySelector('#Juego').addEventListener('click', () => {
        document.querySelector('main').innerHTML = juego.template
        juego.script()
      })
    }
  }