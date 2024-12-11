import express from "express";

import { tvShowsController } from "../controllers/index.mjs";

const router = express.Router();

router.get("/", tvShowsController.getTvShows);
router.get("/:id", tvShowsController.getTvShowsById);
router.put("/:id", tvShowsController.updateTvShow);


export default router;