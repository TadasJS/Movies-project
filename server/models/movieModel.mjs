import { pool } from "../database/postgresConnection.mjs";

const movieModel = {


getMovies: async () => {
    try {
        const result = await pool.query("SELECT * FROM movies");   
        return result.rows;
    } catch (error) {
        console.error(error);
    }
},

getMovieById: async (id) => {
    try {
      const result = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);
      return result.rows; 
    } catch (error) {
      console.error(error);
    }
  },

genreSizeMovie: async () => {
    try {
       const genreSize = await pool.query(`SELECT * FROM genres ORDER BY id ASC`)
        return genreSize.rows
    } catch (error) {
       console.error(error) 
    }
},

createMovie: async (jonas) => {
    const {title, description, img_url, thumbnail_url, year, genreid, rating } = jonas
    const genreidInt = parseInt(genreid)
    const yearInt = parseInt(year)
    const ratingInt = parseInt(rating)
    try {
       const insertMovie = await pool.query(`
        INSERT INTO movies (title, description, img_url, thumbnail_url, year, genreid, rating )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING title, description, img_url, thumbnail_url, year, genreid, rating`, 
        [title, description, img_url, thumbnail_url, yearInt, genreidInt, ratingInt] )
        
       return insertMovie.rows[0]

        
    } catch (error) {
        console.error(error)
    }
},

updateMovie: async (id, newData) => {
    
    try {
        
     const updateMovie = await pool.query(
         `UPDATE movies 
      SET title = $1, 
      description = $2, 
      img_url = $3, 
      thumbnail_url = $4, 
      year = $5, 
      genreid  = $6, 
      rating = $7
      where id = $8`, [newData.title, 
        newData.description, 
        newData.img_url, 
        newData.thumbnail_url, 
        newData.year, 
        newData.genreid, 
        newData.rating, 
        id,
     ]
     ) 
     console.log(updateMovie.rowCount)
    
     return updateMovie.rowCount
    } catch (error) {
        console.error(error)   
    }  
},

deleteMovie: async (id) => {

    const deleteMovie = await pool.query( `
    DELETE FROM movies
    WHERE id = $1;`,
    [id] )

    console.log(deleteMovie.rowCount)
    return(deleteMovie.rowCount)
}
    
}
export {movieModel}


