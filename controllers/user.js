import { 
  body,
  param,
  validationResult
} from "express-validator";

import {
  studentRepository,
  userRepository,
} from '../repositories/index.js'

import {EventEmitter} from 'node:events'
const myEven=new EventEmitter();

myEven.on('event.register.user', (params)=>{
  console.log(`They talked about: ${JSON.stringify(params)}`)
})


const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ 
      error: error.array()
     });
  }
  const { email, password } = req.body;
  //call repository
  await userRepository.login({email,password})
  res.status(200).json({
    message:'login user successfully',
    // data: "detail user ..."
  });
};

const register =async(req, res) =>{
  const {
    name,
    email,
    password,
    phoneNumber,
    address
}= req.body
await userRepository.register({name,email,password,phoneNumber,password,address})
myEven.emit('event.register.user',{email, phoneNumber});
    res.status(201).json({
      message: 'register user successfully'
    });
}

const getDetailUser=async(req,res) =>{

}

export default{
    login,
    register,
    getDetailUser
}