const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema

const VQTestSchema = new Schema({
  ans1:{
    type: String,
    required: true
  },
  ans2:{
    type: String,
    required: true
  },
  ans3:{
    type: String,
    required: true
  },
  ans4:{
    type: String,
    required: true
  },
  ans5:{
    type: String,
    required: true
  },
  ans6:{
    type: String,
    required: true
  },
  ans7:{
    type: String,
    required: true
  },
  ans8:{
    type: String,
    required: true
  },
  ans9:{
    type: String,
    required: true
  },
  ans10:{
    type: String,
    required: true
  },
  ans11:{
    type: String,
    required: true
  },
  ans12:{
    type: String,
    required: true
  },
  ans13:{
    type: String,
    required: true
  },
  ans14:{
    type: String,
    required: true
  },
  ans15:{
    type: String,
    required: true
  },
  ans16:{
    type: String,
    required: true
  },
  ans17:{
    type: String,
    required: true
  },
  ans18:{
    type: String,
    required: true
  },
  ans19:{
    type: String,
    required: true
  },
  ans20:{
    type: String,
    required: true
  },
  ans21:{
    type: String,
    required: true
  },
  ans22:{
    type: String,
    required: true
  },
  ans23:{
    type: String,
    required: true
  },
  ans24:{
    type: String,
    required: true
  },
  ans25:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  },

});

module.exports = VQTest = mongoose.model('VQTests',VQTestSchema);
