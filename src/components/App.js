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
    return array.sort(()=> { 
      return Math.random()-0.5});   
    }
  const sortDobleItem = shuffle(itemsWebdev)
  console.log(sortDobleItem)
  
  const App = (iconos=sortDobleItem) => {
  const cardBoard = document.createElement('div');
  cardBoard.className = 'cardBoard';
   
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
    
let score = 0;
let mostrarScore = document.getElementById('score'); 
    
function isMatch(clickCartas){
  if (clickCartas[0].dataset.card == clickCartas[1].dataset.card){
    console.log('hiciste match')
      score ++;
      mostrarScore.innerHTML = `Puntuación:${score}`;
      if (score == 2){
      mostrarScore.innerHTML = `Puntuación: ${score}`
      let vModal = document.getElementById('vModal');
      vModal.style.display = 'block';
 }

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

   
export default App;
export {App,shuffle,isMatch,noMatch};



/*let score = 0;
let mostrarScore = document.getElementById('score');

score ++;
mostrarScore.innerHTML = `Puntuación:${score}`;
 if (score == 2){
   mostrarScore.innerHTML = `Puntuación: ${score}`
  // mostrarTiempo.innerHTML = `Tiempo: ${timerInicial - timer} segundos`;
   let vModal = document.getElementById('vModal');
   vModal.style.display = 'block';
 }*/





