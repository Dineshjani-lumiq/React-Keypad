const mongoose =require('mongoose');
const superSchema=new mongoose.Schema({
    id:{
type:Number,
required:true
    },
    Name:{
        type:String,
        required:true
    },
  
    sticker:
        { type: String,
             required: true }
    
})

module.exports=mongoose.model('superman',superSchema);