const express = require("express");
const cors = require('cors');

const forest=require('./routes/forest')
const hills=require('./routes/hills');
const home=require('./routes/home');
const lakes=require('./routes/lakes');
const tribes=require('./routes/tribes');

const app=express();

app.use(cors());
app.use("/",forest);
app.use("/",hills);
app.use("/",home);
app.use("/",lakes);
app.use("/",tribes);

app.listen(5050,function(){
    console.log("server is running at port 5050")
})