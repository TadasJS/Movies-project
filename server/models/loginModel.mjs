import { pool } from "../database/postgresConnection.mjs"

const loginModel = {
    
    checkLoginValues: async (email, password) => {
        try {
            const checkLoginValues = await pool.query(`SELECT * FROM users_secrets, users WHERE password = $1 and email = $2;`,
               [password, email]
            )
                     
           return checkLoginValues.rowCount
            
            
        } catch (error) {
            console.error(error)
        }

    }
}

export { loginModel}