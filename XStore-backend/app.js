//external Modules
const express=require('express');
const { default: mongoose } = require('mongoose');
//local Modules

const DB_PATH="mongodb+srv://chiragtyagi253_db_user:root@chirag.z6fugae.mongodb.net/XStore?appName=Chirag"
const app=express();

app.use(express.urlencoded({extended:true}))

mongoose.connect(DB_PATH).then(()=>{
  const PORT=3001
app.listen(PORT,()=>{
  console.log(`This is the server link http://localhost:${PORT}`)
})
})
.catch(err=>console.log("Problem in Database",err))
