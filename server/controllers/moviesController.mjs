import { movieModel } from "../models/movieModel.mjs";


const movieController = {
  getMovie: async (req, res) => {
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

  postMovie: async (req, res) => {
    const {title, description, img_url, thumbnail_url, year, genreid, rating } = req.body

    // validacija start

    if(title.length === 0 || description.length === 0 || img_url.length === 0 || thumbnail_url.length === 0
      || year.length === 0 || genreid.length === 0 || rating.length === 0){

     return res.status(409).json({status:'err', msg:'field cannot be empty'})

    }
   
    if(typeof year !== 'number' || year < 1888 || year > 2025){
      return res.status(409).json({status:'err', msg:'year must be number, year must be 1888-2025 digits'})
    }

    if(typeof rating !== 'number' || rating < 1 || rating > 10) {
      return res.status(409).json({status:'err', msg:'rating must be number from 1-10'})
    }   

    try {

    const checkGenreSize = await movieModel.genreSizeMovie()

    if(genreid > checkGenreSize.length || genreid < 0  ){
      return res.status(409).json({status:'err', msg:'wrong genre'})
    }

    //validacija end


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
  
//   putMovie: async (req, res) => {
//     const {id} = req.params
//     // console.log(id)
//    const newData = req.body
//   //  console.log(newData)

//    try {
//     const updateMovie = await movieModel.updateMovie(
//       id,
//       newData
//     )
// console.log('gryzes is models',updateMovie)

//     if(updateMovie === 0){
//       return res.status(404).json({
//         status:'err',
//         msg:'movie not found'
//       })
//     }
//     res.status(200).json({status:'ok', msg:'movie updated success'})
//    } catch (error) {
//     console.error(error)
//    }
    
      
//   },
  
//   deleteMovie: async (req, res) => {
//     const {id} = req.params
//     try {
//       const deleteMovie = await movieModel.deleteMovie(
//         id,
//       )

//       if(deleteMovie === 0){
//         res.status(404).json({status:'err', msg:'movie cannot be deleted' })
//       }

//       res.status(200).json({status:'ok', msg:'movie deleted success'})
//     } catch (error) {
//       console.error(error)
//     }
//   }
  
  
}
export { movieController }


