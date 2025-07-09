"use client";

import Image from "next/image";
import { Coffee } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
export const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#bbab9a]">
      {/* Background Circle */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 bg-[#4B2E1E] rounded-full p-[100%] shadow-lg z-0"></div>

      {/* Conteúdo central */}
      <div className="relative z-0 flex flex-col items-center justify-center min-h-screen px-6 ">
        {/* Logo Badge */}
        <div className="mb-6">
          <div className="flex flex-col items-center justify-center text-white">
            <div className="text-2xl font-light mb-2">EST.</div>
            <Coffee className="w-24 h-24 mb-4 text-[#4B2E1E]" />
            <div className="text-2xl font-light">1949</div>
            <div className="text-4xl font-semibold mt-4">COFFEE</div>
            <div className="text-xl font-light">Premium Coffee</div>
          </div>
        </div>

        {/* Horário */}
        <div className="flex justify-center items-center mt-8 gap-48 text-white font-semibold text-sm">
          <div className="text-center">
            <div>TUESDAY TO SUNDAY</div>
          </div>
          <div className="text-center">
            <div>10 AM - 11 PM</div>
            <div>CLOSED ON MONDAY</div>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-white text-lg text-center max-w-2xl mb-16 leading-relaxed font-light">
          Experience the joy of exceptional coffee in our cozy space, where
          <br />
          every cup is crafted with passion and warmth
        </p>

        {/* Botão CTA */}
        <button
          onClick={() => router.push("/menu")}
          className="px-12 py-4 bg-amber-200 text-gray-900 font-semibold text-sm tracking-widest uppercase hover:bg-amber-300 transition-all duration-300 hover:scale-105 rounded-2xl shadow-lg flex items-center justify-center gap-2"
        >
          Our Menu
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
