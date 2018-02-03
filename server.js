const express = require('express');
const consolidate = require('consolidate');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const coojieSession = require('cookie-session');
const selfconfig = require('./config');
const secret = require('./secret');

let server = express();

// 处理请求
server.use("/admin/",require("./routers/admin"));
server.use("/www/",require("./routers/www"));
server.use(express.static("./www"))

// 设置编译的模板引擎
server.set("html",consolidate.ejs)
// 设置引擎目录
server.set("views","./template")
// 设置模板的后缀名
server.set("view engine","ejs")

// 处理普通post请求
server.use(bodyParser.urlencoded({extended:false}))

// 处理图片请求
server.use(multer({dest:"./upload/"}).any());

// 处理mysql
let db = mysql.createPool({host:selfconfig.dbHoat,"user":selfconfig.dbUsername,
    "password":selfconfig.dbPassword,"database":selfconfig.dbDatebase})
server.use((req,res,next)=>{
    req.db = db;
    next();
})

// 处理cookie
server.use(cookieParser(secret.cookiesSalt))
server.use(coojieSession({
    keys:secret.sessionSalt
}))

server.listen(selfconfig.sPort);