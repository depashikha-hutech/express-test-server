const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("welcome to local host");
    
});
app.listen(3001,()=>{
    console.log("listing...");

});
app.get('/user',(req,res)=>{
    res.send("welcome user");
});
app.get('/user/:userid',(req,res)=>{
    res.send(req.parms)

});