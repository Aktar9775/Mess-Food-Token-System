const express = require("express");
require('dotenv').config();
const nodemailer = require("nodemailer");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');  // Ensure you import bcrypt
const Student = require('../Model/StudentSchema'); // Import Student model
const OTP = require('../Model/Otp');  // Import OTP model
const router = express.Router();
const jwt=require('jsonwebtoken');
const JWT_SECRET="hi i am sohel";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:"sohelakter2000@gmail.com",
    pass:"cdig farl sgzg jtqb",
  },
});

// Generate Random OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

router.post(
  "/createStudent",
  [
    body("firstName", "First name must be at least 2 characters long")
      .isLength({ min: 2 })
      .trim()
      .escape(),
    body("lastName", "Last name must be at least 2 characters long")
      .isLength({ min: 2 })
      .trim()
      .escape(),
    body("gender", "Gender must be Male, Female, or Others")
      .isIn(["Male", "Female", "Others"]),
    body("roll", "Roll number is required").notEmpty().trim().escape(),
    body("department", "Department is required").notEmpty().trim().escape(),
    body("hostelName", "Hostel name is required").notEmpty().trim().escape(),
    body("roomNo", "Room number is required").notEmpty().trim().escape(),
    body("email", "Enter a valid email").isEmail().normalizeEmail(),
    body("phone", "Phone number must be a valid 10-digit number")
      .isLength({ min: 10, max: 10 })
      .isNumeric(),
    body("session", "Session must follow the format YYYY-YY")
      .matches(/^\d{4}-\d{2}$/)
      .trim(),
    body("password", "Password must be at least 8 characters long").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const {
        firstName,
        lastName,
        gender,
        roll,
        department,
        hostelName,
        roomNo,
        email,
        phone,
        session,
        password,
      } = req.body;

      // Check if the student already exists
      const existingStudent = await Student.findOne({ email });
      if (existingStudent) {
        return res
          .status(400)
          .json({ message: "A student with this email already exists" });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Generate OTP
      const otp = generateOTP();

      // Create an OTP entry in the database
      const OtpEntry = new OTP({
        email,
        otp,
        name: { firstName, lastName },
        gender,
        roll,
        department,
        hostelName,
        roomNo,
        phone,
        session,
        password: hashedPassword,
      });

      await OtpEntry.save();

      // Send OTP email
      const mailOptions = {
        from: "sohelaktar9775@gmail.com",
        to: email,
        subject: "Your OTP for registration",
        text: `Your OTP is ${otp}`,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent");
        res.status(200).json({
          success: true,
          message: "OTP sent to your email for verification",
        });
      } catch (error) {
        console.error("Error sending OTP:", error);
        return res.status(400).json({ message: "Error sending OTP" });
      }
    } catch (error) {
      console.error("Internal Server Error:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);


router.post(
  "/verifyotp",
  [
    body("email", "Enter a valid email").isEmail(),
    body("otp", "Enter a valid OTP").isLength({ min: 6, max: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, otp } = req.body;

      // Find OTP entry in the database
      const OtpEntry = await OTP.findOne({ email, otp });

      if (!OtpEntry) {
        return res.status(400).json({ error: "Invalid or expired OTP" });
      }

      // Create the student in the database
      const newStudent = new Student({
        name: {
          firstName: OtpEntry.name.firstName,
          lastName: OtpEntry.name.lastName,
        },
        gender: OtpEntry.gender,
        roll: OtpEntry.roll,
        department: OtpEntry.department,
        hostelName: OtpEntry.hostelName,
        roomNo: OtpEntry.roomNo,
        email: OtpEntry.email,
        phone: OtpEntry.phone,
        session: OtpEntry.session,
        password: OtpEntry.password, // Already hashed during registration
      });

      await newStudent.save();

      // Delete OTP entry after successful verification
      await OTP.deleteOne({ email, otp });

      res.status(200).json({
        success: true,
        message: "Student registered successfully",
      });
    } catch (error) {
      console.error("Internal Server Error:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post(
  "/UserLogin",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Log the email and password for debugging
      // console.log(`Email: ${email}, Password: ${password}`);

      // Find user by email
      let user = await Student.findOne({ email });
      if (!user) {
        console.log("User not found");
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      // Compare passwords
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        console.log("Password mismatch");
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }
     
      // Create JWT token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      success = true;
      res.json({ success, authtoken, name: user.name.firstName });
    } catch (error) {
      console.error("Error during login: ", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);



// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Server running on port ${port}`));





module.exports = router;
