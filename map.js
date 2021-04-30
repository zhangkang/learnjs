/*
 * @Author: ZhangKang
 * @Date: 2021-04-30 21:29:08
 * @LastEditTime: 2021-04-30 22:21:22
 * @FilePath: \learnjs\map.js
 * @Description: 
 * @Copyright: © 2021, learnjs. All rights reserved.
 */
var ZeroRTCMap=function(){
    this._entrys=new Array();
    this.put=function(key,value){
        if(key==null || key==undefined){
            return;
        }
        var index=this._getIndex(key);
        if(index==-1){
            var entry =new Object();
            entry.key=key;
            entry.value=value;
            this._entrys[this._entrys.length]=entry;
        } else{
            this._entrys[index].value=value;
        }
    };
    this.get=function(key){
        var index=this._getIndex(key);
        return (index!=-1)?this._entrys[index].value:null;
    };
    this.remove=function(key){
        var index=this._getIndex(key);
        if(index!=-1){
            this._entrys.splice(index,1);
        }
    };
    this.clear=function(){
        this._entrys.length=0;
    };
    this.contains=function(key){
        var index=this._getIndex(key);
        return(index!=-1)?true:false;
    };
    this.size=function(){
        return this._entrys.length;
    };
    this._getIndex=function(key){
        if(key==null|| key==undefined){
            return -1;
        }
        var _length=this._entrys.length;
        for(var i=0;i<_length;i++){
            var entry=this._entrys[i];
            if(entry==null||entry==undefined){
                continue;
            }
            if(entry.key===key){
                return i;
            }
        }
        return -1;
    };
}

function Client(uid,conn,roomId){
    this.uid=uid;
    this.conn=conn;
    this.roomId=roomId;
    console.log('uid:'+uid+',conn:'+conn+',roomId:'+roomId);
}

var roomMap=new ZeroRTCMap();
console.log('\n\n------------Math.random()-----------------');
var random=Math.random();
console.log('\n\n------------Math.random()-----------------'+random);
console.log('\n\n------------Math.random().toString(10)----'+random.toString(10));
console.log('\n\n------------Math.random().toString(36)----'+random.toString(36));
console.log('\n\n------Math.random().toString(36).substr(0)'+random.toString(36).substr(0));
console.log('\n\n------Math.random().toString(36).substr(1)'+random.toString(36).substr(1));
console.log('\n\n------Math.random().toString(36).substr(2)'+random.toString(36).substr(2));
console.log('\n\n------------create client----');
var roomId=100;
var uid1=Math.random().toString(36).substr(2);
var conn1=100;
var client1=new Client(uid1,conn1,roomId);


var uid2=Math.random().toString(36).substr(2);
var conn2=101;
var client2=new Client(uid2,conn2,roomId);


console.log('\n\n-----------put-----------');
console.log('roomMap put client1');
roomMap.put(uid1,client1);
console.log('roomMap put client2');
roomMap.put(uid2,client2);
console.log('roomMap size:'+roomMap.size());

console.log('\n\n-----------------get----------------');
var client =null;
var uid=uid1;
client=roomMap.get(uid);
if(client!=null){
    console.log('get client->'+'uid:'+client.uid+',conn:'+client.conn+',roomId:'+client.roomId);
}
else{
    console.log("can't find the client  of "+uid);
}
roomMap.remove(uid);
console.log("remove clientid:"+uid);
client=roomMap.get(uid);
if(client!=null){
    console.log('get client->'+'uid:'+client.uid+',conn:'+client.conn+',roomId:'+client.roomId);
}
else{
    console.log("can't find the client  of "+uid);
}
console.log('roomMap size:'+roomMap.size());
roomMap.clear();
console.log('roomMap size:'+roomMap.size());