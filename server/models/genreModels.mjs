import { pool } from "../database/postgresConnection.mjs"


const genreModels = {
genreData: async () => {
    try {
        const genreData = await pool.query(`SELECT * FROM genres ORDER BY id ASC`)       
        return genreData.rows
        
    } catch (error) {
        console.error(error)
    }
},

genreFind: async (data) => {
    
    try {
        const genreFind = await pool.query(`SELECT * FROM genres WHERE genre_type = $1;`, [data])
       
        return genreFind.rowCount

    } catch (error) {
       console.error(error) 
    }
},

genrePost: async (data) => {
    try {
        const genreCrete = await pool.query('INSERT INTO genres (genre_type) VALUES ($1);',[data])
        return genreCrete.rowCount
    } catch (error) {
       console.error(error) 
    }
},

genreDelete: async (data) => {
   
    try {
      const genreDeleted = await pool.query('DELETE FROM genres * WHERE genre_type = $1;',[data])
       return genreDeleted.rowCount
    } catch (error) {
        console.error(error) 
    } 
}

}
export { genreModels }