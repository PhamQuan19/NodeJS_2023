import { body, validationResult } from "express-validator";
import HttpStatusCode from "../exceptions/HttpStatusCode.js";
import {studentRepository} from '../repositories/index.js';
import { MAX_RECORDS } from "../Global/constants.js";

async function getAllStudents(req, res){
    //http:localhost: 3000?page=1&size =100
    let {page=1, size=MAX_RECORDS, searchString=''}=req.query
    size =size >= MAX_RECORDS ? MAX_RECORDS :size
    try {
        let filtereStudents=await studentRepository.getAllStudents({
            size, page, searchString 
        })
        res.status(HttpStatusCode.OK).json({
            message: 'Get student succesfully',
            size: filtereStudents.length,
            page,
            searchString,
            data:filtereStudents,
        })  
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message:exception.message
        })
    }


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
