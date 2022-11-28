// 1- comparar dos arrays y extraer el o los elementos que no tenagn en común

let arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
let arr = arrays.reduce((a, b) => {
  return a.filter(value => {
    return !b.includes(value);
  });
});
console.log(arr);
