// https://adventjs.dev/

/* ---------->>> Adventjs #01.js <<<----------

Considera una lista/array de sheep. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las sheep que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
Por ejemplo, si tenemos las sheep: */

const sheep = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
/* Al ejecutar el método debería devolver lo siguiente:
const sheepFiltradas = countSheep(sheep)
console.log(sheepFiltradas)
[{ name: 'Navidad', color: 'rojo' },
{ name: 'Ki Na Ma', color: 'rojo' }]
Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes sheep que sólo tenga una de las letras, debe tener ambas. */

const countSheep = sheep => {
    let  ov = sheep.filter(o => (
      o.name.toLowerCase().includes('n') &&
      o.name.toLowerCase().includes('a') &&
      o.color === 'rojo'
    ));
    return ov;
}
console.log(countSheep(sheep))