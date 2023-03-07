const router = require("express").Router();
const Booking = require("../models/Booking");
const Room = require("../models/Room");

router.get("/",(req,res)=>{
    res.send("Booking router is working")
});

router.post("/add",async(req,res)=>{
    try {
          const bookingdata = await Booking.create(req.body);
          const roomdata = await Room.findOneAndUpdate(req.body.RoomID,{
          $push:{Booking:bookingdata._id}
    },{new:true})
    res.json({Booking:bookingdata,Room:roomdata})
    } catch (error) {
        res.json({msg:error.message})
    }
});



router.get("/all",async(req,res)=>{
    try {
        const alldata =await Booking.find()
        res.json(alldata)
    } catch (error) {
        res.json({msg:error.message})
    }
})


module.exports = router