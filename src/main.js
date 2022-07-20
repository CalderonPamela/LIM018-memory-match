import App from './components/App.js';

document.getElementById('root').appendChild(App());


let botonAJugar = document.getElementById('botonAJugar')

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


let primeraPantalla = document.getElementById('primeraPantalla'); 
let segundaPantalla = document.getElementById('segundaPantalla');
let divBoton = document.getElementById("div-boton")


let jugar = document.getElementById('jugar')
let botonVolver = document.getElementById('volver')

jugar.addEventListener('click' , ()=>{
 divBoton.style.display = 'none';
 segundaPantalla.style.display = 'block';
})

botonVolver.addEventListener('click' , ()=>{
  vModal.style.display = 'none';
  segundaPantalla.style.display = 'none';
  primeraPantalla.style.display = 'block';
})


/*const saludoUsuario = () =>{
  //let botonAJugar = document.getElementById('botonAjugar')
    let nombreUsuario = document.getElementById('nombreUsuario').value
    let saludoUsuario = document.getElementById('saludoUsuario')

    if (nombreUsuario !== '') {
      saludoUsuario.innerHTML = `Hola ${nombreUsuario.toUpperCase()}!`
      let primeraPantalla = document.getElementById('primeraPantalla');
      let segundaPantalla = document.getElementById('segundaPantalla');
      primeraPantalla.style.display = 'none'
      segundaPantalla.style.display = 'block'
    } else {
      alert('No ingresaste tu nombre :D!')
    }
   return 
}

  document.getElementById('jugar').addEventListener("click", ()=>{   
    document.getElementById("div-boton").style.display = 'none';
    //document.getElementById('primeraPantalla').style.display = 'none';
    document.getElementById('segundaPantalla').style.display = 'block';
  })

const match= () =>{
  let classMatch = document.getElementsByClassName('flip')
  if(classMatch.length === 20){
    let vModal = document.getElementById('vModal');
    let primeraPantalla = document.getElementById('primeraPantalla');
    let segundaPantalla = document.getElementById('segundaPantalla');
    vModal.style.display = 'block';
  

let botonVolver = document.getElementById('volver');
botonVolver.addEventListener('click', ()=>{
  vModal.style.display = 'none';
  segundaPantalla.style.display = 'none';
  primeraPantalla.style.display = 'block';
 })
}
};*/
 
 
   