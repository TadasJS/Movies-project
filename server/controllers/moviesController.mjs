import { movieModels } from "../models/movieModels.mjs";


const movieController = {
  getMovie: async (req, res) => {
    try {
      const dbMoviesData = await movieModels.getMovies()
      res.status(200).json({
        status:'ok', 
        msg:'Get all movies list',
        data: dbMoviesData,
      })

    } catch (err) {
        console.error(err)
        res.status(500).json({ status: 'err', msg: "Can't get users data" });
    }
  },

  postMovie: async (req, res) => {
    const {title, description, img_url, thumbnail_url, year, genreid, rating } = req.body


    //nuo cia rasysiu validacija
    // if(title.length < 2 ){
    //   res.status(409).json({msg:'To short title name'})
    // }
    //iki cia rasau validacija
    try {
      const postMovieResult = await movieModels.createMovie({
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
  }
}






export { movieController }


