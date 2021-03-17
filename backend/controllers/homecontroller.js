const { Types } = require('mongoose');
const sticker = require('../models/models')
const supert= require('../models/supermans')
const  newmodel=require('../models/newmodel');

module.exports.home=function(req,res){
    
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
        
     
}


module.exports.submit=function(req,res){
  
    console.log("on serverside");
    console.log(req.body.number);
   var t=parseInt(req.body.number);    
   
   /*          0    1    2      3     4     5     6    7      8    9                    */
   
   /*var key = [""," ","abc","def", "ghi","jkl","mno","pqrs","tuv","wxyz"];
   var list =["batman","thor","spiderman","hulk","caption","hulk","deadpool","thanos","aquaman","darkseid","catwoman","vision","thor","joker","deadpool","antman","blur","*","0","#"];
  
  
  
  var n=t.length;
  var flag=1;
  /* recursion    */
  /*function permutation(i,str){
  if(i==n){
    /*  if string persent in list then send this string */
    /*if(list.indexOf(str)>-1){
     flag=0;
     superman.find({name:str},function(err,ans){

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
      return;
    }
    return;
  }
  console.log(i);
  /* convert integer to that string char*/
  /*var p=parseInt(t[i]);
  var x=key[p].length;
  console.log(p);
  /* recursion go to next index and add char to string*/
  /*for(let j=0;j<x;j++){
   
   console.log(i);
    permutation(i+1,str+key[p][j]);
  }
  
  }
  
  permutation(0,"")
    
    if(flag==1){
    res.send("-1");} 
*/

newmodel.find({id:t},function(err,ans){
  console.log(ans);
  console.log(err);
console.log("a");
console.log(t);
console.log(typeof(t));
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
      return;
    }


    module.exports.pagination=function(req,res){
    
        
        var p=req.body.data;
        console.log(p);
        console.log(typeof(p));
      
           var currentpage=p;
           var imageperpage=3;
       var indexoflastpage=currentpage*imageperpage;
       var indexoffirstpage=indexoflastpage-imageperpage;
       
       if(indexoffirstpage==0){
         indexoffirstpage=1;
       }
       var query = sticker.find({}).skip(indexoffirstpage-1).limit(3);
       query.exec(function(err,ans){
         console.log(ans) ;  //console.log(data)
  if(err||ans.length==0){
            res.status(201).json({
              message: 'error'
            });
          }
          else{
           console.log(ans.length);
           
           
            res.send({
              message:"receiving data",
             
              data:ans
            });
          }
      
});
        
        
     
}
