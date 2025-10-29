"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import localfont from "next/font/local";

const billabong = localfont({
  src: [
    {
      path: "../public/fonts/billabong_regular.otf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../public/fonts/billabong_bold.otf",
    //   weight: "600",
    //   style: "normal",
    // },
  ],
});

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Events", href: "#events" },
    { name: "Leaderboard", href: "#leaderboard" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="text-white bg-black/50 py-6 px-6 fixed top-0 left-0 right-0 z-100 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-baseline justify-between">
          {/* Left Navigation */}
          <nav className="flex items-center gap-8">
            <a href="#" className={` ${billabong.className} text-2xl`}>
              <AuroraText>Instagram</AuroraText>
            </a>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-baseline gap-2">
            <span className="text-4xl text-bbh tracking-wide">AARHANT</span>
            <span className="text-xs text-gray-400">by</span>
            <div className="flex items-center gap-2">
              <span className="text-lg text-mont font-bold tracking-wider">
                CySec
              </span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative text-[#f6f6f6] group text-base bg-[#262626]/60 backdrop-blur-md rounded-xl text-center px-6 py-3 overflow-hidden
                after:content-[''] 
                after:absolute 
                after:inset-[-2%] 
                after:z-[-10]
                after:opacity-0 
                after:blur-lg
                after:bg-[linear-gradient(90deg,#feed7a,#ff8400_50%,#df91ff)]
                after:transition-all
                after:duration-[600ms]
                after:will-change-transform
                after:ease-out
                after:translate-y-1/5
                hover:after:opacity-100  
                hover:after:translate-y-[40%]
                transition-transform
                hover:scale-105"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-purple-400 transition-colors"
            >
              <X size={32} strokeWidth={2} />
            </button>

            {/* Menu Content */}
            <div className="h-full flex flex-col items-center justify-center gap-12 px-8">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center space-y-4"
              >
                <h1
                  className={` text-bbh text-7xl md:text-9xl font-bold tracking-wider bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent`}
                >
                  AARHANT '25
                </h1>
                <p className="text-xl text-right md:text-4xl text-gray-300 italic font-light">
                  "Where Cybersecurity Meets Innovation"
                </p>
              </motion.div>

              {/* Navigation Links */}
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-1 w-full text-alfa "
              >
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative text-alfa text-left text-5xl md:text-8xl font-bold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-orange-400 hover:bg-clip-text transition-all duration-300"
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </motion.nav>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
              >
                <p className="text-sm text-gray-500">
                  Organized by CySec • 2025
                </p>
              </motion.div>

              {/* Animated Background Effect */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
