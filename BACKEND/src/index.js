//const express = require("express")
import express from "express"
import authRoute from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js"
import {app, server} from "./lib/socket.js"

console.log(process.env.MONGODB_URL);

dotenv.config();



const port = process.env.PORT

app.use(express.json())
app.use(cookieParser()); 
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

app.use("/api/auth", authRoute)
app.use("/api/messages", messageRoute)

server.listen(port, () => {
    console.log("server is running on PORT:" +port)
    connectDB()
})