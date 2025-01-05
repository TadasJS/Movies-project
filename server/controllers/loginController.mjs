import { loginModel } from "../models/loginModel.mjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const loginController = {
  postUsers: async (req, res)  => {
    const { email, password } = req.body;

    try {
      const loginValuesCheck = await loginModel.checkLoginValues(
        email,
        password
      );

      if (!loginValuesCheck) {
        return res
          
          .json({ status: "err", msg: "check your email and password" });
      }

        delete loginValuesCheck.password

      const token = jwt.sign(loginValuesCheck, process.env.PRIVAT_KEY);

      res.cookie('token', token, {httpOnly: true,})

      res.status(200).json({status: 'ok', msg: 'user loged in', token: token})
    } catch (error) {
      console.error(error);
    }
  },
};

export { loginController };
