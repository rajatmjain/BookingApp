import express from "express"
import { createHotel, deleteHotel, readAllHotels, updateHotel, countAllHotelsByCity,countAllHotelsByType, readHotel,readHotelRooms } from "../controllers/hotel.js"
import {verifyAdmin} from '../utils/verifyToken.js'
const router = express.Router()

// CREATE
router.post("/",verifyAdmin,createHotel)

// GET
router.get("/find/:id",readHotel)

// GET ALL
router.get("/",readAllHotels)

// UPDATE
router.put("/:id",verifyAdmin,updateHotel)

// DELETE
router.delete("/:id",verifyAdmin,deleteHotel)

// COUNT
router.get("/countByCity",countAllHotelsByCity)
router.get("/countByType",countAllHotelsByType)

// ROOMS
router.get("/room/:id",readHotelRooms)


export default router