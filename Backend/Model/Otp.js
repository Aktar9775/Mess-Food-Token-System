const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the OTP schema
const otpSchema = new Schema({
  email: { 
    type: String, 
    required: [true, "Email is required"], 
    unique: true, // Ensure one OTP per email
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  otp: { 
    type: String, 
    required: [true, "OTP is required"], 
  },
  name: {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters long"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters long"],
    },
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["Male", "Female", "Others"],
  },
  roll: {
    type: String,
    required: [true, "Roll number is required"],
    trim: true,
  },
  department: {
    type: String,
    required: [true, "Department is required"],
    trim: true,
  },
  hostelName: {
    type: String,
    required: [true, "Hostel name is required"],
    trim: true,
  },
  roomNo: {
    type: String,
    required: [true, "Room number is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    match: [/^\d{10}$/, "Please fill a valid 10-digit phone number"],
  },
  session: {
    type: String,
    required: [true, "Session is required"],
    trim: true,
    match: [/^\d{4}-\d{2}$/, "Session must follow the format YYYY-YY"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    expires: 300,  // OTP expires in 5 minutes
  },
});

// Create the OTP model from the schema
const Otp = mongoose.model("OTP", otpSchema);

module.exports = Otp;
