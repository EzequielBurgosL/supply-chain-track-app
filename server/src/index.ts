import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import { createItem, updateItem, addEvent, getEvents, getLastEvent } from "./controllers";

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
  apis: ["./index.ts"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.post("/items", createItem);
app.put("/items/:id", updateItem);
app.post("/items/:id/events", addEvent);
app.get("/items/:id/events", getEvents);
app.get("/items/:id/events/last", getLastEvent);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
