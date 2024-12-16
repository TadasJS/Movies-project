import { pool } from "../database/postgresConnection.mjs";

const tvShowModel = {


getTvShows: async () => {
    try {
        const result = await pool.query("SELECT * FROM tv_shows ORDER BY id ASC ");   
        return result.rows;
    } catch (error) {
        console.error(error);
    }
},

genreSizeTvShow: async () => {
    try {
       const genreSize = await pool.query(`SELECT * FROM genres ORDER BY id ASC`)
        return genreSize.rows
    } catch (error) {
       console.error(error) 
    }
    
},

createTvShow: async (jonas) => {
    const {title, description, img_url, thumbnail_url, year, genreid, rating } = jonas
    const genreidInt = parseInt(genreid)
    const yearInt = parseInt(year)
    const ratingInt = parseInt(rating)
    try {
       const insertTvShow = await pool.query(`
        INSERT INTO tv_shows (title, description, img_url, thumbnail_url, year, genreid, rating )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING title, description, img_url, thumbnail_url, year, genreid, rating`, 
        [title, description, img_url, thumbnail_url, yearInt, genreidInt, ratingInt] )
        
       return insertTvShow.rows[0]

        
    } catch (error) {
        console.error(error)
    }
},

// updateTvShow: async (id, newData) => {
    
//     try {
        
//      const updateTvShow = await pool.query(
//          `UPDATE tv_shows 
//       SET title = $1, 
//       description = $2, 
//       img_url = $3, 
//       thumbnail_url = $4, 
//       year = $5, 
//       genreid  = $6, 
//       rating = $7
//       where id = $8`, [newData.title, 
//         newData.description, 
//         newData.img_url, 
//         newData.thumbnail_url, 
//         newData.year, 
//         newData.genreid, 
//         newData.rating, 
//         id,
//      ]
//      ) 
    
//      return updateTvShow.rowCount
//     } catch (error) {
//         console.error(error)   
//     }  
// },

// deleteTvShow: async (id) => {
//     try {
//         const deleteTvShow = await pool.query( `
//         DELETE FROM tv_shows
//         WHERE id = $1;`,
//         [id] )
        
//         return deleteTvShow.rowCount
        
//     } catch (error) {
//        console.error(error) 
//     }
// },

}  
export {tvShowModel}
=======
  getTvShows: async () => {
    const client = await pool.connect();
    try {
      const query = `
        SELECT 
            tv_shows.*,
            genres.genre_type 
        FROM 
            tv_shows
        JOIN 
            genres 
        ON 
            tv_shows.genreid = genres.id
        ORDER BY 
          tv_shows.id ASC;
    `;
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  },
  getTvShowsById: async (id) => {
    let client;
    try {
        const client = await pool.connect();
      const query = `
            SELECT 
                tv_shows.*,
                genres.genre_type
            FROM 
                tv_shows
            JOIN 
                genres 
            ON 
                tv_shows.genreid = genres.id
            WHERE 
                tv_shows.id = $1;
        `;
      const result = await client.query(query, [id]);
      return result.rows[0];
    } finally {
      if(client) client.release();
    }
  },
  updateTvShow: async (id, tvShowData) => {
    let client;
    try {
      client = await pool.connect();
      const query = `
        UPDATE tv_shows
        SET 
          title = $1,
          description = $2,
          img_url = $3,
          thumbnail_url = $4,
          year = $5,
          genreid = $6,
          rating = $7,
          updated_at = CURRENT_TIMESTAMP
        WHERE 
          id = $8
        RETURNING *;
      `;

      const {
        title,
        description,
        img_url,
        thumbnail_url,
        year,
        genreid,
        rating,
      } = tvShowData;

      const result = await client.query(query, [
        title,
        description,
        img_url,
        thumbnail_url,
        year,
        genreid,
        rating,
        id,
      ]);

      return result.rows[0]; 
    } finally {
      if (client) client.release();
    }
  },
};

export default tvShowModel;

