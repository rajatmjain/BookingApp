import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js"
import {createError} from "../utils/error.js"

// Create Room
export const createRoom = async(req,res,next)=>{
    const hotelID = req.params.hotelID
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelID,{$push : {rooms: savedRoom._id}})
        }catch(err){
            next(err)
        }
        res.status(200).json(savedRoom)
    }catch(err){
    }
}

// Get Room
export const readRoom = async(req,res,next)=>{
    try{
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    }catch(err){
        return next(err)
    }
}

// Get Rooms
export const readAllRooms = async(req,res,next)=>{
    const failed = true
    //if(failed) return next(createError(401,"You're not authenticated"))

    try{
        const rooms = await Room.find()
        res.status(200).json(rooms)
    }catch(err){
        return next(err)
    }
}

// Update Room
export const updateRoom = async(req,res,next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updatedRoom)
    }catch(err){
        return next(err)
    }
}

// Delete Room
export const deleteRoom = async(req,res,next)=>{
    try{
        const hotelID = req.params.hotelID
        await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelID,{$pull : {rooms: req.params.id}})
        }catch(err){
            next(err)
        }

        res.status(200).json("Room deleted")
    }catch(err){
        return next(err)
    }
}