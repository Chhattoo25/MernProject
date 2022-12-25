const express = require('express');
const cors = require('cors');
const { connection } = require('./config/db');
const { AuthRouter } = require('./routers/auth');


const app = express()
app.use(express.json())
app.use(cors())

require('dotenv').config()
const PORT = process.env.PORT || 4000
// auth routes
app.use("/auth",AuthRouter)

app.get("/",(req,res)=>{
 res.send("hello welcome")
})



app.listen(PORT,async()=>{
 try{
 await connection
 console.log("connected to DB successfully")
 }
 catch(err){
 console.log(err);
 }
 console.log("server started at http://localhost:8080");
})