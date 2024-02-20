const router=require('express').Router()
const client=require('../db')
const {v4:uuidv4}=require('uuid')
router.get('/getallNotes',async(req,res)=>{
    try{
    const response=await client.query('select * from notesdata');
    const data=response.rows;
    res.status(200).json(data)
    }catch(e){
        console.log(e)
        res.status(500).json({"message":"some internal error"})
    }
})
router.post('/addNote',async(req,res)=>{
    const note=req.body.note
    try{
        console.log(note)
        const note_id=uuidv4()
        let response=await client.query(`insert into notesdata (note_id,note) values ('${note_id}','${note}')`)
        console.log(response)
        res.status(201).json({"message":"note added successfully","id":note_id})
    }catch(e){
        console.log(e)
        res.status(400).json({"message":"something went wrong"})
    }
})
router.patch('/editNote/:id',async(req,res)=>{
    const id=req.params.id
    const note=req.body.note
    try{

        let response=await client.query(`update notesdata set note='${note}' where note_id='${id}'`)
        console.log(response)
        res.status(200).json({"message":"note modified successfully"})
    }catch(e){
        console.log(e)
        res.status(400).json({"message":"something went wrong"})
    }
})
router.delete('/deleteNote/:id',async(req,res)=>{
    const id=req.params.id
    try{
        let response=await client.query(`delete from notesdata where note_id='${id}'`)
        console.log(response)
        res.status(200).json({"message":"note deleted successfully"})
    }catch(e){
        console.log(e)
        res.status(400).json({"message":"something went wrong"})
    }
})
module.exports=router;