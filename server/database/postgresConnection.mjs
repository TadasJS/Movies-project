import pg from 'pg'

const {Pool, } = pg

export const pool = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'master',
    database: 'movies-project'
})


async function pgConnection () {
    try{
        await pool.connect(); 
        console.log('Database connected successfully')       
    } catch (error) {
        console.error(error.stack)
        throw error;
    }
}
export { pgConnection }