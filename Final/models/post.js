const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        
    },
    categories:{
        type:String,
        
    },
},{timestamps:true})

module.exports=mongoose.model("Post",PostSchema)