// const {model} = require("mongoose");

// const {OrdersSchema} = require("../schemas/OrderSchema");

// const  OrderModel = new model ("Order",OrdersSchema);

// module.exports ={OrderModel};


const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrderSchema");

const OrderModel = mongoose.model("Order", OrdersSchema);

module.exports = { OrderModel };
