import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose';
import recipieRoutes from './Routes/recipieRoutes.js'
import authRoutes from './Routes/authRoutes.js'
import cookieParser from 'cookie-parser';

// Using the dotenv and invoking the config 
dotenv.config(); 

const app = express();
app.use(express.json());  
app.use(cookieParser());

// This is for sending the Normal response. 
app.get('/', (req,res)=>{
    res.send("currently at home")
})

// This is for sending the content in json 
app.get('/contact', (req, res)=>{
    res.status(200).json({"message":"Hello this is contact"})
})

// Calling the env file port
const port = process.env.PORT; 

app.listen(port, ()=> {
    console.log("App is listing on port ", port); 
})


app.use("/api/recipie",recipieRoutes); 
app.use("/api/auth",authRoutes); 

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("connected to the db"))
.catch((error) => console.log("DB connection error", error))