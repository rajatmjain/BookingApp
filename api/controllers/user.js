import User from "../models/User.js"


// Get User
export const readUser = async(req,res,next)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        return next(err)
    }
}

// Get Users
export const readAllUsers = async(req,res,next)=>{
    const failed = true
    //if(failed) return next(createError(401,"You're not authenticated"))

    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        return next(err)
    }
}

// Update User
export const updateUser = async(req,res,next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    }catch(err){
        return next(err)
    }
}

// Delete User
export const deleteUser = async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted")
    }catch(err){
        return next(err)
    }
}