const mongoose = require("mongoose");

const url = "mongodb+srv://Mahi:stmmsara@clusterfsb.opmw8qr.mongodb.net/hallbooking?retryWrites=true&w=majority"


const ConnectedDB = async()=>{
    try {
         const con = await mongoose.connect(url);
         console.log(`DB connected:${con.connection.host}`); 
    } catch (error) {
        console.log(error);
    }
}


module.exports = ConnectedDB;