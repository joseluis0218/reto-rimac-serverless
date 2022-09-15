import axios from 'axios';

export async function getPerson(personId) {

    const resp = await axios.get(`https://swapi.py4e.com/api/people/${personId}`);

    const { name, hair_color, eye_color, skin_color, gender } = await resp.data;

    // Propiedades en ESPAÑOL por requerimiento del reto.

    return {
        nombre : name,
        color_cabello : hair_color,
        color_ojo : eye_color,
        color_piel : skin_color,
        genero : gender
    };

}
