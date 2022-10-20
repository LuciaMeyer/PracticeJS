

function arrayDiff(a, b) {
    let difference = a.filter(e => !b.includes(e))
    return difference
}

console.log(arrayDiff([1,2], [1])) // [2]
console.log(arrayDiff([1,2,2], [1])) // [2,2]
console.log(arrayDiff([1,2,2], [2])) // [1]
console.log(arrayDiff([1,2,2], [])) // [1,2,2]
console.log(arrayDiff([], [1,2])) // []
console.log(arrayDiff([1,2,3], [1,2])) // [3]    

// ---

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  
  function contarOvejas(ovejas) {
    let  ov = ovejas.filter(o => (
      o.name.toLowerCase().includes('n') &&
      o.name.toLowerCase().includes('a') &&
      o.color === 'rojo'
    ))
    return ov
  }
  
  console.log(contarOvejas(ovejas))

  // ---

  // recibe una cadena con espacios y palabras que comienzan con _ que no se tienen que contar. Transformar el texto a un objeto que contenga el nombre de cada palabra y las veces que aparece.
  const carta = 'bici coche    balón _playstation bici coche peluche'

  export default function listGifts(letter) { 
    let cleanArr = letter.split(' ')
    .filter(l => l !== '' && l.charAt(0) !== '_')
    .reduce((count, e) => {
      count[e] = (count[e] || 0) + 1;
      return count
     }, {});
    return cleanArr
  }

const regalos = listGifts(carta)
console.log(regalos)


