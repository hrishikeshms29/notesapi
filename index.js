const express=require('express')
const notesController=require('./controllers/noteContorller')
const defaultController=require('./controllers/defaultController')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/crud',notesController);
app.use('/*',defaultController);
const PORT=process.env.PORT||3000
app.listen(PORT,(req,res)=>{
    console.log(`server started at port ${PORT}`)
})