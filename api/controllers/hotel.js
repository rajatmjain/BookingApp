import Hotel from "../models/Hotel.js"

// Create Hotel
export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        return next(err)
    }
}

// Get Hotel
export const readHotel = async(req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        return next(err)
    }
}

// Get Hotels
export const readAllHotels = async(req,res,next)=>{
    const failed = true
    //if(failed) return next(createError(401,"You're not authenticated"))

    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }catch(err){
        return next(err)
    }
}

// Update Hotel
export const updateHotel = async(req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updatedHotel)
    }catch(err){
        return next(err)
    }
}

// Delete Hotel
export const deleteHotel = async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel deleted")
    }catch(err){
        return next(err)
    }
}

// Count by City
export const countAllHotelsByCity = async(req,res,next)=>{
    const cities = req.query.cities.split(",")
    //if(failed) return next(createError(401,"You're not authenticated"))
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    }catch(err){
        return next(err)
    }
}


// Count by type
export const countAllHotelsByType = async(req,res,next)=>{
    const failed = true
    //if(failed) return next(createError(401,"You're not authenticated"))

    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }catch(err){
        return next(err)
    }
}