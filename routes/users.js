import express from 'express'
const router = express.Router()

router.get('/', (req, res)=> {
    res.send('Get users')
})

router.post('/login', (req, res) =>{
    res.send('Post login users')
})

router.post('/register',(req, res) =>{
    res.send('Post register users')
})

export default router