import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import shopRouter from "./router/shopRouter.js"
// import plimit from 'p-limit'
import userRouter from "./router/userRouter.js"
import cartRouter from './router/cartRouter.js'

dotenv.config()

const app=express();

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
  }))




app.use("/cart",cartRouter)
app.use("/shop",shopRouter)
app.use("/user",userRouter)
const start=async()=>{
    try{
       await connectDB()
    }
    catch(error){
        console.log(error)
    }
}

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("the port is running on ",process.env.PORT)
})
start()

