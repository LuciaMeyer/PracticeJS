let arr = [
    "Gorusuke",
    "DavidFabian",
    "ItziarZG",
    "edy WOLF",
    "MarcosGaPe",
    "Jose Jimenez",
    "Borja ",
    "Jhonathan Izquierdo Higuita",
    "MiLfeR322",
    "Sebastián Espínola",
    "Matias Luna",
    "Imanol Decima",
    "MarcoCasula",
    "MaríaBohórquez",
    "Renan",
    "IvanL'olivier",
    "Shonero",
    "Luichidev",
    "Faviola Narvaez",
    "Christopher Fuentes",
    "Kuro",
    "Juan Pablo Addeo",
    "Sergio Martínez",
    "Fran Enriquez González",
    "Diana",
    "tictools",
    "ConchaAsensio",
    "Emilio_Arreaza",
    "novamix",
    "Tomas Duclos",
    "Elaya",
    "Ignacio Palominos",
    "David C.",
    "Gerardo Felipe Conrado",
    "ElXuri",
    "David Borja Martinez",
    "JaviFelices",
    "CarlesSànchez",
    "Gorusuke",
    "DavidFabian",
    "ItziarZG",
    "edy WOLF",
    "MarcosGaPe",
    "Jose Jimenez",
    "Borja ",
    "Jhonathan Izquierdo Higuita",
    "MiLfeR322",
    "Sebastián Espínola",
    "Matias Luna",
    "Imanol Decima",
    "MarcoCasula",
    "MaríaBohórquez",
    "Renan",
    "IvanL'olivier",
    "Shonero",
    "Luichidev",
    "Faviola Narvaez",
    "Christopher Fuentes",
    "Kuro",
    "Juan Pablo Addeo",
    "Sergio Martínez",
    "Fran Enriquez González",
    "Diana",
    "tictools",
    "ConchaAsensio",
    "Emilio_Arreaza",
    "novamix",
    "Tomas Duclos",
    "Elaya",
    "Ignacio Palominos",
    "David C.",
    "Gerardo Felipe Conrado",
    "ElXuri",
    "David Borja Martinez",
    "JaviFelices",
    "CarlesSànchez",
    "Gorusuke",
    "DavidFabian",
    "ItziarZG",
    "edy WOLF",
    "MarcosGaPe",
    "Jose Jimenez",
    "Borja ",
    "Jhonathan Izquierdo Higuita",
    "MiLfeR322",
    "Sebastián Espínola",
    "Matias Luna",
    "Imanol Decima",
    "MarcoCasula",
    "MaríaBohórquez",
    "Renan",
    "IvanL'olivier",
    "Shonero",
    "Luichidev",
    "Faviola Narvaez",
    "Christopher Fuentes",
    "Kuro",
    "Juan Pablo Addeo",
    "Sergio Martínez",
    "Fran Enriquez González",
    "Diana",
    "tictools",
    "ConchaAsensio",
    "Emilio_Arreaza",
    "novamix",
    "Tomas Duclos",
    "Elaya",
    "Ignacio Palominos",
    "David C.",
    "Gerardo Felipe Conrado",
    "ElXuri",
    "David Borja Martinez",
    "JaviFelices",
    "CarlesSànchez"
  ]
// let arr = [0,1,2,3,4,5,6,7,8,9]
// let arr1 = [0,2,4,6,8]
// let arr2 = [4,8]
// let arr3 = [4]
// console.log(arr.length)


// let copy = [...arr]

// let func = arr => {
//     if(arr.length <= 2) {
//         let index = copy.findIndex(e => e === arr[0])
//         return `${arr[0]}-${index}`
//     }
//     let newArr = arr.filter((e,i) => { if(i % 2 === 0) return e })
//     if(arr.length % 2 === 0) newArr.unshift(arr[0])
//     return func(newArr)
// };

// console.log(func(arr))

const hungerGames = (arr) => {
    let p = 2 * (arr.length - 2 ** Math.floor(Math.log2(arr.length)));
    return [arr[p], p];
  };
  console.log(hungerGames(arr))