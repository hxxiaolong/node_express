/**
 * Created by bxl on 2018/2/3.
 */
const express = require("express");
let route = express.Router()
route.get("/",(req,res,next)=>{
    res.send("www root")
})
module.exports=route


