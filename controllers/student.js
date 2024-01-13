import { body, validationResult } from "express-validator";
import HttpStatusCode from "../exceptions/HttpStatusCode.js";
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

}

export default{
    getAllStudents,
    getStudentById,
    updateStudent,
    insertStudent
}
