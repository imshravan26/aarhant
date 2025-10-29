"use client";
import React from "react";
import { motion } from "motion/react";
import BlurText from "./ui/BlurText";
import { Text_03 } from "./ui/wave-text";
import { SparklesCore } from "./ui/sparkles";
import { Iphone } from "./ui/iphone";

function Hero() {
  const handleAnimationComplete = () => {
    console.log("Animation complete");
  };

  return (
    <div className="w-screen h-screen relative z-50 ">
      {/* Animated background gradient */}

      <div className="flex items-center justify-center h-full relative z-50 px-4 md:px-8 lg:px-16">
        <div className="flex items-center gap-8 lg:gap-16 max-w-7xl mx-auto w-full">
          {/* Left content */}
          <div className="flex flex-col justify-center text-white flex-1">
            {/* Top text */}
            <motion.span
              className="block text-left mb-6 text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text_03 text="CySec Presents" />
            </motion.span>
            {/* Main BlurText */}
            <BlurText
              text="Aarhant '25"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl md:text-7xl text-bbh lg:text-9xl font-bold text-center leading-tight text-white drop-shadow-2xl"
              stepDuration={0.4}
            />
            <motion.div
              className="text-xl md:text-2xl items-center justify-between lg:text-4xl block  font-light tracking-wide bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <button
                onClick={() => setIsMenuOpen(true)}
                className="relative text-[#f6f6f6]  text-base bg-[#262626]/60 backdrop-blur-md rounded-xl text-center px-6 py-3 overflow-hidden
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
                <span className="font-medium tracking-tight">
                  Register for Aarhant
                </span>
              </button>
              <span className="text-xl italic  text-right mt-8 font-light tracking-wide bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent">
                💡 Gear Up for the Ultimate Showdown
              </span>
            </motion.div>

            {/* Register Button */}
            <motion.div
              className="flex justify-center md:justify-start mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            ></motion.div>
          </div>

          {/* Right side vertical image */}
          <motion.div
            className="hidden lg:block flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-65 h-auto">
              <Iphone src="./insta.jpg" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
