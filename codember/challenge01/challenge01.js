import axios from 'axios';

const fixTwitter = async () => {

    const usersTxt = (await axios.get('https://codember.dev/users.txt')).data;
    const KEYS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

    let currentUser = 0;
    const users = usersTxt.split('\n').reduce((acc, value) => {
        if(value === '') currentUser++;
        acc[currentUser] = acc[currentUser] ? [acc[currentUser], value].join(' ') : value;
        return acc;
    },[]);

    const validUsers = users.filter(u => {
        return KEYS.every(key => u.includes(`${key}:`));
    })  

    console.log(validUsers.length, validUsers.pop());
}

fixTwitter();

// solution >> $ submit 156@giroz 


/* PASO A PASO 
- con split guardo en un array cada renglon como una cadena separada de la siguiente por un salto de línea
- con reduce busco unir todos los datos de un mismo usuario en una sola cadena hasta q se encuentre con un ''
que es lo que separa del próximo usuario
filtro cada una de esas cadenas para validar que tenga todos los datos requeridos KEYS
*/