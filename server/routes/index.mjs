
import express from 'express'
import { dbtest } from "./dbTestRoutes.mjs";
import { movies } from "./moviesRoutes.mjs";
import { tvshows } from './tvShowsRoutes.mjs';
import { login } from './loginRoutes.mjs';

const api = express.Router()

api.use('/dbtest', dbtest)
api.use('/movies',movies)
api.use('/tvshows',tvshows)
api.use('/login',login)

api.get('/', (req, res) => {
    res.status(200).json({status:'ok', msg:'Wrong address. API page is being created. Try another address'})
})


export { api }


