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
  apis: ["./src/docs/swagger/index.yml"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.post("/items", controllers.createItem);
app.get("/items", controllers.getItems);
app.put("/items/:id", controllers.updateItem);
app.post("/items/:id/events", controllers.addEvent);
app.get("/items/:id/events", controllers.getEvents);
app.get("/items/:id/events/last", controllers.getLastEvent);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
