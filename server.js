import express from 'express'
import  *as dotenv from 'dotenv';
dotenv.config(); //bắt buộc 

import connect from './database/database.js';
import {
    usersRouter,
    studentRouter
} from './routes/index.js'
//authentication middleware
import checkToken from './authentication/auth.js';
const app = express();

app.use(checkToken)

app.use(express.json())
const port =process.env.PORT || 5000

app.use('/users', usersRouter)
app.use('/students', studentRouter)

app.get('/', (req, res) =>{
    res.send('response from root router')
})
app.listen(port, async() =>{
    await connect();
    console.log(`listening on port: ${port}`)
})




// import {
//     sum,
//     multiply,
//     substract
// } from './calculation.js'
// var name ="Quan";
// console.log(name);
// console.log(`Tong: ${sum(3,5)}`)
// console.log(`Hieu: ${substract(7,5)}`)
// console.log(`Tich: ${multiply(3,5)}`)

