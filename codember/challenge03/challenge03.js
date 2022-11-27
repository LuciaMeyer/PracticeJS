import axios from 'axios';

const coloredZebra = async () => {

    const chrisLights = (await axios.get('https://codember.dev/colors.txt')).data;
    console.log(chrisLights);
};

coloredZebra();