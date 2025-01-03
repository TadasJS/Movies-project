import jwt from "jsonwebtoken"
import dotenv from 'dotenv'


dotenv.config()


export function authenticateToken (req, res, next) {
  console.log('cia prasideda autentikacija')
    const authHeader = req.headers['token']
    console.log(req.headers)
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(401)
        
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403) // reskia kad tokenas nevalidus
        req.user = user
        next()
      })  
    
}