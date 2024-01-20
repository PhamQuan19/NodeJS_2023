import express from 'express'
import { studentController } from "../controllers/index.js";
const router = express.Router()

router.get('/', studentController.getAllStudents)
//get by id
router.get('/:id', studentController.getStudentById)
//insert
router.post('/',studentController.insertStudent)
//Put or patch
//Put khong tim thay doi tuong nao thi thoi
router.patch('/',studentController.updateStudent)


// router.post('/generateFakeStudents',studentController.generateFakeStudents)


export default router