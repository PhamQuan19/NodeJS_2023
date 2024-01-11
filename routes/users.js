import express from 'express'
import {body, validationResult} from 'express-validator';
const router = express.Router()

router.get('/', (req, res)=> {
    res.send('Get users')
})

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({min:5}),
    (req, res) =>{
        const error =validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({error: error.array()});
        }
    const {email, password} =req.body
    res.send('Post login users')
})

router.post('/register',(req, res) =>{
    res.send('Post register users')
})

export default router