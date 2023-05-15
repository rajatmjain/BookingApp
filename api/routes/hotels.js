import express from "express"
import { createHotel, deleteHotel, readAllHotels, readHotel, updateHotel } from "../controllers/hotel.js"
import {verifyAdmin} from '../utils/verifyToken.js'
const router = express.Router()

// CREATE
router.post("/",verifyAdmin,createHotel)

// GET
router.get("/:id",readHotel)

// GET ALL
router.get("/",readAllHotels)

// UPDATE
router.put("/:id",verifyAdmin,updateHotel)

// DELETE
router.delete("/:id",verifyAdmin,deleteHotel)

export default router