import { pool } from "../database/postgresConnection.mjs";

const movieModels = {

getMovies: async () => {
    try {
        const result = await pool.query("SELECT * FROM movies");   
        return result.rows;
    } catch (error) {
        console.error(error);
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

}

export {movieModels}