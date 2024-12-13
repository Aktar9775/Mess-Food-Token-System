import React, { useState } from "react";
import axios from "axios";

function SendOTP() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [inputOtp, setInputOtp] = useState("");
  const [status, setStatus] = useState("");

  const handleSendOTP = async () => {
    try {
      const response = await axios.post("http://localhost:3000/send-otp", { email });
      setOtp(response.data.otp); // Save OTP (for development, don't show in real apps)
      setOtpSent(true);
      setStatus("OTP sent to your email.");
    } catch (error) {
      setStatus("Failed to send OTP. Try again.");
    }
  };

  const handleVerifyOTP = () => {
    if (otp === inputOtp) {
      setStatus("OTP verified successfully!");
    } else {
      setStatus("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendOTP} disabled={otpSent}>
        Send OTP
      </button>

      {otpSent && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={inputOtp}
            onChange={(e) => setInputOtp(e.target.value)}
          />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      )}
      <p>{status}</p>
    </div>
  );
}

export default SendOTP;
