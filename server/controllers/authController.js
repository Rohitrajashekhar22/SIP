import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerUser = async (req, res) => {

   try {

      const { name, email, password } = req.body;

      console.log(req.body);

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
         name,
         email,
         password: hashedPassword
      });

      res.status(201).json({
         message: "User Registered"
      });

   } catch (error) {

      console.log(error);

      res.status(500).json({
         message: "Server Error"
      });

   }
};


export const loginUser = async (req, res) => {

   const { email, password } = req.body;

   try {

      const user = await User.findOne({ email });

      if (!user) {

         return res.status(404).json({
            message: "User not found"
         });
      }

      const isPasswordCorrect =
         await bcrypt.compare(
            password,
            user.password
         );

      if (!isPasswordCorrect) {

         return res.status(400).json({
            message: "Invalid credentials"
         });
      }

      const token = jwt.sign(
         { id: user._id },
         process.env.JWT_SECRET,
         { expiresIn: '1h' }
      );

      return res.status(200).json({
         message: "User logged in successfully",
         token,
         user: {
            id: user._id,
            email: user.email
         }
      });

   } catch (error) {

      return res.status(500).json({
         message: "Something went wrong"
      });

   }
};