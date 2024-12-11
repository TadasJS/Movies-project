import express from "express";

import { moviesController } from "../controllers/index.mjs";

const router = express.Router();

router.get("/", moviesController.getMovies);
router.get("/:id", moviesController.getMoviesById);
router.put("/:id", moviesController.updateMovie);
export default router;