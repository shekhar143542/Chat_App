import React, { useState } from 'react';
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import { motion } from "framer-motion";
import toast from "react-hot-toast";


const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [FormData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });


  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () =>{
    if (!FormData.fullName.trim()) return toast.error("Full name is required");
    if (!FormData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(FormData.email)) return toast.error("Invalid email format");
    if (!FormData.password) return toast.error("Password is required");
    if (FormData.password.length < 6) return toast.error("Password must be at least 6 characters");
  
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here

    const success = validateForm();
    if(success == true){
      signup(FormData);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 relative bg-gray-900">
      {/* Left Side */}
      <motion.div 
        className="flex flex-col justify-center items-center p-6 sm:p-12" 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-md">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mt-2 text-white">Create Account</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-white">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute top-1/2 left-3 -translate-y-1/2 z-10 flex items-center">
                  <User className="size-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full pl-10 bg-gray-800 text-white border-gray-600"
                  placeholder="John Doe"
                  value={FormData.fullName}
                  onChange={(e) => setFormData({ ...FormData, fullName: e.target.value })}
                />
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-white">Email</span>
              </label>
              <div className="relative">
                <div className="absolute top-1/2 left-3 -translate-y-1/2 z-10 flex items-center">
                  <Mail className="size-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 bg-gray-800 text-white border-gray-600"
                  placeholder="example@example.com"
                  value={FormData.email}
                  onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
                />
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-white">Password</span>
              </label>
              <div className="relative">
                <div className="absolute top-1/2 left-3 -translate-y-1/2 z-10 flex items-center">
                  <Lock className="size-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 bg-gray-800 text-white border-gray-600"
                  placeholder="********"
                  value={FormData.password}
                  onChange={(e) => setFormData({ ...FormData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <motion.button 
              type="submit" 
              className="btn btn-primary w-full transform hover:scale-105 transition-all duration-200 shadow-lg" 
              disabled={isSigningUp}
              whileHover={{ scale: 1.05 }}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </motion.button>
          </form>
          
          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account? {" "}
              <Link to="/login" className="link link-primary">Sign in</Link>
            </p>
          </div>
        </div>
      </motion.div>

      <AuthImagePattern
        title="Join our community"
        subtitle="Start meaningful conversations and stay connected with those who matter most"
      />
    </div>
  );
};

export default SignUpPage;