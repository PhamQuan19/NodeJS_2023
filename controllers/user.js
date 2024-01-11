import { body, validationResult } from "express-validator";
const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ 
      error: error.array()
     });
  }
  const { email, password } = req.body;
  res.status(200).json({
    message:'login user successfully',
    // data: "detail user ..."
  });
};

const register =async(req, res) =>{
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