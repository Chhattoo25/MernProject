const express = require('express');
const cors = require('cors');
const { connection } = require('./config/db');


const app = express()
app.use(express.json())
app.use(cors())

require('dotenv').config()
const PORT = process.env.PORT || 4000

app.get("/",(req,res)=>{
 res.send("hello world")
})
app.get("/about",(req,res)=>{
 res.send("hello anbout")
})
app.get("/contact",(req,res)=>{
 res.send("hello contact")
})
app.get("/signup",(req,res)=>{
 res.send("hello signup")
})
app.get("/signin",(req,res)=>{
 res.send("hello signin")
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