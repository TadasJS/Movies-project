import { pool } from "../database/postgresConnection.mjs";

const movieModel = {
  getMovies: async () => {
    let client;
    try {
        const client = await pool.connect();
      const query = `
            SELECT 
            movies.*,
            genres.genre_type
        FROM 
            movies
        JOIN 
            genres 
        ON 
            movies.genreid = genres.id
        ORDER BY 
          movies.id ASC;
            `;

      const result = await client.query(query);
      return result.rows;
    } finally {
      if(client) client.release();
    }
  },

  getMoviesById: async (id) => {
    let client;
    try {
        const client = await pool.connect();
      const query = `
            SELECT 
                movies.*,
                genres.genre_type
            FROM 
                movies
            JOIN 
                genres 
            ON 
                movies.genreid = genres.id
            WHERE 
                movies.id = $1;
        `;
      const result = await client.query(query, [id]);
      return result.rows[0];
    } finally {
      if(client) client.release();
    }
  },
  updateMovie: async (id, movieData) => {
    let client;
    try {
      client = await pool.connect();
      const query = `
        UPDATE movies
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
      } = movieData;

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

export default movieModel;
