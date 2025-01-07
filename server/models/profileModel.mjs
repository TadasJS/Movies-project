import { pool } from "../database/postgresConnection.mjs";

const profileModel = {

    getAllData: async () => {
        try {
            const allData = await pool.query(`SELECT * FROM movies UNION SELECT * FROM tv_shows ORDER BY id ASC `)
            console.log(allData.rows)
            return allData.rows[0]
        } catch (error) {
            console.error(error)
        }



    }



}

export {profileModel}