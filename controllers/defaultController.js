const router=require('express').Router()
router.get('/',async(req,res)=>{
    res.json({"server":"i am running"})
})

module.exports=router