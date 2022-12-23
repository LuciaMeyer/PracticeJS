

// https://adventjs.dev/

/* ---------->>> Adventjs #24.js <<<----------
El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar los árboles que ya creamos en el reto 22.

Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas. Aquí tienes unos ejemplos:
*/
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}
/*
checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true
checkIsSameTree(tree, tree) // true

El cuñado 🦹‍♂️, que se las sabe todas, me ha dicho que tenga cuidado porque el truco del JSON.stringify puede no funcionar... ya que los árboles pueden ser el mismo pero el orden de representación de las ramas izquierda y derecha puede ser inversa...
*/

import { countDecorations } from './22_countDecorations';

const checkIsSameTree = (treeA, treeB) =>{
  return countDecorations(treeA) === countDecorations(treeB)
};

/* PARA QUE PASEN LOS TEST EN LA PÁGINA:
const checkIsSameTree = (treeA, treeB) =>{

  const countDecorations = bigTree => {
    if(!bigTree.left&& !bigTree.right) return bigTree.value;
    if(!bigTree.left) return bigTree.value + countDecorations(bigTree.right);
    if(!bigTree.right) return bigTree.value + countDecorations(bigTree.left);
    return bigTree.value + countDecorations(bigTree.right) + countDecorations(bigTree.left);
  };
  return countDecorations(treeA) === countDecorations(treeB)
};
*/

console.log(checkIsSameTree(tree, tree2)); // false
console.log(checkIsSameTree(tree2, tree2)); // true