import React from "react";
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
  return (
    <header className=" text-white bg-black/50 py-6 px-6 fixed top-0 left-0 right-0 z-50">
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
            className="relative text-[#f6f6f6] group text-base text-mont-reg btn-shadow bg-[#262626]/60 backdrop-blur-md rounded-xl text-center px-6 py-3 overflow-hidden
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
  "
          >
            Menu{" "}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
