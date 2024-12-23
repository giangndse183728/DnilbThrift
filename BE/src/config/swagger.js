// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js API',
      version: '1.0.0',
      description: 'A simple API documentation using Swagger and Node.js',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Your server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your API routes files
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
