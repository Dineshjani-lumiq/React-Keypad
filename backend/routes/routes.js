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
router.post('/findname',(req,res)=>{
  console.log("on serverside");
  console.log(req.body.number);
 var t=req.body.number;
 
 /*          0    1    2      3     4     5     6    7      8    9                    */
 var key = ["","abc","def", "ghi","jkl","mno","pqr","stu","vwx","yz"];
 var list =["batman","thor","spiderman","hulk","caption","hulk","deadpool","thanos","aquaman","darkseid","catwoman","vision","thor","joker","deadpool","antman","blur","*","0","#"];



var n=t.length;
var flag=1;
/* recursion    */
function permutation(i,str){
if(i==n){
  /*  if string persent in list then send this string */
  if(list.indexOf(str)>-1){
   flag=0;
    res.send(str);
    return;
  }
  return;
}
console.log(i);
/* convert integer to that string char*/
var p=parseInt(t[i]);
var x=key[p].length;
console.log(p);
/* recursion go to next index and add char to string*/
for(let j=0;j<x;j++){
 
 console.log(i);
  permutation(i+1,str+key[p][j]);
}

}

permutation(0,"")
  
  if(flag==1){
  res.send("-1");}
  
})

  

module.exports=router