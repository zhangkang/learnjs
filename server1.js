/*
 * @Author: ZhangKang
 * @Date: 2021-04-28 20:45:57
 * @LastEditTime: 2021-04-28 20:49:32
 * @FilePath: \nwjs\index.js
 * @Description: 
 * @Copyright: © 2021, SteelHome. All rights reserved.
 */
var ws=require("nodejs-websocket")
//
var server=ws.createServer(function(conn){
    console.log("New connetion")
    conn.on("text",function(str){
        console.log("Received"+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close",function(code,reason){
        console.log("Connection closed")
    })
    conn.on("error",function(err){
        console.log("error:"+err);
    });
}).listen(8001)
