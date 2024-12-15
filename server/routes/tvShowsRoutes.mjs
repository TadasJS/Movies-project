import express from 'express'
import { tvShowsController } from '../controllers/tvShowsController.mjs'


const tvshows = express.Router()

tvshows.get('/', tvShowsController .getTvShows)
tvshows.post('/', tvShowsController.postTvShows)




//Tado delete, update
// tvshows.put('/:id', tvShowsController.putTvShows)
// tvshows.delete('/:id', tvShowsController.deleteTvShows)

export {tvshows}