import { genreModels } from "../models/genreModels.mjs"


const genreController = {

    genreGet: async (req, res) => {
        try {
            const genreData = await genreModels.genreData()
           
            res.status(200).json({
                status: 'ok', 
                msg:'all genre data received',
                data:genreData})

        } catch (error) {
          console.error(error)  
        }
    },

    genrePost: async (req, res) => {
        const { genre } = req.body
      
        try {
            const genreFind = await genreModels.genreFind(genre)
    
            if(genreFind > 0){
               res.status(409).json({status: 'err', msg: 'genre already exists'})
            }   

            const genreCreate = await genreModels.genrePost(genre)
          
            if(genreCreate === 1){
                res.status(200).json({status: 'ok', msg: 'genre is created '})
            }
            
        } catch (error) {
            console.error(error)
        }

    },

    genreDelete: async (req, res) => {
        const {genre} = req.body
      
        try {
            const genreDelete = await genreModels.genreDelete(genre)
           
            if(genreDelete > 0){
                res.status(200).json({status: 'ok', msg: 'Genre completely deleted'})
            }else{
                res.status(404).json({status:'err', msg:'No data to delete'})
            }

        } catch (error) {
          console.error(error)  
        }

    }
}

export {genreController}