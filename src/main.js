import App from './components/App.js';


document.getElementById('root').appendChild(App());

let primeraPantalla = document.getElementById('primeraPantalla'); 
let segundaPantalla = document.getElementById('segundaPantalla');
let divBoton = document.getElementById("div-boton")

let botonAJugar = document.getElementById('botonAJugar')
let jugar = document.getElementById('jugar')
let botonVolver = document.getElementById('volver')

botonAJugar.addEventListener('click' , ()=>{
  let saludoUsuario = document.getElementById('saludoUsuario')
  let nombreUsuario = document.getElementById('nombreUsuario').value
  if (nombreUsuario !== '') {
    saludoUsuario.innerHTML = `Hola ${nombreUsuario.toUpperCase()}!`
    primeraPantalla.style.display = 'none'
    segundaPantalla.style.display = 'block'
    } else {
       alert('No ingresaste tu nombre :D!')
  }
})

jugar.addEventListener('click' , ()=>{
 divBoton.style.display = 'none';
 segundaPantalla.style.display = 'block';
})

botonVolver.addEventListener("click", () => {
  location.reload();
})



