// https://adventjs.dev/

/* ---------->>> Adventjs #20.js <<<----------
En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

Vamos a ver unos ejemplos de frases:

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true
pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false

*/

const pangram = letter => {
    // let abc = String.fromCharCode(...Array(123).keys()).slice(97).split(''); --> no incluye ñ
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
    let incl = true;
    for (let i = 0; i < abc.length; i++) {
        if(!letter.toLowerCase().includes(abc[i])) incl = false;
    }
    return incl;
};

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'));
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'));
console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario'));
console.log(pangram('De la a a la z, nos faltan letras'));


