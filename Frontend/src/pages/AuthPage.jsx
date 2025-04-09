import React, { useState } from "react";
import { Mail } from "lucide-react";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";


// Reusable Button
function Button({ children, className = "", type = "button", disabled = false, ...props }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center px-5 py-3 rounded-full text-xl font-semibold shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  

  // Validation
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = password.length >= 8;
  const isConfirmMatch = password === confirmPassword;
  const isFormValid = isLogin
    ? isValidEmail && isValidPassword
    : isValidEmail && isValidPassword && name.length > 0 && isConfirmMatch;

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isFormValid) {
      setError("Please fill all fields correctly.");
      return;
    }

    try {
      setIsProcessing(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(`${isLogin ? "Login" : "Account created"} successfully! Redirecting...`);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    setSuccess("");

    try {
      setIsProcessing(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess("Google sign in successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } catch (err) {
      setError("Google sign in failed. Try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-black">
      {/* Left - Image */}
      <div className="relative w-1/2 flex ml-10 p-10">
        <img
          src={assets.login_bg}
          alt=""
          className="rounded-3xl shadow-xl object-cover w-full h-full max-h-[90vh]"
        />
        <div className="absolute">
          <Link to="/">
          <button
          className="bg-neutral-900 opacity-50 hover:bg-neutral-600 rounded-lg ml-6 mt-4 px-8 py-2 duration-500 "
          >
            ←
          </button>
          </Link>
        </div>
      </div>

      {/* Right - Auth Form */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-lg backdrop-blur-xl rounded-[40px] p-12">
          <div className="flex flex-col items-center text-center space-y-8">
            
            <h1 className="text-5xl font-medium pb-2 bg-gradient-to-r from-[#459ddc] via-[#dadada] to-[#459ddc] text-transparent bg-clip-text">
                Memory Lane
            </h1>
            {error && <div className="w-full px-4 py-3 rounded-lg bg-red-900/50 border border-red-500 text-red-100">{error}</div>}
            {success && <div className="w-full px-4 py-3 rounded-lg bg-green-900/50 border border-green-500 text-green-100">{success}</div>}

            <div className="w-full space-y-6">
              <Button 
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-white gap-4"
                onClick={handleGoogleAuth}
                disabled={isProcessing}
              >
                <FcGoogle className="text-2xl" />
                {isProcessing ? "Please wait..." : `${isLogin ? "Login" : "Sign up"} with Google`}
              </Button>

              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center"></div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 bg-transparent border border-gray-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#459ddc]"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-4 bg-transparent border ${!isValidEmail && email ? "border-red-500" : "border-gray-700"} rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#459ddc]`}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full p-4 bg-transparent border ${!isValidPassword && password ? "border-red-500" : "border-gray-700"} rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#459ddc]`}
                />
                {!isLogin && (
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full p-4 bg-transparent border ${!isConfirmMatch && confirmPassword ? "border-red-500" : "border-gray-700"} rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#459ddc]`}
                  />
                )}
                <Button 
                  type="submit" 
                  className="w-full bg-white border text-black hover:bg-gray-100 gap-4"
                  disabled={isProcessing || !isFormValid}
                >
                  <Mail className="w-6 h-6" />
                  {isProcessing ? (isLogin ? "Logging in..." : "Signing up...") : isLogin ? "Login with Email" : "Sign up with Email"}
                </Button>
              </form>
            </div>
            <div className>
            <p className="text-lg text-gray-300 pb-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span className="text-[#459ddc] cursor-pointer hover:underline" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign up" : "Log in"} here.
              </span>
            </p>

            <div className="text-md text-gray-300 space-x-4">
              <a href="#" className="hover:underline">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>

            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}