import React from 'react';
import { Link } from "react-router-dom";
import { useAuthStore } from '../store/useAuthStore';
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="border-b border-gray-700 fixed w-full top-0 z-40 backdrop-blur-lg bg-gray-900/90">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold text-white">ConnectSphere</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to={"/settings"} className="btn btn-sm bg-gray-800 text-white hover:bg-gray-700 transition-all gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className="btn btn-sm bg-gray-800 text-white hover:bg-gray-700 transition-all gap-2">
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center text-white hover:opacity-80 transition-all" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;