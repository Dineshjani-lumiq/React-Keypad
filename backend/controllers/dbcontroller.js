const sticker = require('../models/models')

module.exports.list=function(req,res){     /*  var num=req.body.p;
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
}


module.exports.add=function(req,res){  
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
} 


module.exports.delete=function(req,res){  
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
}

module.exports.put=function(req,res){  
    
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
        
}