import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { userRouter } from "./Routers/user.js";
import { isAuthenticated } from "./Authentication/auth.js";
import { carsRouter } from "./Routers/cars.js";

// const PORT=8080;

//config the envirnoment
dotenv.config();
const PORT= process.env.PORT
//initiating server
const app = express();

//middle ware
app.use(express.json())
app.use(cors())

//cars routers
app.use("/cars",isAuthenticated,carsRouter )
app.use("/user",userRouter)
  

//starting the server
app.listen(PORT, ()=>console.log(`server running localhost:${PORT}`))

