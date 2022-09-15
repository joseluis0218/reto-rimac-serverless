export const vehicleSchema = {
    type: "object",
    properties: {
        body: {
            type: "object",
            properties: {
                nombre: { type: "string" },
                modelo: { type: "string" },
                longitud: { type: "number" },
                pasajeros: { type: "number" },
                pilotoId: { type: "number" },
                personal: { type: "number" },
            },
            required: ["nombre", "modelo", "longitud", "pasajeros", "pilotoId", "personal"],
        },
    },

};