// https://adventjs.dev/

/* ---------->>> Adventjs #04.js <<<----------

¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____

Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.

*/

const createXmasTree = height => {
    if (height > 100 || height < 1) return false  
    let tree = ''
    for(let i = 0; i < height; i++) {
      const totalAst = i * 2 + 1
      const totalUnd = height - i - 1
      const ast = '*'.repeat(totalAst)
      const und = '_'.repeat(totalUnd)
      tree += und + ast + und + '\n'
    }
    const baseSide = '_'.repeat(height - 1)
    const base = (baseSide + '#' + baseSide + '\n').repeat(2).trim()
    let totalTree = tree + base
    return totalTree
}

console.log(createXmasTree(4))
console.log(createXmasTree(6))


