/*
Construir una matriz asimétrica piramidal mediante un número introducido con orden descendente tal que:

N = 5               N=6

| 1 |               | 1 |
| 2 | 6 |           | 2 | 7 |
| 3 | 7 | 9 |       | 3 | 8 | 11 |
| 4 | 8 |           | 4 | 9 | 12 |
| 5 |               | 5 | 10|
                    | 6 |
*/

const pyramidalArray = numero => {
    let entrada = Math.round(numero/2)
    let arr = []
    num = 1
    let array = []

    for (let i = 0; i < numero; i++) {
        arr[i] = new Array()
    }
    for (let i = 0; i < entrada; i++) {
        for (let j = i; j < (numero-i); j++) {
            arr[j][i] = num
            num++        
        }    
    }
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i])
        array.push('\n')
    }
    return array
};

console.log(pyramidalArray(5));
console.log(pyramidalArray(6));
console.log(pyramidalArray(7));
