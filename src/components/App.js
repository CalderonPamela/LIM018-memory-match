//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

//-----Inicio de Memory Match
//Prueba de rama compartida para la funcion flip match


import webdev from '../data/webdev/webdev.js';
  
  const itemsWebdev = [...webdev.items,...webdev.items];
  
  // Barajar cartas
   function shuffle(array){
    return array.sort(()=> { return Math.random()-0.5});   
  }
  const sortDobleItem = shuffle(itemsWebdev)
  console.log(sortDobleItem)
  
  const App = (iconos=sortDobleItem) => {
    
  //Saludo Usuario
  //document.getElementById('botonAJugar').addEventListener('click',saludoUsuario);    
  //botonAJugar.addEventListener('click',saludoUsuario);    

  const cardBoard = document.createElement('div');
  cardBoard.className = 'cardBoard';
  //el.textContent = 'Hola mundo!';
   
  iconos.forEach(item=>{
  const memoryCard = document.createElement("div");
  memoryCard.className = 'memoryCard'
  memoryCard.setAttribute('data-card',`${item.id}`);
  cardBoard.appendChild(memoryCard);

  const imageIconos = document.createElement("img");
  imageIconos.className = "front-face";
  imageIconos.src = `${item.image}`;
  imageIconos.style.backgroundColor = item.bgColor
  imageIconos.alt = item.id
  memoryCard.appendChild(imageIconos);

  const imageCodigo = document.createElement("img");
  imageCodigo.className = "back-face";
  imageCodigo.src = './imagenes/carta tapada.jpg';
  memoryCard.appendChild(imageCodigo);

  memoryCard.addEventListener('click', flipCards)

 }); 

  return cardBoard;
  
}
 
function flipCards(e) {
  
  e.currentTarget.style.transform = "rotateY(180deg)";
  e.currentTarget.classList.add('flip')
    //clickCartas.push(e.currentTarget)
    let clickCartas = [...document.getElementsByClassName('flip')];
    //console.log(clickCartas)
   
  if( clickCartas.length === 2) {
    isMatch(clickCartas);
    noMatch(clickCartas);
    clickCartas.forEach((item) => item.classList.remove('flip')); 
  }
}

function isMatch(clickCartas){
  if (clickCartas[0].dataset.card == clickCartas[1].dataset.card){
    console.log('hiciste match')
   // setTimeout(match,700)
  }
}

function noMatch(clickCartas){
  setTimeout(() => {
      if (clickCartas[0].dataset.card !== clickCartas[1].dataset.card){
        console.log('no hiciste match')
          clickCartas[0].style.transform = "rotateY(0deg)";
          clickCartas[1].style.transform = "rotateY(0deg)";
          }
        },800);
     }









  // let clickCartas = []

/*
    function flip(e) {
      
      let clickCartas = [...document.getElementsByClassName('flip')];
      const clickCartasLength = clickCartas.length

    
      if( clickCartasLength === 2) {
        memoryCard.classList.add('flip')
      clickCartas.push(e.currentTarget)
        isMatch(clickCartas)
        noMatch(clickCartas)
        clickCartas.forEach((memoryCard) =>memoryCard.classlist.remove('flip'));
      }
    }

    function isMatch(clickCartas){
        if (clickCartas[0].dataset.card === clickCartas[1].dataset.card){
          console.log('hiciste match')
          setTimeout(match,700)
  
        }
      }


  function noMatch(clickCartas){
    setTimeout(() => {
        if (clickCartas[0].dataset.card !== clickCartas[1].dataset.card){
          console.log('no hiciste match')

            clickCartas[0].classList.remove('flip')
            clickCartas[1].classList.remove('flip')
            
            }
          },800);
       }
*/
   
export default App;
export {App,shuffle,isMatch,noMatch};









/*


//Para acceder al modal
const modal =document.getElementById('modal');
//Para acceder al boton de volver a jugar
const reset = document.querySelector('.reset-btn')
//Para acceder al boton de Play Again
const playAgain = document.querySelector('.play-again-btn')


function AddStats(){
  const stats = document.querySelector('.modal-content')
  for (let i = 1; i<=3; i++){
    const statsElement = document.createElement('p')
    statsElement.classList.add('stats');
    stats.appendChild(statsElement);
  }
  let p = stats.querySelectorAll('p.stats');
  p[0].innerHTML = 'Time to complete:' + minutes + 'Minutes and'+ seconds + 'Seconds';
  p[1].innerHTML = 'Moves Taken'+moves;
  p[2].innerHTML = 'Your Star Rating is:'+startCount + 'out of 3';
}
function displayModal(){
    const modalClose = document.getElementsByClassName('close')[0]
    modalClose.style.display = 'block'
    modalClose.onclick = function(){
      modalClose.style.display ='none'  
    };
    window.onclick = function(event){
      if(event.target == modal){
        modal.style.display = 'none'
      }
    };
  }
*/