import express from "express";
import { pgConnection } from "./database/postgresConnection.mjs";
import { pool } from "./database/postgresConnection.mjs";

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

  app.get("/", (req, res) => {
    res.status(200).json({ status: 200, msg: "SERVER HOME PAGE..." });
  });

  app.get("/dbtest", (req, res) => {
    try {
      pool.query("SELECT * FROM movies", (error, results) => {
        res.status(200).json(results.rows);
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 500, msg: "Can't get users data" });
    }
  });

  app.get("*", (req, res) => {
    res.status(200).json({ status: 200, msg: "SERVER NO PAGE" });
  });

  app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
};

startServer();
