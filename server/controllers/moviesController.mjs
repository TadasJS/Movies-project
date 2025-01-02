
import { movieModel } from "../models/movieModel.mjs";


const movieController = {
  getMovie: async (req, res) => {

    // const jwt = require('jsonwebtoken')

    try {
      const dbMoviesData = await movieModel.getMovies()
      res.status(200).json({
        status:'ok', 
        msg:'Get all movies list',
        data: dbMoviesData,
      })
      
      
    } catch (err) {
        console.error(err)
        res.status(500).json({ status: 'err', msg: "Can't get movies data" });
    }
  },

  getMovieById: async (req, res) => {
    const { id } = req.params; 
  
    try { 
      const movie = await movieModel.getMovieById(id);
  
      if (movie.length === 0) {
        return res.status(404).json({
          status: 'err',
          msg: 'Movie not found',
        });
      }
  
      res.status(200).json({
        status: 'ok',
        msg: 'Movie found',
        data: movie,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'err', msg: "Can't get movie data" });
    }
  },

  postMovie: async (req, res) => {
    const {title, description, img_url, thumbnail_url, year, genreid, rating } = req.body

    try {

    const checkGenre = await movieModel.genreidMovie(genreid)

    if(checkGenre === 0 ){
      return res.status(409).json({status:'err', msg:'wrong genre'})
    }

       const postMovieResult = await movieModel.createMovie({
        title,
        description,
        img_url,
        thumbnail_url,
        year,
        genreid,
        rating 
      })
      res.status(200).json({
        status:'ok',
        msg:'Create movie success',
        data:postMovieResult
      })

    } catch (err) {
      console.error(err)
      res.status(500).json({ status: 'err', msg: "Can't create movie" });
    }
  },
  
  putMovie: async (req, res) => {
    const {id} = req.params   
    const newData = req.body
  
   
   try {
    const updateMovie = await movieModel.updateMovie(
      newData,
      id,    
    )


    if(updateMovie === 0){
      return res.status(404).json({
        status:'err',
        msg:'movie not found'
      })
    }
    if(updateMovie === 'ERROR'){
      return res.status(500).json({
        status:'err',
        msg: "DB error"
      })
    }

    res.status(200).json({status:'ok', msg:'movie updated success'})
   } catch (error) {
    console.error(error)
   }
      
  },
  
  deleteMovie: async (req, res) => {
    const {id} = req.params
    try {
      const deleteMovie = await movieModel.deleteMovie(
        id,
      )

      if(deleteMovie === 0){
        res.status(404).json({status:'err', msg:'movie cannot be deleted' })
      }

      res.status(200).json({status:'ok', msg:'movie deleted success'})
    } catch (error) {
      console.error(error)
    }
  }
  
  
}
export { movieController }



