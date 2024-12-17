import { userModel } from "../models/userModel.mjs";

const usersController = {
    postUser: async (req, res) =>{
        const {first_name, last_name, email, username, password, repass} = req.body;
        

        if(first_name.length ===0 || last_name.length === 0 || email.length === 0 || username.length === 0
            ||password.length === 0 || repass.length === 0){
            res.status(409).json({status:'err', msg:'field cannot be empty'})
        }


        try {
            
            const checkUserEmail = await userModel.checkUserEmail(
                email,              
            )

          
            if(checkUserEmail === 1){
                return res.status(409).json({status:'err', msg: 'user with this credentials already exsist'})
            }
           
            const createUser = await userModel.postUser(
                first_name,
                last_name,
                email,
                username,
                password,
            )

            if (createUser === 0){
                res.status(500).json({status: 'err', msg:'DB connection error'})
            }            

           res.status(200).json({status: 'ok', msg: 'user created success'})
            


        } catch (error) {
            console.error(error)
        }


    }
}

export {usersController}