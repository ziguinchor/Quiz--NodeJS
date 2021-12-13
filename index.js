import express, { request, response } from "express";
// this line use to access this module 
import qustionrouter from './Routes/Questions.js';

const app=express();


// this function use accept cors mean accept for application anguler to access node js apis
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//this port to run server
const port=5000;

// this is root page
app.get(`/`,(request,response)=>{
  response.send("med");
});

// tjis line use to access for question module
app.use("/Questions",qustionrouter);

// this line createe the server in port 5000
app.listen(port,()=>console.log('The Server is running on Port '+port));
