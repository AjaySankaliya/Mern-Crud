const User=require('../model/user_model')

const addUser=async(req,res)=>{
    const data=req.body
    try {
       const user=new User(data)
       const createUser=await user.save();
       res.status(201).json(createUser)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getUser=async(req,res)=>{
    try {
        const user=await User.find()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getUserById=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await User.findById(id)
        res.status(201).json(user)
    }        catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await User.findByIdAndDelete(id)
        res.status(201).json("data delete successfully")
    }        catch (error) {
        res.status(400).json({error:error.message})
    }
}

const updateUser=async(req,res)=>{
    const {id}=req.params
    const data=req.body
    try {
        const user=await User.findByIdAndUpdate(id,data,{new:true})
        res.status(201).json(user)
    }        catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={addUser,getUser,getUserById,updateUser,deleteUser}