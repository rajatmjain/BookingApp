import express from "express"
const router = express.Router()
import { readAllUsers,readUser,updateUser,deleteUser } from "../controllers/user.js"


// GET
router.get("/:id",readUser)

// GET ALL
router.get("/",readAllUsers)

// UPDATE
router.put("/:id",updateUser)

// DELETE
router.delete("/:id",deleteUser)

export default router