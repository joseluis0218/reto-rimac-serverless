import { getPerson } from '../../client/getPerson';

describe('Pruebas de servicio externo', () => {

    const pilot = {
        nombre: "Wedge Antilles",
        color_cabello: "brown",
        color_ojo: "hazel",
        color_piel: "fair",
        genero: "male"
    }

    test('Obtener información de un piloto', async() => {

        const result = await getPerson(18);
    
        expect(result).toStrictEqual(pilot);
    
    });

});