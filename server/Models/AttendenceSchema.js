const mongoose = require("mongoose");

const AttendenceSchema = new mongoose.Schema({
  Date: {
    type: String,
    required: true,
  },
  Employee: {
    type: mongoose.Types.ObjectId,
    ref:'Employee',
    required: true,
  },
  NumberOfHours:{
          type:Number,
          default:9,
          max:9
  },
  Month:{
          type:String,
          enum:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
        //   required:true 
  }
},{timestamps:true});

module.exports = mongoose.model('Attendence',AttendenceSchema)
