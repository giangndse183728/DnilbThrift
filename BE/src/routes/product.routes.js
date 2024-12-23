    const express = require('express');
    const { getAllItems } = require('../controllers/product.controller');
    const router = express.Router();

    /**
     * @swagger
     * /api/items:
     *   get:
     *     description: Get all items from the product catalog
     *     responses:
     *       200:
     *         description: A list of all items
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: integer
     *                     description: The item ID
     *                   name:
     *                     type: string
     *                     description: The name of the item
     *                   price:
     *                     type: number
     *                     format: float
     *                     description: The price of the item
     *       500:
     *         description: Internal server error
     */
    router.get('/items', getAllItems);

    module.exports = router;
