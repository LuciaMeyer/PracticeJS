
// const line = ['11610497110107115', '102111114', '11210897121105110103', '9911110010110998101114', '11210810197115101', '11510497114101']

let obj = {
    97: 'a',
    98: 'b', 
    99: 'c',
    100: 'd',
    101: 'e',
    102: 'f',
    103: 'g',
    104: 'h',
    105: 'i',
    106: 'j',
    107: 'k',
    108: 'l',
    109: 'm',
    110: 'n',
    111: 'o',
    112: 'p',
    113: 'q',
    114: 'r',
    115: 's',
    116: 't',
    117: 'u',
    118: 'v',
    119: 'w',
    120: 'x',
    121: 'y',
    122: 'z'
}

let line = '11610497110107115'
let letter = '';
let word = '';
for (let i = 0; i < line.length; i++) { 
    if(line[0] === '1') {
        let ver = line.slice(0,3)
        letter += obj[ver]
        // letter.push(obj[ver])
        word = line.slice(3, line.length)
    }
  else {
        let ver1 = line.slice(0,2)
        letter += obj[ver1]
        word = line.slice(2, line.length)
  }
  line = word
  if(word.length <=3) letter += obj[word]
  console.log(letter) // thanks
  console.log(word)
}


