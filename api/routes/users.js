import express from "express"
const router = express.Router()
import { readAllUsers,readUser,updateUser,deleteUser } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

// // CHECK AUTH
// router.get("/checkAuth",verifyToken,(req,res,next)=>{
//     res.send("Authentication successful.")
// })

// // CHECK USER
// router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
//     res.send("Logged in and okay to delete.")
// })

// CHECK ADMIN
router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("You're an admin.")
})

// GET
router.get("/:id",verifyUser,readUser)

// GET ALL
router.get("/",verifyAdmin,readAllUsers)

// UPDATE
router.put("/:id",verifyUser,updateUser)

// DELETE
router.delete("/:id",verifyUser,deleteUser)

export default router