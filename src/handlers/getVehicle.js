import { DynamoDB } from "../db/dynamodb";
import { getPerson } from "../client/getPerson";
import createError from "http-errors";

async function getVehicle(event, context) {

  if (!event.pathParameters || !event.pathParameters.id) {
    return new createError.BadRequest("Falta el id del vehiculo solicitado");
  }

  const { id } = event.pathParameters;

  let vehicle = await DynamoDB
    .get(id, process.env.VEHICLE_TABLE_NAME)
    .catch(err => {
      console.log("Error en funcion GET DynamoDB", err);
      throw new createError.InternalServerError(err);
    });

  if (!vehicle) {
    throw new createError.NotFound(`No se encontro un vehiculo con el id : "${id}"`);
  }

  // Obtener datos del piloto del vehiculo solicitado
  vehicle.piloto = await getPerson(vehicle.pilotoId);

  return {
    statusCode: 200,
    body: JSON.stringify(vehicle),
  };
}

export const handler = getVehicle;
