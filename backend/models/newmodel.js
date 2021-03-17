const mongoose =require('mongoose');
const checkmoSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
type:String,
required:true
    },
    photo:{
        type:String,
        required:true
    }
    
})

module.exports=mongoose.model('checking',checkmoSchema);