/* 2 - Crear una funcion dada una matriz de enteros y resolver el problema de "subarreglo de currentSum máxima".
La tarea es encontrar un subarreglo contiguo con la currentSum más grande en el arreglo. La funcion devuelve la currentSum.
Si la matriz se compone sólo de números positivos la currentSum más grande es la currentSum de toda la matriz.
Si la matriz se compone sólo de números negativos devuelve 0.
Se considera que una matriz vacía tiene 0 de currentSum más grande. 
*/

export function maxSequenceSum( arr ) {
    let maxSum = 0, sum = 0;
    if(!arr.length) return 0;
    if(arr.every(e => Math.sign(e) === -1)) return 0;
    if(arr.every(e => Math.sign(e) === 1)) {
      maxSum = arr.reduce((acc, i) => acc + i);
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if(sum < 0) sum = 0
        if(sum > maxSum) maxSum = sum;
    }
    return maxSum;
  }
  console.log(maxSequenceSum([]));
  console.log(maxSequenceSum([-1,-3,-4,-5]));
  console.log(maxSequenceSum([-2, 1, -3 , 4, -1, 2, 1, -5, 4])) // 6
  console.log(maxSequenceSum([5, 9, 7, 5, 9, 6]))
  console.log(maxSequenceSum([1, -2, 3, -1, 5])) // 7