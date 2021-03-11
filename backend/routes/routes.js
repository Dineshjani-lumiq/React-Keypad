const express =require('express');
const router=express.Router();
const  sticker=require('../models/models.js')
/*var myArray = {1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq-8KwQec6KnDmUBfFpne8jXpsIKE87sGvA&usqp=CAU",2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThb2bhKZo1mc0SloD3nySgMPZIz1ON2d_ejQ&usqp=CAU" ,3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNv5uuTgKDuryWeUxqRfsBWfC0O-Ddrql31g&usqp=CAU"};
          */
router.post('/find',(req,res)=>{
  console.log(req.body.p);
  var p=req.body.p;
  

  sticker.find({id:p},function(err,ans){
    
    if(err||ans.length==0){
      res.status(201).json({
        message: 'error'
      });
    }
    else{
     
      res.send({
        message:"receiving data",
        data:ans
      });
    }

  })
  
})

router.post('/list',(req,res)=>{
  
        /*  var num=req.body.p;
          console.log(num); */

sticker.find({},function(err,ans){
    if(err){
    return  res.send('error in fetching content');}

 return res.send(ans);

 console.log(typeof(num));
 
 /*
 res.status(200).send({
   message:myArray[parseInt(num)]
 });
 */
 return;
 
 
 



})
})
router.post('/add',(req,res)=>{
  /*console.log(req.body.number);
  var t=parseInt(req.body.number)
  
  myArray[t]=req.body.image;
  */
  const Sticker = new sticker({
    id: req.body.number,
    sticker: req.body.image
  });
  Sticker.save().then(
    () => {
      res.status(201).json({
        message: 'User added successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    })
}) 
router.delete('/delete',(req,res)=>{
  console.log(typeof(req.body.number));
  var p=req.body.number;
  sticker.find({id:p},function(err,ans){
    
    if(ans.length==0||err){
      res.status(201).json({
        message: 'Not Present in Database'
      });
    }
    else{
  sticker.deleteMany({id:p},function(err){
    if(err){
      res.status(201).json({
        message: 'error in deleting this id !'
      });}
      else{
        res.status(201).json({
          message: 'deleted successfully!'
        });
      }
  
  })
}
})
})
router.put('/update',(req,res)=>{
  console.log(req);
  console.log(typeof(req.body.number));
  var p=req.body.data.number;
  var image=req.body.data.image;
  sticker.find({id:p},function(err,ans){
    
    if(ans.length==0||err){
      res.status(201).json({
        message: 'Not Present in Database'
      });
    }
    else{
      sticker.updateOne({id:p},{$set:{sticker:image}},function(err){
    if(err){
      res.status(201).json({
        message: 'error in updating this id !'
      });}
      else{
        res.status(201).json({
          message: 'updated successfully!'
        });
      }
  
  })
}
})
  
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