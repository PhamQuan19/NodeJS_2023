import { body, validationResult } from "express-validator";
const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  res.send("Post login users");
};

const register =async(req, res) =>{
    res.send('Post register users')
}

const getDetailUser=async(req,res) =>{

}

export default{
    login,
    register,
    getDetailUser
}