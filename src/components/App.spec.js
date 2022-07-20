//import App from './App.js';

import {App,shuffle,isMatch,noMatch} from './App.js';

describe('App', () => {
  const iconos =[
    { id: 'js', image: 'https://simpleicons.org/icons/javascript.svg'},
    { id: 'git', image: 'https://simpleicons.org/icons/git.svg'},
    { id: 'js', image: 'https://simpleicons.org/icons/javascript.svg'},
    { id: 'git', image: 'https://simpleicons.org/icons/git.svg'},
  ];
  const cardBoard = App(iconos);

  it('should render without crashing', () => {
   // const el = App();
    expect(cardBoard instanceof HTMLElement).toBe(true);
  });
  it('deberia crear 4 elementos con .memoryCard class', ()=>{
    expect(cardBoard.querySelectorAll('.memoryCard').length).toBe(4)
  })
});
/*
describe ('App', ()=>{
  it('App deberia ser una función',()=> {
    expect(typeof App).toBe('function');
  });
});*/

describe ('shuffle', ()=>{
  it('shuffle no modifica la cantidad del array',()=> {
    expect(shuffle ([1,2,3,4,5,6]).length).toBe(6);
  });
  it('shuffle modifica el orden del array  ', ()=>{
    const valorInicio = [0,1,2,3,4,5];
    const random = shuffle([...valorInicio]);
    expect(random).not.toBe(valorInicio);
  });
  
})

describe('isMatch',()=>{
  let arrayTest = [{dataset: {card: 'git'}},{dataset:{card:'git'}}];
  it ('Se deberia quedar destapadas dos cartas con el mismo id ',()=>{
  isMatch(arrayTest);
  expect(arrayTest[0]==arrayTest[1].flip).not.toBe('flip');
  })
})


describe('noMatch', ()=>{
let arrayTest;
beforeEach(()=> {
  document.body.innerHTML = '<div data-card="git" class="flip"></div>';
    document.body.innerHTML += '<div data-card="node" class="flip"></div>'
    arrayTest = [...document.getElementsByClassName("flip")];
})
it('Debe dar vuelta a la carta cuando 2 cartas son de diferente id ',()=>{
  noMatch(arrayTest);
  expect(arrayTest[0].style.transform).not.toBe('rotateY(0deg)');
})
});

