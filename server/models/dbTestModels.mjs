import { pool } from "../database/postgresConnection.mjs";

const DbTestModel = {
  getMovies: async () => {
    try {
      const result = await pool.query("SELECT * FROM movies");
   
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },
};

export { DbTestModel };
