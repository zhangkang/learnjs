/*
 * @Author: ZhangKang
 * @Date: 2021-04-28 20:45:57
 * @LastEditTime: 2021-04-28 21:14:45
 * @FilePath: \nwjs\main.js
 * @Description: 
 * @Copyright: © 2021, learnjs. All rights reserved.
 */
var ws=require("nodejs-websocket")
var port =8001;
var user=0;
var server=ws.createServer(function(conn){
    console.log("New connetion")
    user++;
    conn.nickname="user"+user;
    conn.fd="user"+user;
    var mes={};
    mes.type="enter";
    mes.data=conn.nickname+" 进来了"
    broadcast(JSON.stringify(mes));
    conn.on("text",function(str){
        console.log("Received"+str)
        mes.type="message";
        mes.data=conn.nickname+" 说: "+str;
        broadcast(JSON.stringify(mes));
        //conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close",function(code,reason){
        console.log("Connection closed");
        mes.type="leave";
        mes.data=conn.nickname+" 离开了";
    })
    conn.on("error",function(err){
        console.log("error:"+err);
    });
}).listen(port);
function broadcast(str){
    server.connections.forEach(function(conn){
        conn.sendText(str);
    });
}
