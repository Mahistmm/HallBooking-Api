const express = require("express");
const app  = express();
const dp = require("./config/dp")
const apirouters = require("./routes")

dp();
app.use(express.json());
app.use("/api",apirouters)


app.get("/",(req,res)=>{
    res.send("Hall Booking Api")
});

app.listen(process.env.PORT || 4000,(req,res)=>{
    console.log("Server is up and running");
})
