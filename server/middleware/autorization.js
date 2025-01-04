import jwt from "jsonwebtoken"
import dotenv from 'dotenv'


dotenv.config()


export function authorizationToken (req, res, next) {

  console.log('cia prasideda autorizacija')
   
  const authHeader = req.headers['token']
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)

  try {
    req.user = jwt.verify(token.toString(), process.env.PRIVAT_KEY)
    next();
  } catch (error) {
    console.error(error)
    res.status(401).json({staus: 'err', msg: 'unauthorized'})
  }
    
}