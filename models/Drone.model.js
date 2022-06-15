// Iteration #1
const mongoose = require('mongoose');
const { Schema } = new Schema

const droneModel ={
    name:{
        type: String,
    },
    propellers:{
        type: Number,
    },
    maxSpeed:{
        type: Number
    }
}

const Drone = mongoose.model('Drone', droneModel)
module.exports = Drone