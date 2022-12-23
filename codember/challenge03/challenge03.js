import axios from 'axios';

const lights = async () => {

    const colors = (await axios.get('https://codember.dev/colors.txt')).data;
    // console.log(colors)
    
    let maxLength = 0
    let maxLastColor = ''
    let lastColor = ''
    let nextColor = colors[0]
    let currentLength = 0

    colors.forEach(color => {
        if (color === lastColor) return currentLength = 0
        if (color !== nextColor || lastColor === color) currentLength = 1
        currentLength++
        [lastColor, nextColor] = [color, lastColor]
        if (currentLength >= maxLength) {
            maxLength = currentLength
            maxLastColor = lastColor
        }
    })
    console.log(`${maxLength}@${maxLastColor}`)
};

lights();

