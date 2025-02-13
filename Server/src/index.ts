import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import Router from "./routes";
import connection from "./sequelize/db/db";
import { authenticate } from "./sequelize/db/authenticate";
import cors from "cors";
import { corsOptions } from "./config/corsConfig";

const PORT = process.env.PORT || 8000;

const app: Application = express();
app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.get("/ping", async (_req, res) => {
  res.send({
    message: "pong",
  });
});
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    // swaggerOptions: {
    //   url: "/swagger.json",
    // },
    swaggerOptions: {
      url: "/swagger.json",
      docExpansion: "none", // Collapse all sections by default
      defaultModelsExpandDepth: 1, // Expand only the top level
      defaultModelExpandDepth: 1, // Expand only the top level properties
      defaultModelRendering: "example", // Show example model by default
      displayRequestDuration: true, // Display request duration
      filter: true, // Enable search/filtering
      operationsSorter: "alpha", // Sort operations alphabetically
      tagsSorter: "alpha", // Sort tags alphabetically
    },
  })
);
app.use(Router);

const isDev = process.env.SYNC_DB ? process.env.SYNC_DB === 'true' : false;

// Define an asynchronous function to start the server and sync the database
const start = async (): Promise<void> => {
  try {
    await authenticate();
    await connection.sync({ alter: isDev }); // Synchronizes the database with the defined models
    app.listen(PORT, () => {
      const url = `http://localhost:${PORT}`;
      console.log(`Server is running on port ${PORT}`);
      console.log(`Visit: \x1b[34m${url}\x1b[0m`); // Blue color for the URL
      console.log(`Swagger API: \x1b[34m${url}/docs\x1b[0m`); // Blue color for the Swagger URL
    });
  } catch (error) {
    console.error(error); // Logs any errors that occur
    process.exit(1); // Exits the process with an error status code
  }
};

void start(); // Invokes the start function to start the server
