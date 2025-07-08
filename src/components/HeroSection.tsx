"use client";

import { Coffee } from "lucide-react";
import React, { useState } from "react";
import CoffeeMenu from "./CoffeeMenu";
import { useRouter } from "next/navigation";

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  if (showMenu) {
    return <CoffeeMenu onBackToHero={() => setShowMenu(false)} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width-60 height-60"></div>
      </div>

      {/* Header */}
      <div className="absolute top-8 left-8 z-10">
        <h1 className="text-2xl font-light text-amber-200 tracking-widest">
          Zenbrew
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Logo Badge */}
        <div className="mb-16">
          <div className="relative w-32 h-32">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 15L75 15L90 50L75 85L25 85L10 50L25 15Z"
                stroke="white"
                strokeWidth="1"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="text-xs font-light mb-1">EST.</div>
              <Coffee className="w-6 h-6 mb-1" />
              <div className="text-xs font-light">1949</div>
              <div className="text-sm font-semibold mt-1">COFFEE</div>
              <div className="text-xs font-light">Premium Coffee</div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-7xl md:text-8xl font-light text-white mb-4">
            <span className="text-amber-200">Coffee</span>
            <span className="mx-4">&</span>
            <span>Joy</span>
          </h1>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-px bg-white opacity-30"></div>
          <Coffee className="w-4 h-4 text-amber-200" />
          <div className="w-16 h-px bg-white opacity-30"></div>
        </div>

        {/* Description */}
        <p className="text-white/80 text-lg text-center max-w-2xl mb-16 leading-relaxed font-light">
          Experience the joy of exceptional coffee in our cozy space, where
          <br />
          every cup is crafted with passion and warmth
        </p>

        {/* CTA Button */}

        <button
          onClick={() => router.push("/menu")}
          className="px-12 py-4 bg-amber-200 text-gray-900 font-semibold text-sm tracking-widest uppercase hover:bg-amber-300 transition-all duration-300 hover:scale-105"
        >
          Our Menu
        </button>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute top-1/4 left-20 w-2 h-2 bg-amber-200/20 rounded-full animate-pulse"></div>
      <div
        className="absolute top-1/3 right-32 w-1 h-1 bg-white/20 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-amber-200/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/10 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
};

export default HeroSection;
