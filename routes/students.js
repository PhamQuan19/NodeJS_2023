import express from 'express'
const router = express.Router()

router.get('/', (req, res)=> {
    res.send('Get students')
})

//get by id
router.get('/:id', (req, res) =>{
    // debugger
    res.send('Get detail student by id: '+req.params.id)
})

router.post('/',(req, res) =>{
    res.send('Post insert students')
})


//Put or patch
router.patch('/',(req, res) =>{
    res.send('Patch(neu khong co doi tuong thi tao ra doi tuong moi) insert students')
})

export default router