// https://adventjs.dev/

/* ---------->>> Adventjs #14.js <<<----------

¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?
*/
const missingReindeer= ids => {
    if(ids.length === 1 && ids[0] !== 0) return 0;
    let order = ids.sort((a, b)=> a - b);
    let lost = 0;
    for (let i = 0; i < order.length-1; i++) {
        if(order[i+1]-order[i] !== 1) lost =  order[i+1]-1;
    };
    if(lost !== 0) return lost;
    else return ++order[order.length-1];
};

console.log(missingReindeer([0, 2, 3]));
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); 
console.log(missingReindeer([0, 1]));
console.log(missingReindeer([3, 0, 1]));
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) );
console.log(missingReindeer([0]) );
console.log(missingReindeer([1]) );





