import AWS from "aws-sdk";

let options = {};

if (process.env.JEST_WORKER_ID) {
  options = {
      endpoint: 'http://localhost:8000',
      region: 'local-env',
      sslEnabled: false,
  };
}

const documentClient = new AWS.DynamoDB.DocumentClient(options);

export const DynamoDB = {
  async get(ID, TableName) {
    const params = {
      TableName,
      Key: {
        id: ID,
      },
    };

    const data = await documentClient.get(params).promise();

    if (!data || !data.Item) {
      throw Error(
        `Hubo un error al obtener el registro con ID : ${ID} de la tabla : ${TableName}`
      );
    }

    return data.Item;
  },

  async put(data, TableName) {
    const params = {
      TableName,
      Item: data,
    };

    const res = await documentClient.put(params).promise();

    if (!res) {
      throw Error(
        `Hubo un error al registrar en la tabla : ${TableName}`
      );
    }

    return data;
  },

  async scan(TableName) {
    const params = {
      TableName,
    };

    const data = await documentClient.scan(params).promise();

    if (!data || !data.Items) {
      throw Error(
        `Hubo un error al obtener registros de la tabla : ${TableName}`
      );
    }

    return data.Items;
  },
};

