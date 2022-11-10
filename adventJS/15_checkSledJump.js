// https://adventjs.dev/

/* ---------->>> Adventjs #15.js <<<----------
¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.

Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta
checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!

Lo importante: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...
*/

const checkSledJump = heights => {
    let max = Math.max(...heights);
    if(heights[0] === max || heights[heights.length -1] === max) return false;
    if(heights.length === 3 && max === heights[1]) return true;
    let index = heights.indexOf(max);
    let goUp = heights.slice(0, index);
    let goDown = heights.slice(index+1, heights.length);
    let addGoUp = goUp.reduce((acc, i) => acc + i);
    let addGoDown = goDown.reduce((acc, i) => acc + i);
    if(addGoUp === addGoDown || addGoUp + addGoDown === max) return true;
    else return false; 
};;

console.log(checkSledJump([1, 2, 3, 2, 1])) 
console.log(checkSledJump([0, 1, 0])) 
console.log(checkSledJump([0, 3, 2, 1]))
console.log(checkSledJump([0, 1000, 1]))
console.log(checkSledJump([2, 4, 4, 6, 2])) 
console.log(checkSledJump([1, 2, 3])) 
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3]))