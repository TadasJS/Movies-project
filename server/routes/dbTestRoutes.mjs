import express from 'express'
import { dbTestController } from '../controllers/dbTestController.mjs'
import { authorizationToken } from '../middleware/autorization.js'



const dbtest = express.Router()

dbtest.get('/', authorizationToken,  dbTestController.getDbTest)

export { dbtest } 