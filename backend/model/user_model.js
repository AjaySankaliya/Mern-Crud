const mongoose=require('mongoose')

const userModel=new mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true}
    }
)

module.exports=mongoose.model('user',userModel)