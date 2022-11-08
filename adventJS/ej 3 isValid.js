// https://adventjs.dev/

/* ---------->>> Adventjs #03.js <<<----------

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
Ejemplos: */

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
      
/* Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch! */

const isValid = letter => {
  if(letter.includes('[') || letter.includes(']') || letter.includes('{') || letter.includes('}') || letter.includes('()')) return false;
  let arr = letter.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].charAt(0) === ')' || arr[i].charAt(arr[i].length -1) === '(') return false;
    if(arr[i].charAt(0) === '(' && arr[i].charAt(arr[i].length -1) !== ')') return false;
    if(arr[i].charAt(0) === '(' && arr[i].charAt(arr[i].length -1) === ')' && arr[i].length > 2 ) return true;
  }
  return true;
};

console.log(isValid("bici coche (balón) bici coche peluche")) 
console.log(isValid("(muñeca) consola bici")) 
console.log(isValid("bici coche (balón bici coche")) 
console.log(isValid("peluche (bici [coche) bici coche balón")) 
console.log(isValid("(peluche {) bici")) 
console.log(isValid(")bici( casa play")) 
console.log(isValid("() bici")) 
console.log(isValid("(muñeca) consola bici")) 

