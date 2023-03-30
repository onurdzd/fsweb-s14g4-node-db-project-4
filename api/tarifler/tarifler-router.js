const express = require('express')
const router = express.Router()
const Tarif=require("./tarifler-model")

router.get("/" ,async(req,res,next)=>{
    const tarifler=await Tarif.find()
    res.status(201).json(tarifler)
})

module.exports=router