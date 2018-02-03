/**
 * Created by bxl on 2018/2/3.
 */

const express = require("express");
let route = express.Router();

// admin 全局设防
route.use((req,res,next)=>{

})
route.get("/",(req,res,next)=>{

})
module.exports=route