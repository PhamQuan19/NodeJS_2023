import express from 'express'
import  *as dotenv from 'dotenv';
import usersRouter from './routes/users.js'
dotenv.config(); //bắt buộc 
const app = express();
const port =process.env.PORT || 5000

app.use('/users', usersRouter)

app.get('/', (req, res) =>{
    res.send('response from root router')
})
app.listen(port, async() =>{
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

