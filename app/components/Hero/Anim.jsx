"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "H,Y,P,E,R,L,O,C,A,L",
  "M,U,L,T,I,L,I,N,G,U,A,L",
  "T,A,R,G,E,T,E,D",
  "A,F,F,O,R,D,A,B,L,E",
];

const letterVariantsEven = {
  initial: { y: -50 },
  animate: { y: 0 },
  exit: { y: 50 },
};

const letterVariantsOdd = {
  initial: { y: -50 },
  animate: { y: 0 },
  exit: { y: 50 },
};

const AnimatedWord = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Automatically change the word every 3 seconds (adjust as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  return (
    <div className="h-16 flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWordIndex}
          className="text-4xl font-bold text-[#ffe49f] uppercase flex overflow-hidden w-[370px]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {currentWord.split(",").map((char, index) => (
            <motion.span
              key={index}
              variants={index % 2 === 0 ? letterVariantsEven : letterVariantsOdd}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedWord;
