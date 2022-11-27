const text = ['11610497110107115', '102111114', '11210897121105110103', '9911110010110998101114', '11210810197115101', '11510497114101']
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

const catchCybercriminals = (text, obj) => {
    let letter = '';
    let nextWord = '';
    text.forEach(word => {
        while(!!word.length){
            if(word[0] === '1') {
                let ver = word.slice(0,3);
                letter += obj[ver];
                nextWord = word.slice(3, word.length);
            }
            else {
                let ver1 = word.slice(0,2);
                letter += obj[ver1];
                nextWord = word.slice(2, word.length);
            }
            word = nextWord;
        }
        letter += ' '; 
    });
    return letter;
}
console.log(catchCybercriminals(text, obj)) // thanks for playing codember please share



