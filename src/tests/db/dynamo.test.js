import { DynamoDB } from "../../db/dynamodb";

describe('Pruebas de DynamoDB', () => {

    test('DynamoDB es un objeto', () => {
        expect(typeof DynamoDB).toBe('object');
    });

    test('DynamoDB tienes las funciones get,put,scan', () => {
        expect(typeof DynamoDB.get).toBe('function');
        expect(typeof DynamoDB.put).toBe('function');
        expect(typeof DynamoDB.scan).toBe('function');
    });

    const validTableName = 'VehicleTable';
    const data = {
        id: "d0590c21-734a-4d52-825f-9c81475e994a",
        nombre: "BMW X6",
        modelo: "BMW X6",
        pilotoId: 5,
        longitud: 37.5,
        pasajeros: 4,
        personal: 10
    };
    const list = [
        {
            id: "d0590c21-734a-4d52-825f-9c81475e994a",
            nombre: "BMW X6",
            modelo: "BMW X6",
            pilotoId: 5,
            longitud: 37.5,
            pasajeros: 4,
            personal: 10
        }

    ];

    test('La función PUT de DynamoDB funciona', async () => {
        expect.assertions(1);
        try {
            const res = await DynamoDB.put(data, validTableName);
            expect(res).toBe(data);
        } catch (error) {
            console.log('error en prueba de funcion PUT DynamoDB', error);
        }
    });

    test('La función GET de DynamoDB funciona', async () => {
        expect.assertions(1);
        try {
            const res = await DynamoDB.get(data.id, validTableName);
            expect(res).toEqual(data);
        } catch (error) {
            console.log('error en prueba de funcion GET DynamoDB', error);
        }
    });

    test('La función SCAN de DynamoDB funciona', async () => {
        expect.assertions(1);
        try {
            const res = await DynamoDB.scan(validTableName);
            expect(res).toEqual(list);
        } catch (error) {
            console.log('error en prueba de funcion SCAN DynamoDB', error);
        }
    });

});