import { BookOpen, LogIn, Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { removeCookie } from '../../utils/cookiesApis';
import { Link } from 'react-router-dom';

export default function NavBar({ setShowLogin, setLoginType }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    if (!confirm("Are you sure you want to logout?")) {
      return;
    }
    dispatch(logout());
    removeCookie('authToken');
  }
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-400 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">University Insights</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {user && <Link to="/dashboard" className="text-slate-400 hover:text-white transition-colors">Dashboard</Link>
              }
              {!user ? <button
                onClick={() => {
                  setShowLogin(true);
                  setLoginType(null);
                }}
                className="inline-flex items-center px-4 py-2 border border-slate-700 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </button> :
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  className="inline-flex items-center px-4 py-2 border border-slate-700 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Log Out
                </button>}


              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white gradient-bg hover:opacity-90 transition-opacity"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-slate-900 border-b border-slate-800">
            <div className="pt-2 pb-3 space-y-1 px-4">
              <a href="#universities" className="block px-4 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg">Universities</a>
              <a href="#scholarships" className="block px-4 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg">Scholarships</a>
              {user ? <button
                onClick={() => {
                  setShowLogin(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                Login
              </button>
                :
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  className="inline-flex items-center px-4 py-2 border border-slate-700 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Log Out
                </button>
              }
              <button
                className="block w-full text-left px-4 py-2 text-base font-medium text-white gradient-bg rounded-lg mt-2"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

    </div>
  )
}
