const mongoose = require("mongoose");

const AttendenceSchema = new mongoose.Schema(
  {
    Datee: {
      type: String,
      required: true,
    },
    Employee: {
      type: mongoose.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    NumberOfHours: {
      type: Number,
      default: 9,
      max: 9,
    },
    // Datee:String,
    Month: {
      type: String,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      //   required:true
    },
    Year: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendence", AttendenceSchema);
