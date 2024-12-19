
import { tvShowModel } from "../models/tvShowModel.mjs"


const tvShowsController = {
  getTvShows: async (req, res) => {
    try {
      const dbTvShowsData = await tvShowModel.getTvShows()
      res.status(200).json({
        status:'ok', 
        msg:'Get all tvshows list',
        data: dbTvShowsData,
      })

    } catch (err) {
        console.error(err)
        res.status(500).json({ status: 'err', msg: "Can't get tvshows data" });
    }
  },

  getTvShowById: async (req, res) => {
    const { id } = req.params; 
  
    try {
      const tvShow = await tvShowModel.getTvShowById(id);
  
      if (tvShow.length === 0) {
        return res.status(404).json({
          status: 'err',
          msg: 'tvShow not found',
        });
      }
  
      res.status(200).json({
        status: 'ok',
        msg: 'tvShow found',
        data: tvShow,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'err', msg: "Can't get tvShow data" });
    }
  },

  postTvShows: async (req, res) => {
    const {title, description, img_url, thumbnail_url, year, genreid, rating } = req.body

    // validacija Start

    if(title.length === 0 || description.length === 0 || img_url.length === 0 || thumbnail_url.length === 0
      || year.length === 0 || genreid.length === 0 || rating.length === 0){

     return res.status(409).json({status:'err', msg:'field cannot be empty'})

    }
   
    // if(typeof year !== 'number' || year < 1928 || year > 2025){
    //   return res.status(409).json({status:'err', msg:'year must be number, year must be 1928-2025 digits'})
    // }


    // if(typeof rating !== 'number' || rating < 1 || rating > 10 ) {
    //   return res.status(409).json({status:'err', msg:'rating must be number from 1-10'})
    // }    
    
    try {

    const checkGenreSize = await tvShowModel.genreSizeTvShow()
    
    if(genreid > checkGenreSize.length || genreid < 0  ){
      return res.status(409).json({status:'err', msg:'wrong genre'})
    }
    
    //validacija End
    
    
      const postTvShowResult = await tvShowModel.createTvShow({

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
        msg:'Create tvshow success',
        data:postTvShowResult
      })

    } catch (err) {
      console.error(err)
      res.status(500).json({ status: 'err', msg: "Can't create tvshow" });
    }
  },
  
  putTvShows: async (req, res) => {
    const {id} = req.params
    const newData = req.body

    console.log('controlerio data...',newData)
  

   try {
    const updateTvShow = await tvShowModel.updateTvShow(
      id,
      newData
    )
    if(updateTvShow === 0){
      return res.status(404).json({
        status:'err',
        msg:'tvshow not found'
      })
    }
    res.status(200).json({status:'ok', msg:'tvshow updated success'})
   } catch (error) {
    console.error(error)
   }
    
      
  },
  
  deleteTvShows: async (req, res) => {
    const {id} = req.params
    try {
      const deleteTvShow = await tvShowModel.deleteTvShow(
        id,
      )
 
      if(deleteTvShow === 0){
        res.status(404).json({status:'err', msg:'tvshow cannot be deleted' })
      }

      res.status(200).json({status:'ok', msg:'tvshow deleted success'})
    } catch (error) {
      console.error(error)
    }
  }
  
  
}
export { tvShowsController }



