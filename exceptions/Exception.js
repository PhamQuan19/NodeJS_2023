import { 
    OutputType,
    print
} from "../helpers/print.js"

export default class Exception extends Error{
    static WRONG_DB_USERNAME_PASSWORD= "Wrong database username or password";
    static WRONG_CONNECTION_STRING="Wrong server name or connection string";
    static CANOT_CONNECT_MONGODB="Cannot connect to MongoDB";
    static USER_EXIST="User already exists"
    static CANOT_REGISTER_USER ="Cannot register user"
    constructor(message){
        super(message) //goi phuong thuc cua lop cha
        print(message, OutputType.ERROR)
    }
}