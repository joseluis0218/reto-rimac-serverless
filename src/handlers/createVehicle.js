import { DynamoDB } from "../db/dynamodb";

import { v4 as uuid } from 'uuid';

import createError from 'http-errors';

import middy from "@middy/core";

import validator from "@middy/validator";

import httpErrorHandler from "@middy/http-error-handler";

import jsonBodyParser from "@middy/http-json-body-parser";

import { vehicleSchema } from "../schemas/input/vehicleSchema";

async function createVehicle(event, context) {


    // Propiedades en ESPAÑOL por requerimiento del reto.
    const { nombre, modelo, longitud, pasajeros, pilotoId, personal } = event.body;

    const today = new Date();

    const newVehicle = {
        id: uuid(),
        nombre,
        modelo,
        longitud,
        pasajeros,
        pilotoId,
        personal,
        status: 'ACTIVE',
        createdAt: today.toISOString(),
    };

    await DynamoDB.put(newVehicle, process.env.VEHICLE_TABLE_NAME)
        .catch(err => {
            throw new createError.InternalServerError(err);
        });

    return {
        statusCode: 201,
        body: JSON.stringify(newVehicle),
    };
}

const handler = middy(createVehicle)
.use(jsonBodyParser())
.use(
  validator({
    inputSchema : vehicleSchema,
  })
)
.use(httpErrorHandler());

export {handler}

