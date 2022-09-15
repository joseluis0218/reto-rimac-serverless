import { DynamoDB } from "../db/dynamodb";

import createError from "http-errors";

async function getVehicles(event, context) {
    try {
        let vehicles = await DynamoDB
        .scan(process.env.VEHICLE_TABLE_NAME)
        .catch((err) => {
          console.log("Error en funcion SCAN DynamoDB", err);
          throw new createError.InternalServerError(err);
        });
    
      return {
        statusCode: 200,
        body: JSON.stringify(vehicles),
      };   
    } catch (error) {
        console.log("Error listando vehiculos", error);
    }
}

export const handler = getVehicles;
