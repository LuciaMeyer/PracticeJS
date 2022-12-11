
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
console.log(Array.of(7,3,2));


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
// copia en el index 0 el elemento de la posición 3
console.log(arr.copyWithin(0, 3));

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
// Ejecuta un bloque de código para cada elemento de un objeto iterable como array o string. La variable definida refiere al valor, a diferencia del for...in que retorna el indice del mismo
let forOfArray = [10, 20, 30];
for (let value of forOfArray) {
  console.log(value);
}

let forOfString = 'Lucia';
for (let value of forOfString) {
  console.log(value);
}   

//___________________________.includes() --> ARRAY & STRING
/* ARRAY:

Determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
Recibe 2 parámetros:
- valueToFind: El valor a buscar
- fromIndex (opcional): Posición en la matriz en la cuál se debe comenzar a buscar valueToFind; el primer caracter a buscar se encuentra en fromIndex. Un valor negativo inicia la búsqueda desde array.length + fromIndex en adelante. El valor por defecto es 0.
Si fromIndex es mayor o igual que la longitud de la matriz, se devuelve false. No se buscará en la matriz.
*/
const arrInlc = ['a', 'b', 'c'];
arrInlc.includes('c', 2);   // true
arrInlc.includes('c', 3);   // false
arrInlc.includes('c', 100); // false

/*
STRING:

Determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.
Recibe 2 parámetros:
- searchString: Una cadena a buscar en el texto.
- position (opcional): La posición dentro de la cadena en la cual empieza la búsqueda de searchString (Por defecto este valor es 0).
El método includes() es "case sensitive" (tiene en cuenta mayúsculas y minúsculas).
*/
const str = 'To be, or not to be, that is the question.'
console.log(str.includes('To be'));    
console.log(str.includes('To be', 1)); 
console.log(str.includes('question')); 
console.log(str.includes('TO BE'));

const sentence = 'Linda mañana verdad?.';  
const word = 'verdad';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

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
// acc es el acumulador, i el valor actual
let sumaValores = [0, 1, 2, 3].reduce((acc, i) => acc + i);
console.log(sumaValores)

let sumaArray = [[0,1], [2,3], [4,5]].reduce((acc, i) => acc.concat(i));
console.log(sumaArray);

// puedo pasarle como segundo parámetro un valor inicial. Si no se lo paso toma el valor inicial como el primer elemento del array y empieza a iterar desde el segundo elemento.

let conValorInicial = [0, 1, 2, 3].reduce((acc, i) => {
  return acc + i
 }, 3);
 console.log(conValorInicial);

const string = ['mi', 'nombre', 'es', 'Lucía']
const res = string.reduce((acc, i) => {
  return acc += ' ' + i; 
}, 'Hola!, ');
console.log(res)

const letter = 'bici coche balón playstation bici coche balón peluche'
const listGifts = letter => { 
  let obj = letter.split(' ')
  .reduce((acc, e) => {
    acc[e] = (acc[e] || 0) + 1; // setea la propiedad con nombre según la posición de e, y como valor (lo haya acumulado o 0)+1
    return acc;
    }, {});
  return obj;
}
console.log(listGifts(letter))

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
//Para ordenar de forma numérica se suma una función:
console.log(puntos.sort((a,b) => a-b));

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


/*****************  STRINGS & NÚMEROS  *****************/

//___________________________String.fromCharCode()
// método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
// ejemplo imprimir abecedario en String o array
console.log(String.fromCharCode(...Array(123).keys()).slice(97))
console.log(String.fromCharCode(...Array(123).keys()).slice(97).split(''));

//___________________________.repeat()
// Construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados. Sintaxis: str.repeat(count)
console.log('abc'.repeat(2));    

//___________________________.split()
// Divide (fragmenta) un string en dos o más sub cadenas usando un separador (divisor) y los guarda en un array
let arr3 = 'hola como estas'
console.log(arr3.split(' '));

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
console.log(createXmasTree(4)); // Quokka no consologue saltos, ver en consola o run

//___________________________.toLowerCase()
// Devuelve el valor en minúsculas de la cadena que realiza la llamada.
let texto = "ALFABETO";
console.log(texto.toLowerCase());

//___________________________.toUpperCase()
// Devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
let texto1 = "alfabeto"
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
console.log(parseInt('1111', 2)); // 15 --> binario a decimal

//___________________________.toFixed()
// Recibe un numero y devuelve la cantidad de decimales que se le indique. Devuelve una string!
let num = 1.235486
num1 = num.toFixed(2)
console.log(num1)
console.log(parseFloat(num1)) // lo paso a número

//___________________________.toString()
// Devuelve una cadena que representa al objeto Number especificado 
let howMany = 10;
console.log(howMany.toString());

let x = 7;
console.log(x.toString(2)); // '111' --> de decimal a binario

//___________________________.slice()
// Extrae una sección de una cadena y devuelve una cadena nueva
let cadena1 = "Hola como estás?";
console.log(cadena1.slice(5, -7)); // mañana


/*****************  OBJETOS  *****************/

//___________________________for...in
// Puede aplicarse para array, string y objetos.
// Retorna el indice o key, a diferencia del forof que retorna el valor

const forInObject = { a: 1, b: 2, c: 3 };
for (const key in forInObject) {
  console.log(key)
  console.log(`${key}: ${forInObject[key]}`);
};

const forInArray = [6,7,8];
for (const i in forInArray) {
  console.log(i)
  console.log(forInArray[i])
};

const forInString = 'lucia';
for (const i in forInString) {
  console.log(i)
  console.log(forInString[i])
};


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

//___________________________Object.create()
// Crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.
const person = {
  isHuman: false,
  printIntroduction: function() {
    return `My name is ${this.name}. Am I human? ${this.isHuman}`;
  }
};

const me = Object.create(person);
me.name = 'Lucía'; 
me.isHuman = true; 
console.log(me.printIntroduction());

//___________________________Object.hasOwnProperty()
// Devuelve un booleano indicando si el objeto tiene la propiedad especificada.
o = { prop: 'exists' };
console.log(o.hasOwnProperty('prop')); 
console.log(o.hasOwnProperty('otraProp'));

//___________________________ITERAR UN OBJETOS

let perro = {
  nombre: "Scott",
  color: "Negro",
  macho: true,
  edad: 5
};

// --> Usando la propiedad Object.keys() + for
let claves = Object.keys(perro); // [ 'nombre', 'color', 'macho', 'edad' ]
for(let i=0; i< claves.length; i++){
  console.log(perro[claves[i]]);
}

// --> Usando la propiedad Object.values() + forEach
let valores = Object.values(perro);   // ["Scott", "Negro", true, 5];
for(let i=0; i< valores.length; i++){
  console.log(valores[i]);
}

// --> Usando un bucle for...in
for (let clave in perro){
  console.log(perro[clave]);
};

// --> Usando la propiedad Object.entries() + forEach()
Object.entries(perro).forEach(([key, value]) => console.log(value)); // Scott, Negro, true, 5

// --> - Usando la propiedad Object.entries() y un bucle for...of
for(const [key, value] of Object.entries(perro)){
  console.log(value)
};

/*****************  OTROS  *****************/

//___________________________Math
/* es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función. El objeto Math no se puede editar. Todas las propiedades y métodos de Math son estáticos.
PARA CONOCERLOS
--> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
--> https://lenguajejs.com/javascript/number/objeto-math/
*/

//___________________________JSON.stringify()
// recibe un objeto de JavaScript y lo transforma en una cadena JSON.
console.log(JSON.stringify({ x: 5, y: 6 }));

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));

const myObj = { name: 'Skip', age: 2, favoriteFood: 'Steak' };
const myObjStr = JSON.stringify(myObj);
console.log(myObjStr);

// Puede tomar dos argumentos adicionales: el primero es una función replacer y el segundo es un valor String o Number que se utiliza como un space en la cadena que se devuelve.

// El parámetro replacer (de reemplazo) puede ser tanto una función como o un array.

// - ejemplo con replacer como funcion:

const user = {id: 229,  name: 'Sammy', email: 'Sammy@domain.com'};
const user1 = {id: 229,  name: 'Sammy', mail: 'Sammy@domain.com'};

function replacer(key, value) {
typeof value;
  if (key === 'email') return undefined;
  return value;
};
const userStr = JSON.stringify(user, replacer);
console.log(userStr)
const userStr1 = JSON.stringify(user1, replacer);
console.log(userStr1)

// - ejemplo con replacer como array: en este caso los valores de array indican los nombres de las propiedades del objeto que se va a incluir en la cadena JSON resultado.

let foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
console.log(JSON.stringify(foo, ['week', 'month']));


//Y un ejemplo con un argumento space aprobado:
const userStr2 = JSON.stringify(user, null, '...')
console.log(userStr2)

//___________________________JSON.parse()
// recibe una cadena JSON y retorna un objeto de JavaScript 
myObjJson = '{"name":"Skip","age":2,"favoriteFood":"Steak"}'
console.log(JSON.parse(myObjJson));

// Puede tomar una función como segundo argumento que puede transformar los valores de objeto antes de que se devuelvan:
const upper = JSON.parse(userStr, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
});
console.log(upper);

//___________________________Date
// Los objetos Date representan en JavaScript un momento fijo en el tiempo en un formato independiente. El objeto Date contiene un Number que representa los milisegundos transcurridos desde el 1 de Enero de 1970 UTC.

// - Constructor Date()
// Cuando es llamado como una función, retorna una cadena que representa la fecha y hora actual

console.log(new Date().toString());
let date1 = new Date()
console.log(date1.toLocaleDateString())

// - Métodos estáticos: 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date#m%C3%A9todos_est%C3%A1ticos

// - Obtener fecha, mes y año u hora:

const date = new Date();

const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
console.log(month)
console.log(day)
console.log(year)

const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
console.log(hour)
console.log(minutes)
console.log(seconds)

// ....en proceso
