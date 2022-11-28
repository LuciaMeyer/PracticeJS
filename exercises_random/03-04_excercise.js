/*
3- Construir una matriz asimétrica piramidal mediante un número introducido con orden descendente tal que:

N = 5               N=6

| 1 |               | 1 |
| 2 | 6 |           | 2 | 7 |
| 3 | 7 | 9 |       | 3 | 8 | 11 |
| 4 | 8 |           | 4 | 9 | 12 |
| 5 |               | 5 | 10|
                    | 6 |
*/

const pyramidalArray = number => {
    let columns = Math.round(number/2) // cantidad de columnas del array
    let arr = []
    num = 1
    let array = []

    for (let i = 0; i < number; i++) {
        arr[i] = new Array()
    }
    for (let i = 0; i < columns; i++) { 
        for (let j = i; j < (number-i); j++) {
            arr[j][i] = num
            num++        
        }    
    }
    arr.forEach(e => {
        array.push(e)
        array.push('\n')
    })
    return array
};

console.log(pyramidalArray(5));
console.log(pyramidalArray(6));
console.log(pyramidalArray(12));

/*
4- Realiza su correcta ordenación ascendente

| 1 | 2 | 3 | 4 |
| 5 | 6 | 7 |   |
| 8 | 9 | 10| 11|

*/

let array = [
    [7,2,11,6],
    [1,8,4],
    [3,10,5,9]
]

const sortAscending = array => {
    let sortedArray = [];
    let order = array.flat(2).sort((a,b) => a-b);

    for (let i = 0; i < array.length; i++) { // 
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = order[j]
        }
        order = order.slice(array[i].length);       
    }
    array.forEach(e => {
        sortedArray.push(e);
        sortedArray.push('\n');
    });
    return sortedArray;
};

console.log(sortAscending(array)) 