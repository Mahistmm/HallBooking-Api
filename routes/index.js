const router = require("express").Router()
const booking = require("./booking");
const room  = require("./room")

router.use("/booking",booking)
router.use("/room",room);

module.exports = router