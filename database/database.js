import mongoose from "mongoose";
// const mongoose = require('mongoose');
async function connect(){
    try {
        let connection= await mongoose.connect(process.env.MONGO_URI);
        console.log('connect mongoose successfully');
        return connection;
    } catch (error) {
        // debugger
        throw new Error("Cannot connect to MongoDB")
    }
}  

export default connect
