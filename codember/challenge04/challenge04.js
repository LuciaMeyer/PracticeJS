const isValid = num => {
    let five = 0
    let numString = num.toString()
    for (let i = 0; i < numString.length; i++) {
        if(numString[i+1] < numString[i]) return false
        if(numString[i] === '5') five++
    }
    return five >= 2
};

let from = 11098, to = 98123
const numbers = (from, to) => {
    let arrValidNum = []
    while(from !== to) {
        if(isValid(from)) arrValidNum.push(from)
        from++
    }
    return `${arrValidNum.length}-${arrValidNum[55]}`
}; 

console.log(numbers(from, to)) // 165-23555
console.log(isValid(55678)) // true
console.log(isValid(12555)) // true
console.log(isValid(55555)) // true
console.log(isValid(12345)) // false
console.log(isValid(57775)) // false
