// import { Student } from "../models";
import Exception from "../exceptions/Exception.js";
import {Student} from "../models/index.js"


const getAllStudents = async ({ page, size, searchString }) => {
  console.log("get all students with paging");
};

const insertStudent = async ({
  name,
  email,
  languages,
  gender,
  phoneNumber,
  address,
}) => {
//   console.log("insert student");
   try {
    debugger
    const student =await Student.create({
        name,
        email,
        languages,
        gender,
        phoneNumber,
        address
    })
    return student;
        // debugger
   } catch (exception) {
    //error from validations
    if(!! exception.errors){
        throw new Exception('Input error',exception.errors)
    }
        debugger
   }
   debugger
};

export default {
  getAllStudents,
  insertStudent,
};
