import express from "express";
import { pgConnection } from "./database/postgresConnection.mjs";
import routes from "./routes/index.mjs";
import errorHandler from "./middleware/errorHandlerMiddleware.mjs";
import cors from "cors";

const initDataBase = async () => {
  try {
    await pgConnection();
    console.log("DB init success");
  } catch (error) {
    console.error("DB init failure", error);
    process.exit(1);
  }
};

const startServer = async () => {
  await initDataBase();
  const PORT = 3000;
  const app = express();

  

  app.use(cors());
  app.use(express.json());
  app.use("/api/v1", routes);
  app.use(errorHandler); 

  app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
};

startServer();
