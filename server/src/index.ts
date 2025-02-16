import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import * as controllers from "./controllers";

const app = express();
app.use(express.json());
app.use(cors());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Supply Chain API",
      version: "1.0.0",
    },
  },
  apis: ["./src/index.ts"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: API for managing items
 * 
 * /items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: Item created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       500:
 *         description: Some server error
 * 
 *   get:
 *     summary: Retrieve a list of all items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 *       500:
 *         description: Some server error
 * 
 * /items/{id}:
 *   put:
 *     summary: Update an existing item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The item was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: The item was not found
 *       500:
 *         description: Some error happened
 * 
 * /items/{id}/events:
 *   post:
 *     summary: Add an event to an item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: Event added to the item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: The item was not found
 *       500:
 *         description: Some error happened
 * 
 *   get:
 *     summary: Get all events for an item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     responses:
 *       200:
 *         description: A list of events for the item
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       404:
 *         description: The item was not found
 *       500:
 *         description: Some error happened
 * 
 * /items/{id}/events/last:
 *   get:
 *     summary: Get the last event for an item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item ID
 *     responses:
 *       200:
 *         description: The last event for the item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: The item or event was not found
 *       500:
 *         description: Some error happened
 * 
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the item
 *           readOnly: true
 *         name:
 *           type: string
 *           description: The name of the item
 *           example: "Laptop"
 *         description:
 *           type: string
 *           description: A short description of the item
 *           example: "A high-performance laptop for developers"
 *       required:
 *         name
 *         description 
 *     Event:
 *       type: object
 *       properties:
 *         location:
 *           type: string
 *           description: The location of the event
 *           example: "Warehouse A"
 *         custodian:
 *           type: string
 *           description: The persone responsible of the event
 *           example: "John Doe"
 *         timestamp:
 *           type: number
 *           description: The timestamp of the event
 *           readOnly: true
 */
app.post("/items", controllers.createItem);
app.get("/items", controllers.getItems);
app.put("/items/:id", controllers.updateItem);
app.post("/items/:id/events", controllers.addEvent);
app.get("/items/:id/events", controllers.getEvents);
app.get("/items/:id/events/last", controllers.getLastEvent);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
