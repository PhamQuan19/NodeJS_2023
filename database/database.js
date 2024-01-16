import mongoose from "mongoose";
import { 
    OutputType,
    print
} from "../helpers/print.js"
import Exception from "../exceptions/Exception.js";

mongoose.set('strictQuery',true)

async function connect(){
    try {
        let connection= await mongoose.connect(process.env.MONGO_URI);
        // debugger
        print('connect mongoose successfully', OutputType.SUCCESS)
        // console.log('connect mongoose successfully');
        return connection;
    } catch (error) {
        // debugger
        const {cost} =error;
        // debugger
        if(error.code==8000){

            throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD)
            // throw new Error("Wrong database username or password");
        }else if(code=='ENOTFOUND'){
            // throw new Error("Wrong server name or connection string");
            throw new Exception(Exception.WRONG_CONNECTION_STRING);
        }
        throw new Exception(Exception.CANOT_CONNECT_MONGODB);
    }
}  

export default connect
