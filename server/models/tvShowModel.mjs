import { pool } from "../database/postgresConnection.mjs";

const tvShowModel = {
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
