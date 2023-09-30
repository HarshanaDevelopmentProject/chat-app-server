 const WebSocket= require("ws");
const express=require('express');
const http=require('http');
const cors= require('cors');

const app=express();
const server =http.createServer(app);
const wss=new WebSocket.Server({server});

app.use(cors());

let userName='';

let usersArray=[];

wss.on("connection" ,(ws)=>{

    console.log(" Connected ");
    // wss.clients.forEach((cli)=>{
    //     console.log(cli)
    // })






ws.on("message" ,(data)=>{

     console.log("here " + data);
    wss.clients.forEach((client)=>{
            client.send(data.toString());

    })
});

ws.on("close" ,()=>{
    console.log('client Disconnected')
});
}
);




 server.listen(3000,()=>{
    console.log('Waiting For chat.......');
});