const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const userRouter=require('./router/user_router')

mongoose.connect("mongodb://localhost:27017/mern_crud")
.then(()=>console.log("Database connect successfully"))
.catch((err)=>console.log(err))

app.use(express.json());
app.use(cors())

app.use('/user',userRouter)

app.listen(3001,()=>{
    console.log("server have running on http://localhost:3001");
})