const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware
const dbConfig = require('./config/db.config');
const productRoutes = require('./routes/product.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); // Import the swagger.js file

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware to parse JSON
app.use(express.json());

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000', // React frontend URL during development
  methods: 'GET,POST,PUT,DELETE', // Allowed methods
  credentials: true, // Allow cookies if necessary
};
app.use(cors(corsOptions));

// MongoDB connection
mongoose.connect(dbConfig.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use product routes
app.use('/api', productRoutes); // Mount routes on `/api`

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
