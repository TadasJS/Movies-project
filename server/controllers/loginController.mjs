import { loginModel } from "../models/loginModel.mjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'


const loginController = {

  postUsers:  async (req, res) => {
    const {email, password} = req.body    
    
    dotenv.config()

try {
  const loginValuesCheck = await loginModel.checkLoginValues(
    email,
    password
  )
  
  if (loginValuesCheck.length === 0 ){
    return res.status(404).json({status:'err', msg:'check your email and password'
    })
  }


  const token = jwt 
 
  const accessToken = token.sign(loginValuesCheck[0], process.env.ACCESS_TOKEN_SECRET)
  res.status(200).json({status: 'ok', msg:'user loged in',token : accessToken}) 

  // res.status(200).json({status: 'ok', msg: 'user loged in', data: loginValuesCheck})

} catch (error) {
  console.error(error)
}
    
}

}

export {loginController}