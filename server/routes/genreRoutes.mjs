import express from 'express'
import { genreController } from '../controllers/genreController.mjs'


const genre = express.Router()

genre.get('/', genreController.genreGet )
genre.get('/:id', genreController.genreGetById )
genre.post('/', genreController.genrePost )
genre.delete('/:id', genreController.genreDelete )
genre.put('/:id', genreController.genrePut )

export { genre }