import React from "react";

function Hero() {
  return (
    <div className="w-screen h-screen absolute">
      <div className="flex items-center justify-center flex-row">
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            <span className="text-8xl text-bbh">AARHANT</span>{" "}
            <span className="text-bbh  text-8xl text-[##8c3cb4]"> '25</span>
            <span className="text-orange-300 text-base block text-right">
              {" "}
              - Presented By CySec
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
