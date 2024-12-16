
import express from 'express'
import {  movieController } from '../controllers/moviesController.mjs'


const movies = express.Router()

movies.get('/', movieController.getMovie)
movies.post('/', movieController.postMovie)




//Tado delete update
// movies.put('/:id', movieController.putMovie)
// movies.delete('/:id', movieController.deleteMovie)

export {movies}


