const express =require('express');
const router=express.Router();
const  sticker=require('../models/models.js')
var myArray = {1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq-8KwQec6KnDmUBfFpne8jXpsIKE87sGvA&usqp=CAU",2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThb2bhKZo1mc0SloD3nySgMPZIz1ON2d_ejQ&usqp=CAU" ,3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNv5uuTgKDuryWeUxqRfsBWfC0O-Ddrql31g&usqp=CAU"};
          
router.post('/find',(req,res)=>{
  
          var num=req.body.p;
          console.log(num);

          
         

//sticker.find({id:num},function(err,ans){
    //if(err){
      //return  res.send('error in fetching content');}

 //return res.send(ans);

 //console.log(typeof(num));
 
 
 res.status(200).send({
   message:myArray[parseInt(num)]
 });
 
 return;
 
 
 



})
router.post('/add',(req,res)=>{
  console.log(req.body.number);
  var t=parseInt(req.body.number)
  
  myArray[t]=req.body.image;
  
})
  

module.exports=router