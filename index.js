const express = require('express');

const app = express();


app.get("/", (req,res)=>{
    res.json({msg : "This is the initial state"});
});

app.listen(8000, ()=>{
    console.log("Server running at port 8000");
});