// 1- comparar dos arrays y extraer el o los elementos que no tenagn en común

let arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
let arr = arrays.reduce((a, b) => {
  return a.filter(value => {
    return !b.includes(value);
  });
});
console.log(arr);



/*
Crear una funcion dada una matriz de enteros y resolver el problema de "subarreglo de suma máxima".
La tarea es encontrar un subarreglo contiguo con la suma más grande en el arreglo. La funcion devuelve la suma.
Si la matriz se compone sólo de números positivos la suma más grande es la suma de toda la matriz.
Si la matriz se compone sólo de números negativos devuelve 0.
Se considera que una matriz vacía tiene 0 de suma más grande. 
*/
export function maxSequenceSum( arr ) {
  let sum = 0;
  if(arr.length === 0) return 0;
  if(arr.every(e => Math.sign(e) === -1)) return 0;
  if(arr.every(e => Math.sign(e) === 1)) {
    sum = arr.reduce((acc, i) => acc + i);
  }
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let suma = arr[i] + arr[i+1];
    if(suma < 0) i++;
    if(suma > 0) arr1.push(arr[i] + arr[i+1]);
    i++
    console.log(arr1)
  }
  sum = arr1.reduce((acc, i) => acc + i);
  return sum; 
}

console.log(maxSequenceSum([-2, 1, -3 , 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSequenceSum([1, -2, 3, -1, 5])) // 7


// export function maxSequenceSum( arr ) {
//   let sum = 0
//   if(arr.length === 0) return 0
//   if(arr.every(e => Math.sign(e) === -1)) return 0
//   if(arr.every(e => Math.sign(e) === 1)) {
//     sum = arr.reduce((acc, i) => acc + i);
//   } 
//   let arr1 = []
//   for (let i = 0; i < arr.length; i++) {
//     let suma = arr[i] + arr[i+1]
//     if(suma < 0) arr1
//     if(suma > 0) arr1.push(arr[i],arr[i+1])
//   }
//   sum = arr1.reduce((acc, i) => acc + i);
//   return sum; 
// }

// console.log(maxSequenceSum([-2, 1, -3 , 4, -1, 2, 1, -5, 4])) // 6
// console.log(maxSequenceSum([1, -2, 3, -1, 5])) // 7
