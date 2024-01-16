import { OutputType, print } from "../helpers/print.js";

import { User } from "../models/index.js";
import bcrypt from "bcrypt";
import Exception from "../exceptions/Exception.js";
import jwt from "jsonwebtoken";
const login = async ({ email, password }) => {
  // print('login user in user repository haha', OutputType.INFORMATION)
  let existingUser = await User.findOne({ email }).exec();
  if (existingUser) {
    //not encrypt pass
    let isMatch = await bcrypt.compare(password, existingUser.password);
    if (!!isMatch) {
      //create Java web Token
      let token = jwt.sign(
        {
          data: existingUser,
        },
        process.env.JWT_SECRET,
        {
          // expiresIn: '60'
          expiresIn: "10 days",
        }
      );
      //clone an add more properties
      return {
        ...existingUser.toObject(),
        password: "not show",
        token: token,
      };
    } else {
      throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD);
    }
  } else {
    throw new Exception(Exception.WRONG_EMAIL_AND_PASSWORD);
  }
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  debugger;
  const existtingUser = await User.findOne({ email }).exec();
  if (!!existtingUser) {
    throw new Exception(Exception.USER_EXIST);
  }
  //encrypt pass use bcrypt
  //danh cho login
  //    const isMatched = await bcrypt.compare(password, existtingUser.password)
  //     if(isMatched){

  //     }
  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUNDS)
  );
  //insert db
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    phoneNumber,
    address,
  });
  return {
    ...newUser._doc,
    password: "Not show",
  };
  // print('register user with: name: '+name+'email'+
  // email+'password'+password+'phone'+phoneNumber+'address'+address, OutputType.INFORMATION);
};

export default {
  login,
  register,
};
