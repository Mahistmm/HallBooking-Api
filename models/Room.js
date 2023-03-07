const mongoose = require("mongoose")

const Roomschema= new mongoose.Schema({
    NumberOfSeats:{
        type:Number,
        required:true
    },
    RoomName:{
        type:String,
        required:true
    },
    amenities:{
        type:String,
        required:true
    },
    price_for_1hrs:{
        type:Number,
        required:true
    },
    Booking:[{
        type:mongoose.Types.ObjectId,
        ref:"booking"
    }]},
    {timestamps:true},)

const room= mongoose.model("rooms",Roomschema);

module.exports= room;