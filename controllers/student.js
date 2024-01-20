import { body, validationResult } from "express-validator";
import HttpStatusCode from "../exceptions/HttpStatusCode.js";
import {studentRepository} from '../repositories/index.js'
async function getAllStudents(req, res){
  
    res.status(HttpStatusCode.OK).json({
        message: 'Get student succesfully',
        data:[
            {
                name:'Pham Quan',
                email:'phamquan@gmail.com',
                age: 22
            },
            {
                name:'Pham Duc',
                email:'phamduc@gmail.com',
                age: 20
            },
            {
                name:'Pham Anh',
                email:'phamanh@gmail.com',
                age: 23
            }
        ]
    })  

    //bao loi 500
    // res.status(500).json({
    //     message: 'Cannot get student'
    // })
}

async function getStudentById(req,res){

}

async function updateStudent(req,res){

}

async function insertStudent(req,res){
    try {
        const student = await studentRepository.insertStudent(req.body)
        res.status(HttpStatusCode.INSERT_OK).json({
            message: 'Insert student successfully',
            data: student
        })
    }catch(exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: 'Cannot insert student:'+exception,
            validationErrors: exception.validationErrors
        })
    }
}
async function generateFakeStudents(req,res){
    await studentRepository.generateFakeStudents(req.body)
    res.status(HttpStatusCode.INSERT_OK).json({
        message: 'Insert fake student successfully',
    })
}
export default{
    getAllStudents,
    getStudentById,
    updateStudent,
    insertStudent,
    generateFakeStudents
    
}
