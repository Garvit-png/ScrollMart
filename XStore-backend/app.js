//external Modules
const express=require('express');
const { default: mongoose } = require('mongoose');
//local Modules
require('dotenv').config();

const app=express();

app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.DB_PATH).then(()=>{
  const PORT=process.env.PORT
app.listen(PORT,()=>{
  console.log(`This is the server link http://localhost:${PORT}`)
})
})
.catch(err=>console.log("Problem in Database",err))
