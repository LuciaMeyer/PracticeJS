
/***************** ARRAYS  *****************/

// --> MÉTODOS ESTÁTICOS

//___________________________Array.from() 
// Crea una nueva instancia de Array a partir de un objeto iterable.
console.log(Array.from('foo')); //

//___________________________Array.isArray()
// Determina si el valor pasado es un Array. Retorna true o false	*/
console.log(Array.isArray([1, 2, 3])); 

//___________________________Array.of()
//Crea una nueva instancia de Array con un número variable de parámetros, independientemente del número y del tipo de dichos parámetros.
console.log(Array.of(7));



// --> PROPIEDADES DE INSTANCIA

//___________________________.length --> ARRAY & STRINGS
// Indica el número de elementos 
console.log([1,2,3].length);
		


// -->  MÉTODOS DE INSTANCIA 

//___________________________.concat()
// Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

console.log([1,2,3].concat([4,5,6]));

//___________________________.copyWithin()
// Copia una secuencia de elementos de un array dentro del propio array.
const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.copyWithin(0, 3, 4));

//___________________________.entries()
// Retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.
const arrEntries = ['a', 'b', 'c'];
const iterator = arrEntries.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);

//___________________________.every() 
// Devuelve true si todos los elementos del array cumplen el predicado que recibe como parámetro.
const test = (value) => value < 40;
console.log([39, 29, 10].every(test));

//___________________________.fill()
// Cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.
console.log([1, 2, 3, 4].fill(0, 2, 4));
// reemplaza con 0 desde posición 2 a length 4

//___________________________.filter()
// Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.
console.log([7, 5, 9].filter(n => n > 7));

//___________________________.find()
// Recorre el array y retorna la primera coincidencia del elemento que se busca, o undefined si ninguno lo cumple.
console.log([7, 5, 9, 8].find(n => n > 7));

//___________________________.findIndex()
// Devuelve el índice del primer elemento del array que cumpla la condición, o -1 si nunguno lo cumple.
console.log([7, 5, 9, 8].findIndex(n => n > 7));

//___________________________.flat() 
// Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
let arr1 = [1, 2, [3, 4, [5, 6]]];
console.log(arr1.flat(2))

//___________________________.forEach() 
// Llama a la función pasada como parámetro para todos los elementos del array.
let arr2 = [2, 5, , 9];
arr2.forEach((e, i, arr) => console.log(`elem= ${e} index= ${i} arr= [${arr}]`));

//___________________________for...of
// Ejecuta un bloque de código para cada elemento de un objeto iterable como array o string
let forOfArray = [10, 20, 30];
for (let value of forOfArray) {
  console.log(value);
}

let forOfString = 'Lucia';
for (let value of forOfString) {
  console.log(value);
}   

//___________________________.includes()
// Determina si un array o string incluye un determinado elemento y retorna un booleano según corresponda.
console.log([1, 2, 3].includes(2));
console.log('Lucia'.includes('c'));

//___________________________.indexOf()
// Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
const animales = ['perro', 'gato', 'puma', 'cabra'];
console.log(animales.indexOf('perro'));
console.log(animales.indexOf('rata'));

//___________________________.lastIndexOf()
// Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.
const animals = ['perro', 'gato', 'puma', 'cabra', 'puma'];
console.log(animals.lastIndexOf('puma'));
console.log(animals.lastIndexOf('rata'));

//___________________________.join()
// Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(' '));
console.log(elements.join('-'));

//___________________________.map()
// Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
var numbers = [1, 5, 10, 15];
console.log(numbers.map(n => n * 2));

//___________________________.pop()
// Elimina el último elemento de un array y lo devuelve. Este método cambia el array original
let arrPop = [1,2,3];
console.log(arrPop.pop());
console.log(arrPop)

//___________________________.push()
// Añade uno o más elementos al final de un array y devuelve la nueva longitud del array. Cambia el array original
let arrPush = [1,2,3];
console.log(arrPush.push('otro elemento'));
console.log(arrPush)

//___________________________.reduce()
// Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. No modifica el arreglo original
// a es el acumulador, b el valor actual
let sumaValores = [0, 1, 2, 3].reduce((acc, i) => acc + i);
console.log(sumaValores)

let sumaArray = [[0,1], [2,3], [4,5]].reduce((acc, i) => acc.concat(i));
console.log(sumaArray);

// puedo pasarle como segundo parámetro un valor inicial, puede ser un número, array, objeto, string...si no se lo paso toma el valor inicial como el primer elemento del array y empieza a iterar desde el segundo elemento.

let conValorInicial = [0, 1, 2, 3].reduce((acc, i) => {
  return acc + i
 }, 3);
 console.log(conValorInicial);

const string = ['mi', 'nombre', 'es', 'Lucía']
const res = string.reduce((acc, i) => {
  return acc += ' ' + i; 
}, 'Hola!, ');
console.log(res)

//___________________________.reverse()
// Invierte el orden de los elementos de un array. Modifica el array original
console.log([1,2,3].reverse())

//___________________________.shift()
// Elimina el primer elemento del array y lo retorna. Este método modifica cambia el array original.
let arrShift = [1,2,3];
console.log(arrShift.shift());
console.log(arrShift)

//___________________________.slice()
// Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modifica.
let nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
let masculinos = nombres.slice(1, 3);
console.log(masculinos);

//___________________________.some()
// Itera y comprueba si al menos un elemento del array cumple con la condición implementada por la función.
const arraySome = [1, 2, 3, 4, 5];
console.log(arraySome.some(n => n === 6))

//___________________________.sort()
// Ordena los elementos del array y retorna el arreglo ordenado. Se ordenan en forma ascendente y de la A a la Z por defecto.
let frutas = ['guindas', 'manzanas', 'bananas'];
console.log(frutas.sort()); 
let puntos = [1, 10, 2, 21];
console.log(puntos.sort());

//___________________________.splice()
// Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
let agregar = [1,2,4];
agregar.splice(2,0,3);
// parámetro 1: en qué posicón se agrega
// parámetro 2: qué se elimina (en este caso nada)
// parámetro 3: qué agrega
console.log(agregar);

let eliminar = [1,2, 'delete', 3]
eliminar.splice(2,1);
console.log(eliminar);

let eliminarYagregar = [1,2,2,4];
eliminarYagregar.splice(2,1,3);
// elimino index 2 y agrego en esa posición el n° 3
console.log(eliminarYagregar);

//___________________________.unshift()
// Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array. Cambia el array original
let arrUnshift = [1,2,3];
console.log(arrUnshift.unshift(5));
console.log(arrUnshift)



/*****************  MIX : STRINGS & NÚMEROS  *****************/

//___________________________.split()
// Divide (fragmenta) un string en dos o más sub cadenas usando un separador (divisor)
let arr3 = 'hola como estas'
arr3.split(' ')

//___________________________.toLowerCase()
// Devuelve el valor en minúsculas de la cadena que realiza la llamada.
var texto = "ALFABETO";
console.log(texto.toLowerCase());

//___________________________.toUpperCase()
// Devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
var texto1 = "alfabeto"
console.log(texto1.toUpperCase());

//___________________________.trim()
// Elimina los espacios en blanco inicial y final de la cadena. Actualiza la cadena original.

const trim = "         prueba trim           ";
console.log(trim);
console.log(trim.trim());

//___________________________.parseFloat()
// Analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.
console.log(parseFloat('1.30'));
console.log(parseFloat('4.567abcdefgh'));

//___________________________.parseInt()
// Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
console.log(parseInt('1.5263')) // en este caso no considera los decimales, imprime 1

//___________________________.toFixed()
// recibe un numero y devuelve la cantidad de decimales que se le indique. Devuelve una string!
let num = 1.235486
num1 = num.toFixed(2)
console.log(num1)
console.log(parseFloat(num1)) // lo paso a número

//___________________________.toString()
// Devuelve una cadena que representa al objeto Number especificado 
let howMany = 10;
console.log(howMany.toString());

let x = 7;
console.log(x.toString(2));

//___________________________.slice()
// Extrae una sección de una cadena y devuelve una cadena nueva.
let cadena1 = "Linda mañana verdad?";
console.log(cadena1.slice(6, -8));

//___________________________.includes()
// Determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.
const sentence = 'Linda mañana verdad?.';
const word = 'verdad';
console.log(sentence.includes('Linda'))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);




/*****************  OBJETOS  *****************/

//___________________________for...in
// recorre el objeto como un for, y por cada paso se puede objeter la propiedad, const prop en este caso, y el valor de la misma
const object = { a: 1, b: 2, c: 3 };
for (const prop in object) {
  console.log(`${prop}: ${object[prop]}`);
}

//___________________________Object.entries()
// Devuelve un array de pares [key, value] de un objeto dado
objEntries = {a:1, b:2, c:3};
console.log(Object.entries(objEntries));

//___________________________Object.keys()
// Devuelve un array de las propiedades de un objeto, en el mismo orden como se obtienen en un loop normal
objKeys = {a:1, b:2, c:3};
console.log(Object.keys(objKeys));

//___________________________Object.values()
// Devuelve un array de los valores de un objeto, en el mismo orden como se obtienen en un loop normal
objValues = {a:1, b:2, c:3};
console.log(Object.values(objValues));


//__________________________Funciones:

function basicOp1(operation, value1, value2) {
  //   if(operation === '+') return value1 + value2
  //   if(operation === '-') return value1 - value2
  //   if(operation === '*') return value1 * value2
  //   if(operation === '/') return value1 / value2
    return eval(value1+operation+value2);
  } 

// The eval() function evaluates or executes an argument.This function take string a it parameter.
// If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.