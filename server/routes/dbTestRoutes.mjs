import express from 'express'
import { dbTestController } from '../controllers/dbTestController.mjs'
import { authenticateToken } from '../middleware/authenticate.js'



const dbtest = express.Router()

dbtest.get('/', authenticateToken,  dbTestController.getDbTest)

export { dbtest } 