# Reto Rimac - Serverless Framework & DynamoDB

## Operaciones disponibles para pruebas

| Operation | Type | URI |
| --------- | ---- | --- |
| Obtiene un vehículo disponible.| GET  | https://vxprgsu0o7.execute-api.us-west-2.amazonaws.com/dev/vehicles/:id |
| Registrar un vehículo. | POST  | https://vxprgsu0o7.execute-api.us-west-2.amazonaws.com/dev/vehicles |
| Obtiene la lista de vehículos disponibles. | GET  | https://vxprgsu0o7.execute-api.us-west-2.amazonaws.com/dev/vehicles |

## API Externa Utilizada

* SWAPI - The Star Wars API: https://swapi.py4e.com/documentation

## Plugins utilizados

* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): 
Plugin que permite aprovechar los pseudoparámetros de CloudFormation.

* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-bundle): Bundler basado en el complemento serverless-webpack: No requiere configuración y es compatible con las funciones de ES6 / ES7.

## Iniciando
Realizar el siguiente comando para instalar las dependencias

```
npm install
```
## Despliegue
```
serverless deploy
```

## Pruebas
```
npm run test
```
