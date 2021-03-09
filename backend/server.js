const express=require('express');
var cors = require('cors')
const app=express();
app.use(cors())
const mongoose = require('mongoose')
const routerpath=require('./routes/routes')
mongoose.connect('mongodb://localhost/project',{ useNewUrlParser: true, useCreateIndex:true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});
app.use(express.json());

app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain 
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // allowed actiosn
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200); // to deal with chrome sending an extra options request
    }
  
    next(); // call next middlewer in line
  });
app.use('/',routerpath)
app.listen(4585,()=>{
    console.log("server is running ");
})