"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LanguageCircles() {
  const languages = [

    { id: 10, name: "", image: "./assets/a.svg", x: 240, y: 260, size: 80 },
    { id: 11, name: "", image: "./assets/b.svg", x: 340, y: 310, size: 50 },
    { id: 12, name: "", image: "./assets/c.svg", x: 400, y: 390, size: 50 },
    { id: 13, name: "", image: "./assets/d.svg", x: 340, y: 380, size: 50 },
    { id: 14, name: "", image: "./assets/e.svg", x: 240, y: 380, size: 50 },
    { id: 15, name: "", image: "./assets/j.svg", x: 200, y: 320, size: 50 },
    { id: 19, name: "", image: "./assets/k.svg", x: 300, y: 500, size: 50 },
    { id: 16, name: "", image: "./assets/g.svg", x: 150, y: 390, size: 40 },
    { id: 17, name: "", image: "./assets/h.svg", x: 240, y: 480, size: 40 },
    { id: 18, name: "", image: "./assets/i.svg", x: 240, y: 550, size: 40 },
  ];

  return (
    <div className="relative h-[700px] w-full max-w-[600px] mx-auto overflow-hidden">
      {/* Background dots pattern */}
      <Image src="assets/indiaHero.svg" width={500} height={500} alt="hero2"/>
      <div className="absolute -top-28 -left-28 w-full h-full flex flex-col items-center justify-center">
        {languages.map((lang) => {
          // Generate random duration and delay for natural movement
          const floatX = Math.sin(lang.id) * 0.1;
          const floatY = Math.cos(lang.id) * 0.1;
          const floatDuration = 10 + (lang.id % 5);
          const pulseDuration = 5 + Math.random() * 8; // Random between 2s to 4s

          return (
            <motion.div
              key={lang.id}
              className="absolute"
              style={{
                left: `${lang.x}px`,
                top: `${lang.y}px`,
                width: `${lang.size}px`,
                height: `${lang.size}px`,
                transformOrigin: "center center",
              }}
              animate={{
                x: [0, floatX, 0],
                y: [0, floatY, 0],
                scale: [1, 1.5, 1], // Pulsing effect
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: floatDuration,
                  ease: "easeInOut",
                  repeatType: "reverse",
                  delay: (lang.id % 5) * 0.2,
                },
                y: {
                  repeat: Infinity,
                  duration: floatDuration * 1.2,
                  ease: "easeInOut",
                  repeatType: "reverse",
                  delay: (lang.id % 3) * 0.3,
                },
                scale: {
                  repeat: Infinity,
                  duration: pulseDuration,
                  ease: "circInOut",
                  repeatType: "mirror",
                  delay: Math.random() * 1, // Random delay for natural effect
                },
              }}
            >
              {/* Circle container */}
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={lang.image || "/placeholder.svg"}
                  alt={lang.name}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
