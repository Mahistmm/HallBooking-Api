const router = require("express").Router();
const Room = require("../models/Room");

router.get("/",(req,res)=>{
    res.send("Room router is working ")
});

router.post("/add",async(req,res)=>{
    const room = await Room.create(req.body);
    res.json(room)
});

router.get("/all",async(req,res)=>{
    try {
     const roomdata = await Room.find().populate("Booking","Customer_Name Date StartTime EndTime")
     res.json(roomdata)   
    } catch (error) {
        res.json({msg:error.message})
}})

module.exports = router