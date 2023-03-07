const mongoose=require("mongoose");

const BookingSchema=new mongoose.Schema({
    Customer_Name:{
        type:String,
        requirerd:true
    },
    Date:{
        type:String,
        required:true
    },
    StartTime:{
        type:String,
        require:true
    },
    EndTime:{
        type:String,
        required:true
    },
    RoomID:{
        type:mongoose.Types.ObjectId,
        ref:"rooms"
    },
},
{timestamps:true})

const booking=mongoose.model("booking",BookingSchema);

module.exports=booking;