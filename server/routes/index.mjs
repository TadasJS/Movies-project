import express from 'express'
import { dbtest } from "./dbTestRoutes.mjs";
import { movieCard } from "./moviesRoutes.mjs";

const api = express.Router()

api.use('/dbtest', dbtest)
api.use('/mcard',movieCard)

export { api }