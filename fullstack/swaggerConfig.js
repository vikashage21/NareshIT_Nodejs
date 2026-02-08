import {configDotenv} from 'dotenv'

configDotenv()

const PORT = process.env.PORT || 3000

export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Restaurant API",
            version: "1.0.0",
            description: "Simple Restaurant API documentation",
        },
        servers: [
            {
                url: `http://localhost:${PORT}/api`,
            },
        ],
    },
   apis: ["./router/*.js"],
 // file where APIs are written
};
