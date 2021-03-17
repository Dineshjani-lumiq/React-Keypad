const sticker = require('../models/models')
var myArray = {1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq-8KwQec6KnDmUBfFpne8jXpsIKE87sGvA&usqp=CAU",2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThb2bhKZo1mc0SloD3nySgMPZIz1ON2d_ejQ&usqp=CAU" ,3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNv5uuTgKDuryWeUxqRfsBWfC0O-Ddrql31g&usqp=CAU"};
        
module.exports.list=function(req,res){     /*  var num=req.body.p;
          console.log(num); */
      var count=4;
sticker.find({},function(err,ans){
   if(err){
    return  res.send('error in fetching content');}

 return res.send(ans);

 console.log(typeof(num)); 
 
 
 /*res.status(200).send({
   message:myArray[parseInt(num)]
 });
 */
 
 return;

})
}


module.exports.add=function(req,res){  
     /*console.log(req.body.number);
  var t=parseInt(req.body.number)
  
  myArray[t]=req.body.image;
  */
 console.log(req.body.name);
 console.log(typeof(req.body.name));
 
  const Sticker = new sticker({
    name: req.body.name,
    id:6,
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
} 


module.exports.delete=function(req,res){  

    console.log(typeof(req.body.name));
    var p=req.body.name;
    console.log(p);
    sticker.find({name:p},function(err,ans){
      
      if(ans.length==0||err){
        res.status(201).json({
          message: 'Not Present in Database'
        });
      } 
      else{
    sticker.deleteMany({name:p},function(err){
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
}

module.exports.put=function(req,res){  
    
   
        
        var p=req.body.name;
        var image=req.body.image;
       console.log(p.length);
       if(p.length==0||image.length==0){
          res.status(201).json({
              message: 'insert valid data !'
            });
       }
       else{
            sticker.updateMany({ $or: [ { name: p }, { sticker: image } ] },{$set:{sticker:image,name:p}},function(err){
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
      
    
        
}