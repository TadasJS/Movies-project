import express from "express";

import moviesRoutes from "./moviesRoutes.mjs";
import tvShowsRoutes from "./tvShowsRoutes.mjs"

const router = express.Router();

router.use("/movies", moviesRoutes);
router.use("/tvshows", tvShowsRoutes);

export default router;