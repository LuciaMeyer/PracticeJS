
## ARRAYS
<br/>

####  Array.from() 
Crea una nueva instancia de Array a partir de un objeto iterable.

```js
Array.from('foo'); // [ 'f', 'o', 'o' ]`
```

####  Array.isArray()
Determina si el valor pasado es un Array. Retorna true o false

```js
Array.isArray([1, 2, 3]); // true
```

####  Array.of()
Crea una nueva instancia de Array con un número variable de parámetros, independientemente del número y del tipo de dichos parámetros.

```js
Array.of(7,3,2); // [ 7, 3, 2 ]
```

####  .length --> ARRAY & STRING
Indica el número de elementos 

```js
[1,2,3].length; // 3
```
		
####  .concat()
Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

```js
[1,2,3].concat([4,5,6]); // [ 1, 2, 3, 4, 5, 6 ]
```

####  .copyWithin()
Copia una secuencia de elementos de un array dentro del propio array.

```js
const arr = ['a', 'b', 'c', 'd', 'e']; // copia en el index 0 el elemento de la posición 3
arr.copyWithin(0, 3); // [ 'd', 'e', 'c', 'd', 'e' ]
```

####  .entries()
Retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.

```js
const arrEntries = ['a', 'b', 'c'];
const iterator = arrEntries.entries();
iterator.next().value; // [ 0, 'a' ]
iterator.next().value; // [ 1, 'b' ]
```

####  .every() 
Devuelve true si todos los elementos del array cumplen el predicado que recibe como parámetro.

```js
const test = (value) => value < 40;
[39, 29, 10].every(test); // true
```

####  .fill()
Cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.
 
```js
[1, 2, 3, 4].fill(0, 2, 4); // [ 1, 2, 0, 0 ]
// reemplaza con 0 desde posición 2 a length 4
```
 

####  .filter()
Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.

```js
[7, 5, 9].filter(n => n > 7); // [ 9 ]
```

####  .find()
Recorre el array y retorna la primera coincidencia del elemento que se busca, o undefined si ninguno lo cumple.

```js
[7, 5, 9, 8].find(n => n > 7); // 9
```

####  .findIndex()
Devuelve el índice del primer elemento del array que cumpla la condición, o -1 si nunguno lo cumple.

```js
[7, 5, 9, 8].findIndex(n => n > 7); // 2
```

####  .flat() 
Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

```js
let arr1 = [1, 2, [3, 4, [5, 6]]];
arr1.flat(2); // [ 1, 2, 3, 4, 5, 6 ]
```

####  .forEach() 
Llama a la función pasada como parámetro para todos los elementos del array.
 
```js
let arr2 = [2, 5, , 9];
arr2.forEach((e, i, arr) => console.log(`elem= ${e} index= ${i} arr= [${arr}]`));
// 'elem= 2 index= 0 arr= [2,5,,9]'
// 'elem= 5 index= 1 arr= [2,5,,9]'
// 'elem= 9 index= 3 arr= [2,5,,9]'
```

####  for...of
Ejecuta un bloque de código para cada elemento de un objeto iterable como array o string

 ```js
let forOfArray = [10, 20, 30];
for (let value of forOfArray) {
  console.log(value);
};
// 10
// 20
// 30

let forOfString = 'Lucia';
for (let value of forOfString) {
  console.log(value);
};
// 'L'
// 'u'
// 'c'
// 'i'
// 'a'
```

####  .includes() --> ARRAY & STRING

ARRAY:

Determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
Recibe 2 parámetros:
- value`ToFind: El valor a buscar
- fromIndex (opcional): Posición en la matriz en la cuál se debe comenzar a buscar valueToFind; el primer caracter a buscar se encuentra en fromIndex. Un valor negativo inicia la búsqueda desde array.length + fromIndex en adelante. El valor por defecto es 0.
Si fromIndex es mayor o igual que la longitud de la matriz, se devuelve false. No se buscará en la matriz.

```js
const arrInlc = ['a', 'b', 'c'];
arrInlc.includes('c', 2);   // true
arrInlc.includes('c', 3);   // false
arrInlc.includes('c', 100); // false
```

STRING:

Determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.
Recibe 2 parámetros:
- searchString: Una cadena a buscar en el texto.
- position (opcional): La posición dentro de la cadena en la cual empieza la búsqueda de searchString (Por defecto este valor es 0).
El método includes() es "case sensitive" (tiene en cuenta mayúsculas y minúsculas).

```js
const str = 'To be, or not to be, that is the question.'
str.includes('To be');    // true
str.includes('To be', 1); // false
str.includes('question'); // true
str.includes('TO BE');    // false

const sentence = 'Linda mañana verdad?.';  
const word = 'verdad';
`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`;
// 'The word "verdad" is in the sentence'
```

####  .indexOf()
Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

```js
const animales = ['perro', 'gato', 'puma', 'cabra'];
animales.indexOf('perro'); // 0
animales.indexOf('rata'); // -1
```

####  .lastIndexOf()
 Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.

```js
const animals = ['perro', 'gato', 'puma', 'cabra', 'puma'];
animals.lastIndexOf('puma'); // 4
animals.lastIndexOf('rata'); // -1
```

####  .join()
 Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.

```js
const elements = ['Fire', 'Air', 'Water'];
elements.join();    // 'Fire,Air,Water'
elements.join(' '); // 'Fire Air Water'
elements.join('-'); // 'Fire-Air-Water'
```

####  .map()
 Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```js
var numbers = [1, 5, 10, 15];
numbers.map(n => n * 2); // [ 2, 10, 20, 30 ]
```

####  .pop()
 Elimina el último elemento de un array y lo devuelve. Este método cambia el array original.

```js
let arrPop = [1,2,3];
arrPop.pop(); // 3
```

####  .push()
 Añade uno o más elementos al final de un array y devuelve la nueva longitud del array. Cambia el array original.

```js
let arrPush = [1,2,3];
arrPush.push('otro elemento'); // 4
```

####  .reduce()
 Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. No modifica el arreglo original.

```js
// acc es el acumulador, i el valor actual
let sumaValores = [0, 1, 2, 3].reduce((acc, i) => acc + i); // 6 
let sumaArray = [[0,1], [2,3], [4,5]].reduce((acc, i) => acc.concat(i)); // [ 0, 1, 2, 3, 4, 5 ]
```

puedo pasarle como segundo parámetro un valor inicial. Si no se lo paso toma el valor inicial como el primer elemento del array y empieza a iterar desde el segundo elemento.

```js
let conValorInicial = [0, 1, 2, 3].reduce((acc, i) => {
  return acc + i;
 }, 3); // 9


const string = ['mi', 'nombre', 'es', 'Lucía']
const res = string.reduce((acc, i) => {
  return acc += ' ' + i; 
}, 'Hola!, '); // 'Hola!,  mi nombre es Lucía'

const letter = 'bici coche balón playstation bici coche balón peluche'
const listGifts = letter => { 
  let obj = letter.split(' ')
  .reduce((acc, e) => {
    acc[e] = (acc[e] || 0) + 1; // setea la prop con nombre según la posición de e, y como valor (lo haya acumulado o 0)+1
    return acc;
    }, {});
  return obj;
};
listGifts(letter); // { bici: 2, coche: 2, 'balón': 2, playstation: 1, peluche: 1 };
```

####  .reverse()
Invierte el orden de los elementos de un array. Modifica el array original.

```js
[1,2,3].reverse(); // [ 3, 2, 1 ]
```

####  .shift()
Elimina el primer elemento del array y lo retorna. Este método modifica cambia el array original.

```js
let arrShift = [1,2,3];
arrShift.shift(); // 1
arrShift // [2,3]
```

####  .slice()
Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modifica.

```js
let nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
let masculinos = nombres.slice(1, 3); // [ 'Pedro', 'Miguel' ]
```

####  .some()
Itera y comprueba si al menos un elemento del array cumple con la condición implementada por la función.

```js
const arraySome = [1, 2, 3, 4, 5];
arraySome.some(n => n === 6); // false
```

####  .sort()
Ordena los elementos del array y retorna el arreglo ordenado. Se ordenan en forma ascendente y de la A a la Z por defecto.

 ```js
let frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // [ 'bananas', 'guindas', 'manzanas' ]
let puntos = [1, 10, 2, 21];
puntos.sort(); // [ 1, 10, 2, 21 ]
```

Para ordenar de forma numérica se suma una función:

```js
puntos.sort((a,b) => a-b); // [ 1, 2, 10, 21 ]
```

####  .splice()
Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

```js
let agregar = [1,2,4]; 
agregar.splice(2,0,3); // [ 1, 2, 3, 4 ]
// parámetro 1: en qué posicón se agrega
// parámetro 2: qué se elimina (en este caso nada)
// parámetro 3: qué agrega

let eliminar = [1,2, 'delete', 3]
eliminar.splice(2,1); // [ 'delete' ]

let eliminarYagregar = [1,2,2,4];
eliminarYagregar.splice(2,1,3); // [ 2 ]
// elimino index 2 y agrego en esa posición el n° 3
```

####  .unshift()
Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array. Cambia el array original.

```js
let arrUnshift = [1,2,3];
arrUnshift.unshift(5); // 4
```

##  STRINGS & NÚMEROS
<br/>

####  String.fromCharCode()
Método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
ejemplo imprimir abecedario en String o array.

```js
String.fromCharCode(...Array(123).keys()).slice(97);
// 'abcdefghijklmnopqrstuvwxyz'
String.fromCharCode(...Array(123).keys()).slice(97).split(''); // no incluye ñ
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
```

####  .repeat()
Construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados. Sintaxis: str.repeat(count).

```js
'abc'.repeat(2); // 'abcabc'
```

####  .split()
Divide (fragmenta) un string en dos o más sub cadenas usando un separador (divisor).

```js
let arr3 = 'hola como estas'
arr3.split(' '); // [ 'hola', 'como', 'estas' ]

const createXmasTree = height => {
  let tree = '';
  for(let i = 0; i < height; i++) {
    const totalAst = i * 2 + 1;
    const totalUnd = height - i - 1;
    const ast = '*'.repeat(totalAst);
    const und = '_'.repeat(totalUnd);   
    tree += und + ast + und + '\n';
  }
  return tree;
};
createXmasTree(4); 
// '___*___
//  __***__
//  _*****_
//  *******'
```

####  .toLowerCase()
Devuelve el valor en minúsculas de la cadena que realiza la llamada.

```js
let texto = "ALFABETO";
texto.toLowerCase(); // 'alfabeto'
```

####  .toUpperCase()
Devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.

```js
let texto1 = "alfabeto"
texto1.toUpperCase(); // 'ALFABETO'
```

####  .trim()
Elimina los espacios en blanco inicial y final de la cadena. Actualiza la cadena original.

```js
const trim = "         prueba trim           ";
trim.trim(); // 'prueba trim'
```

####  .parseFloat()
Analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.

```js
parseFloat('1.30'); // 1.3  
parseFloat('4.567abcdefgh'); // 4.567
```

####  .parseInt()
Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

```js
parseInt('1.5263');  // en este caso no considera los decimales, imprime 1
parseInt('1111', 2); // 15 --> binario a decimal
```

####  .toFixed()
Recibe un numero y devuelve la cantidad de decimales que se le indique. Devuelve una string!.

```js
let num = 1.235486;
num1 = num.toFixed(2); // '1.24'
parseFloat(num1); //  lo paso a número --> 1.24
```

####  .toString()
Devuelve una cadena que representa al objeto Number especificado.

```js
let howMany = 10; 
howMany.toString(); // '10'
let x = 7;
x.toString(2); // '111' --> de decimal a binario
```

####  .slice()
Extrae una sección de una cadena y devuelve una cadena nueva.

```js
let cadena1 = "Linda mañana verdad?";
cadena1.slice(6, -8); // 'mañana'
```

##  OBJETOS
<hr/><br/>

####  for...in
Recorre el objeto como un for, y por cada paso se puede obteter la propiedad y el valor de la misma

  ```js
const object = { a: 1, b: 2, c: 3 };
for (const prop in object) {
`${prop}: ${object[prop]}`;
} // 'c: 3'
```
####  Object.entries()
 Devuelve un array de pares [key, value] de un objeto dado.

```js
objEntries = {a:1, b:2, c:3};
Object.entries(objEntries); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

####  Object.keys()
 Devuelve un array de las propiedades de un objeto, en el mismo orden como se obtienen en un loop normal.

```js
objKeys = {a:1, b:2, c:3};
Object.keys(objKeys); // [ 'a', 'b', 'c' ]
```

####  Object.values()
 Devuelve un array de los valores de un objeto, en el mismo orden como se obtienen en un loop normal.

```js
objValues = {a:1, b:2, c:3};
Object.values(objValues); // [ 1, 2, 3 ]
```

#### Object.create()
Crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.

```js
const person = {
  isHuman: false,
  printIntroduction: function() {
    return `My name is ${this.name}. Am I human? ${this.isHuman}`;
  }
};

const me = Object.create(person);
me.name = 'Lucía'; 
me.isHuman = true; 
me.printIntroduction(); // 'My name is Lucía. Am I human? true'
```

#### Object.hasOwnProperty()
Devuelve un booleano indicando si el objeto tiene la propiedad especificada.

```js
o = { prop: 'exists' };
o.hasOwnProperty('prop'); // true
o.hasOwnProperty('otraProp');  // false
```

### ITERAR UN OBJETOS
<br/>

```js
let perro = {
  nombre: "Scott",
  color: "Negro",
  macho: true,
  edad: 5
};
```
para todas las opciones detalladas debajo el output es:

```js
/*
"Scott"
"Negro"
true
5
*/
```
- Usando la propiedad Object.keys() + for

```js
let claves = Object.keys(perro); // [ 'nombre', 'color', 'macho', 'edad' ]
for(let i=0; i< claves.length; i++){
  console.log(perro[claves[i]]);
};
```

- Usando la propiedad Object.values() + for

```js
let valores = Object.values(perro);   // ["Scott", "Negro", true, 5];
for(let i=0; i< valores.length; i++){
  console.log(valores[i]);
};
```

- Usando un bucle for...in

```js
for (let clave in perro){
  console.log(perro[clave]);
};
```
- Usando la propiedad Object.entries() + forEach()

```js
Object.entries(perro).forEach(([key, value]) => console.log(value));
```

- Usando la propiedad Object.entries() y un bucle for...of

```js
for(const [key, value] of Object.entries(perro)){
  console.log(value)
};
```

##  OTROS OBJETOS Y FUNCIONES GLOBALES
<br/>

####  Math
es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. El objeto Math no se puede editar. Todas las propiedades y métodos de Math son estáticos:

--> <a href="https:developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">link</a>

--> <a href="https:lenguajejs.com/javascript/number/objeto-math/" target="_blank">link</a>
 
####  JSON.stringify()
 recibe un objeto de JavaScript y lo transforma en una cadena JSON.
```js
JSON.stringify({ x: 5, y: 6 }); //'{"x":5,"y":6}'

JSON.stringify([new Number(3), new String('false'), new Boolean(false)]); // '[3,"false",false]'

const myObj = { name: 'Skip', age: 2, favoriteFood: 'Steak' };
const myObjStr = JSON.stringify(myObj); // '{"name":"Skip","age":2,"favoriteFood":"Steak"}'
```
Puede tomar dos argumentos adicionales: el primero es una función replacer y el segundo es un valor String o Number que se utiliza como un space en la cadena que se devuelve.
El parámetro replacer (de reemplazo) puede ser tanto una función como o un array.

- ejemplo con replacer como funcion:

```js
const user = {id: 229,  name: 'Sammy', email: 'Sammy@domain.com'};
const user1 = {id: 229,  name: 'Sammy', mail: 'Sammy@domain.com'};

function replacer(key, value) {
typeof value;
  if (key === 'email') return undefined;
  return value;
};
const userStr = JSON.stringify(user, replacer);   // '{"id":229,"name":"Sammy"}'
const userStr1 = JSON.stringify(user1, replacer); // '{"id":229,"name":"Sammy","mail":"Sammy@domain.com"}'
```
- ejemplo con replacer como array: en este caso los valores de array indican los nombres de las propiedades del objeto que se va a incluir en la cadena JSON resultado.

```js
let foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
JSON.stringify(foo, ['week', 'month']); // '{"week":45,"month":7}'
```
- ejemplo con un argumento space aprobado:

```js
const userStr2 = JSON.stringify(user, null, '...');
/*
'{
..."id": 229,
..."name": "Sammy",
..."email": "Sammy@domain.com"
}'
*/
```
####  JSON.parse()
Recibe una cadena JSON y retorna un objeto de JavaScript.

```js
myObjJson = '{"name":"Skip","age":2,"favoriteFood":"Steak"}'
JSON.parse(myObjJson); // { name: 'Skip', age: 2, favoriteFood: 'Steak' }
```

Puede tomar una función como segundo argumento que puede transformar los valores de objeto antes de que se devuelvan:

```js
const userStr = '{"id":229,"name":"Sammy"}'
const upper = JSON.parse(userStr, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
}); // { id: 229, name: 'SAMMY' }
```
####  Date
Los objetos Date representan en JavaScript un momento fijo en el tiempo en un formato independiente. El objeto Date contiene un Number que representa los milisegundos transcurridos desde el 1 de Enero de 1970 UTC.

- Constructor Date()
Cuando es llamado como una función, retorna una cadena que representa la fecha y hora actual

```js
new Date().toString(); // 'Sun Nov 20 2022 23:18:30 GMT-0300 (hora estándar de Argentina)'
```

- Métodos estáticos: 
--> <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date#m%C3%A9todos_est%C3%A1ticos" target="_blank">link</a>

- Obtener fecha, mes y año u hora:

```js
const date = new Date();

const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
month // 11
day   // 20
year  // 2022

const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
hour    // 23
minutes // 23
seconds // 46
```

....en proceso



