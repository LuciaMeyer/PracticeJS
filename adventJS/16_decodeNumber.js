// https://adventjs.dev/

/* ---------->>> Adventjs #16.js <<<----------
Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que la puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN

*/

const decodeNumber = symbols => {
    let arr = [];
    let num = 0;
    for (let i = 0; i < symbols.length; i++) {  
        if(symbols[i] === '.') arr.push(1);
        else if(symbols[i] === ',') arr.push(5);
        else if(symbols[i] === ':') arr.push(10);
        else if(symbols[i] === ';') arr.push(50);
        else if(symbols[i] === '!') arr.push(100);
        else arr.push('other');
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= arr[i+1] || arr.length-1 === i) num += arr[i];
        else num -= arr[i];
    }
    if(arr.includes('other')) return NaN;
    return num;
};

console.log(decodeNumber('...')) // 3
console.log(decodeNumber('.,')) // 4 (5 - 1)
console.log(decodeNumber(',.')) // 6 (5 + 1)
console.log(decodeNumber(',...')) // 8 (5 + 3)
console.log(decodeNumber('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumber('.;')) // 49 (50 - 1)
console.log(decodeNumber('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumber('..,!')) // 95 (1 - 1 - 5 + 100)
console.log(decodeNumber('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumber('!!!')) // 300
console.log(decodeNumber(';!')) // 50
console.log(decodeNumber(';.W')) // NaN