import React, { useRef, useState } from "react";

export default function OTPVerification({ onVerify }) {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6) {
      onVerify(code);
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm text-white text-center"
      >
        <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-white to-[#459ddc] text-transparent bg-clip-text">
          Verify OTP
        </h2>
        <p className="text-sm text-neutral-300 mb-6">
          Enter the 6-digit code sent to your email
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-10 text-center text-xl font-outfit rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-[#459ddc] transition-all"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={!isOtpComplete}
          className={`w-full rounded-full text-black py-3 transition-all duration-300 ${
            isOtpComplete
              ? "bg-gray-500 hover:bg-gray-300"
              : "bg-gray-700 opacity-50 cursor-not-allowed"
          }`}
        >
          Verify
        </button>
      </form>
    </div>
  );
}
