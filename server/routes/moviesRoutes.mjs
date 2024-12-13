import express from 'express'
import {  movieController } from '../controllers/moviesController.mjs'


const movieCard = express.Router()

movieCard.get('/', movieController.getMovie)
movieCard.post('/', movieController.postMovie)

export {movieCard}