"use client";

import { Coffee } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex overflow-hidden bg-[#d8a673]">
      {/* Imagem à esquerda */}
      <div className="relative w-1/2 min-h-screen shadow-lg">
        <Image
          src="/bg2.jpg"
          alt="Coffee Background"
          fill
          quality={100}
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />
      </div>

      {/* Conteúdo à direita */}
      <div className="w-1/2 flex flex-col justify-center px-16 py-20 bg-[#fef6ef] relative z-10">
        <div className="max-w-lg space-y-6">
          <div className="flex items-center gap-3 text-[#8b5e3c]">
            <Coffee size={32} />
            <span className="uppercase tracking-wider font-semibold text-sm">
              Zenbrew Coffee
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3d2b1f] leading-tight">
            Premium <span className="text-[#8b5e3c]">Blend Coffee</span>
          </h1>

          <p className="text-[#5c3b28] text-lg leading-relaxed">
            Sabor encorpado, aroma irresistível e qualidade artesanal.
          </p>

          <button
            onClick={() => router.push("/menu")}
            className="px-7 py-3 bg-[#8b5e3c] hover:bg-[#5c3b28] transition-all duration-300 ease-in-out rounded-full text-white font-semibold shadow-lg hover:shadow-xl"
          >
            Ver Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
