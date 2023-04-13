const mongoose = require("mongoose")
const taxichema = mongoose.Schema({
taxi: String,
size: String,
cost: Number
})
module.exports = mongoose.model("taxi",
taxichema) 