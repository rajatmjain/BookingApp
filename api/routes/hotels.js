import express from "express"
import { createHotel, deleteHotel, readAllHotels, readHotel, updateHotel } from "../controllers/hotel.js"
const router = express.Router()

// CREATE
router.post("/",createHotel)

// GET
router.get("/:id",readHotel)

// GET ALL
router.get("/",readAllHotels)

// UPDATE
router.put("/:id",updateHotel)

// DELETE
router.delete("/:id",deleteHotel)

export default router