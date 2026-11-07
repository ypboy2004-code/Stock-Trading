const { model } = require("mongoose");

const {HoldSchema} = require ('../schemas/HoldingSchema');

const HoldModel = new model ("holding",HoldSchema);

module.exports ={HoldModel};