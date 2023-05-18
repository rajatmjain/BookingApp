import express from "express"
import { createRoom, deleteRoom, readAllRooms, readRoom, updateRoom, updateRoomAvailability } from "../controllers/Room.js"
import {verifyAdmin, } from '../utils/verifyToken.js'
const router = express.Router()


// CREATE
router.post("/:hotelID",verifyAdmin,createRoom)

// GET
router.get("/:id",readRoom)

// GET ALL
router.get("/",readAllRooms)

// UPDATE
router.put("/:id",verifyAdmin,updateRoom)
router.put("/availability/:id",updateRoomAvailability)

// DELETE
router.delete("/:id/:hotelID",verifyAdmin,deleteRoom)

export default router