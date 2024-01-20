import validator from "validator";
import { 
    OutputType,
    print
} from "../helpers/print.js"

export default class Exception extends Error{
    static WRONG_DB_USERNAME_PASSWORD= "Wrong database username or password";
    static WRONG_CONNECTION_STRING="Wrong server name or connection string";
    static CANOT_CONNECT_MONGODB="Cannot connect to MongoDB";
    static USER_EXIST="User already exists";
    static CANOT_REGISTER_USER ="Cannot register user";
    static WRONG_EMAIL_AND_PASSWORD ="Wrong email and password"



    constructor(message, validationErrors={}){
        //goi phuong thuc cua lop cha
        super(message) 
        print(message, OutputType.ERROR)
        this.validationErrors=validationErrors
    }
}