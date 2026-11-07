const {Schema} = require("mongoose");

const HoldSchema = new Schema({
    name: String,
    qty: Number,
    avg:Number,
    price:Number,
    net: String,
    day:String,

});

module.exports = {HoldSchema};