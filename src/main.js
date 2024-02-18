import './style.css'
import { header } from '../componentes/header.js'
import { home } from '../vistas/home.js'

document.querySelector('header').innerHTML = header.template
header.script()

document.querySelector('main').innerHTML = home.template
home.script()


