const mongoose =require('mongoose');
const moSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
type:String,
required:true
    },
    sticker:
        { type: String, required: true }
    
})

module.exports=mongoose.model('sticker',moSchema);