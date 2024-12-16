import { loginModel } from "../models/loginModel.mjs"

const loginController = {
postUsers: async (req, res) => {
    const {email, password} = req.body

    if(email.length < 6){
      return  res.status(409).json({status: 'err', msg: 'email must be more then 6 symbols'})
    }

    if(password.length < 6){
        return  res.status(409).json({status: 'err', msg: 'password must be more then 8 symbols'})
    }
try {
  const loginValuesCheck = await loginModel.checkLoginValues(
    email,
    password
  )

  if (loginValuesCheck === 0 ){
    return res.status(404).json({status:'err', msg:'check your email and password'
    })
  }

  res.status(200).json({status: 'ok', msg: 'user loged in'})

} catch (error) {
  console.log(error)
}
    
}

}

export {loginController}