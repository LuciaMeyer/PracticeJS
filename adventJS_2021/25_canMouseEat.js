// https://adventjs.dev/

/* ---------->>> Adventjs #25.js <<<----------
Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

Un espacio vacío es que no hay nada
Una m es el ratón
Un * es la comida
Vamos a ver unos ejemplos:
*/
const room = [
  [' ', ' ', ' '], // 
  [' ', ' ', 'm'], // 1-2
  [' ', ' ', '*']  // 2-2
]
/*
canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false
*/
const room2 = [
  ['*', ' ', ' ', ' '], //         0-1
  [' ', 'm', '*', ' '], //    1-0| 1-1 |1-2
  [' ', ' ', ' ', ' '], //         2-1 
  [' ', ' ', ' ', '*']  //         3-3
]
/*
canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
*/

const canMouseEat = (direction, game) => {
  let posM;
  for (let i = 0; i < game.length; i++) {
      let m = game[i].find(e => e === 'm')
      if(m) posM = { x: game[i].indexOf(m), y: i }
  }
  if (direction === 'up' && posM.y !== 0) posM.y = posM.y - 1;
  if (direction === 'down' && posM.y !== game.length - 1) posM.y = posM.y + 1;
  if (direction === 'left' && posM.x !== 0) posM.x = posM.x - 1;
  if (direction === 'right' && posM.x !== game[0].length - 1) posM.x = posM.x + 1;
  if (game[posM.y][posM.x] === '*') return true;
  return false;
}

console.log(canMouseEat('up',    room))   // false
console.log(canMouseEat('down',  room) )  // true
console.log(canMouseEat('right', room))   // false
console.log(canMouseEat('left',  room))   // false
console.log(canMouseEat('up',    room2) )  // false
console.log(canMouseEat('down',  room2) )  // false
console.log(canMouseEat('right', room2) )  // true
console.log(canMouseEat('left',  room2))   // false

/* OTRA FORMA
const canMouseEat = (direction, game) => {
  let posM = [];
  let dir;
  for (let i = 0; i < game.length; i++) {
    let m = game[i].find(e => e === 'm')
    if(m) posM.push( i , game[i].indexOf(m) )
    for (let j = 0; j < game[i].length; j++) {
      if(game[i][j] === m) {
        if(posM[0] !== 0 && game[i-1][j] === '*') dir = 'up';
        if(posM[0] !== game.length-1 && game[i+1][j]=== '*') dir = 'down';
        if(posM[1] !== game[i].length-1 && game[i][j+1] === '*') dir = 'right';
        if(posM[1] !== 0 && game[i][j-1] === '*') dir = 'left';
      }     
    }     
  }
  return dir === direction;
};
*/
