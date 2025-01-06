"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Menu } from "lucide-react";
import Link from "next/link";
import Chatbot from "../components/ChatBot";

const NavItem = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {children}
  </Link>
);

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/teacher.png" alt="Logo" />
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="mr-2 py-2 px-4 border border-gray-600 rounded hover:bg-gray-700 transition-colors duration-200">
                Sign In
              </button>
              <button className="py-2 px-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200">
                Rate Now
              </button>
            </div>
            <div className="flex items-center sm:hidden">
              <button onClick={toggleMenu}>
                <Menu className="h-6 w-6 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="px-4 py-8 sm:px-0">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col space-y-4 lg:w-1/2 w-full text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  AI-Powered Professor Ratings in Minutes
                </h1>
                <p className="text-xl text-gray-400">
                  Make informed decisions about your education with AI-generated
                  professor ratings. Ideal for course selection, academic
                  planning, and understanding teaching styles.
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                  <button className="w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                    Rate a Professor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="w-full sm:w-auto border border-gray-600 text-gray-300 py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                    Explore Ratings
                  </button>
                </div>
                <p className="text-sm text-gray-500 italic">
                  Trusted by students at over 1,000 universities worldwide. Fast
                  and insightful.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/2 w-full mt-8 lg:mt-0"
              >
                <img
                  src="/hero.png"
                  alt="AI Professor Rating Illustration"
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat button */}
      <div className="fixed bottom-4 right-4">
        <motion.button
          onClick={toggleChat}
          className="rounded-full p-4 bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ boxShadow: "0px 0px 20px rgba(0, 102, 255, 0.6)" }} // Blue glow
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Chatbot Modal */}
      <Chatbot isOpen={isChatOpen} onClose={toggleChat} />
    </div>
  );
};

export default HomePage;
