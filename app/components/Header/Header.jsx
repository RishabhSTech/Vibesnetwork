"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const menu = [
  {
    title: "SPEAK TO AN EXPERT",
    link: "#stats",
  },
  {
    title: "ABOUT US",
    link: "#about-us",
  },
  {
    title: "MEET OUR STARS",
    link: "#meet-stars",
  },
  {
    title: "OUR AI INFLUENCER SYSTEM",
    link: "#ai-enabled",
  },
  {
    title: "INFLUENCER MARKETING IN INDIA",
    link: "#influencer-marketing",
  },
  {
    title: "WHY CHOOSE US",
    link: "#why-vibes",
  },
  {
    title: "TEAM",
    link: "#lead",
  },
  {
    title: "TERMS & CONDITION",
    link: "/terms",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2 , setIsOpen2] = useState(false)

  return (
    <div className="flex flex-col">
    <div className="flex justify-between items-center py-12 px-12 bg-[#2f006b]">
      <Image src="./assets/logo.svg" width={170} height={100} alt="logo" />
      <span className="flex w-1/2 max-w-[411px] flex-row justify-around items-center">
        <button  onClick={() => window.open("/blogs")} className="hidden  min-w-[95.42px] min-h-[37.49px] sm:flex flex-row rounded-[20px] border border-white items-center justify-around px-3 hover:bg-white transition-all duration-300 group">
          <p className="text-center text-white text-base font-normal group-hover:text-[#2f006b]">
            Blog
          </p>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="currentColor"
            className="text-white group-hover:text-[#2f006b]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M7.87211 2.8331L5.78667 0.74194L6.47651 0.0518589L9.76658 3.34193L6.47651 6.632L5.78667 5.94192L7.87211 3.85076L7.89337 3.82943H7.86325H5.82275C4.56951 3.82943 3.50383 4.26495 2.62645 5.13581C1.74905 6.00686 1.31025 7.0694 1.31025 8.32268C1.31025 9.61485 1.80386 10.6904 2.79055 11.5484C3.77687 12.4062 4.93521 12.8352 6.265 12.8352H7.31025V15.5169V15.5473L7.33162 15.5257L10.003 12.8352H12.8228C14.076 12.8352 15.1449 12.3964 16.0286 11.5191C16.9124 10.6417 17.3545 9.57599 17.3545 8.32268C17.3545 7.06937 16.9124 6.00367 16.0286 5.12631C15.1449 4.24897 14.076 3.81018 12.8228 3.81018H12.5275V2.83518H12.8228C14.3542 2.83518 15.6545 3.36691 16.7244 4.43054C17.7945 5.49416 18.3295 6.79129 18.3295 8.32268C18.3295 9.85407 17.7945 11.1512 16.7244 12.2148C15.6545 13.2784 14.3542 13.8102 12.8228 13.8102H10.4383V13.805L10.4294 13.8138L6.33525 17.908V13.8169V13.8044H6.32275H6.14989C4.5592 13.7736 3.19258 13.2388 2.04941 12.1999C0.906522 11.1613 0.335254 9.86916 0.335254 8.32268C0.335254 6.79126 0.866982 5.49739 1.93057 4.44029C2.99417 3.38301 4.29131 2.85443 5.82275 2.85443H7.86325H7.89337L7.87211 2.8331Z"
              stroke="white"
              strokeWidth="0.025"
            />
          </svg>
        </button>
        <button
        onClick={() => setIsOpen2(!isOpen2)} className="w-[210.89px] group min-h-[37.49px] rounded-[20px] sm:inline hidden border border-white hover:bg-white transition-all duration-300">
          <p className="text-center text-white text-base font-normal group-hover:text-black">
            Are you an influencer ?
          </p>
        </button>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-[40.36px] -mr-28 sm:mr-0 h-[40.36px] relative group"
        >
          <div className="w-[40.36px] group h-[40.36px] left-0 top-0 absolute bg-[#2f006b] rounded-full border border-white transition-all duration-300 group-hover:bg-white"></div>
          <div
            data-svg-wrapper
            className="left-[10.53px] top-[13.24px] absolute"
          >
            <svg
              width="23"
              height="15"
              viewBox="0 0 23 15"
              fill="currentColor"
              className="text-white group-hover:text-[#2f006b]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M22.0245 2.50185L17.6282 6.82408L17.2666 7.17961L17.6272 7.53617L22.0255 11.8851L21.7508 12.1598L16.726 7.18146L21.75 2.22731L22.0245 2.50185ZM1.03027 13.6195V13.2317H15.8828V13.6195H1.03027ZM1.03027 7.37451V6.98674H11.9332V7.37451H1.03027ZM1.03027 1.12953V0.74176H15.8828V1.12953H1.03027Z"
                stroke="currentColor"
              />
            </svg>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: -10,
                  x: 100,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: -10,
                  x: 100,
                  filter: "blur(10px)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-[506.53px] pt-[20px] px-[47px] hidden sm:block absolute right-0 mt-16 z-20 shadow-lg p-4 bg-white/70 rounded-[20px] backdrop-blur-[134.35px]"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                >
                  {menu.map((item, index) => (
                    <motion.div
                      
                      key={index}
                      variants={staggerItem}
                      className="mt-2 "
                    >
                      <a href={item.link} className="hover:text-purple-600 mt-2 cursor-pointer w-full text-[#2c2536] text-[22px] font-medium font-['Inter'] leading-normal">

                      {item.title}
                      </a>
                    {  (index !== menu.length - 1) &&
                      <div className="w-full mt-3 ml-[-20px]" data-svg-wrapper>
<svg width="471" height="2" viewBox="0 0 471 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 1H471" stroke="#B982FF" stroke-width="0.5" stroke-dasharray="5 5"/>
</svg>
</div>}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
          <AnimatePresence>
        {isOpen2 && (
          <motion.div
          className="fixed top-0 z-30 inset-0 bg-gray-500 w-screen h-screen bg-opacity-[0.7] backdrop-filter backdrop-blur-sm flex items-center justify-evenly"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative md:h-[476.53px] sm:h-[300px] flex flex-row max-w-[908.76px] w-[80%] bg-white/80 items-center justify-evenly rounded-[20px] backdrop-blur-[134.35px]">
            {/* Close Button */}
           <Image src="/assets/close.svg" width={40} height={40} alt="close" onClick={() => setIsOpen2(!isOpen2)} className="absolute mr-[-16px] mt-[-15px] top-0 right-0 cursor-pointer" />
            
            <div className="w-[45%] flex flex-col sm:h-[80%] md:h-[428.54px] bg-white rounded-[20px]">
              <Image src="/assets/earning.svg" className="w-full border-b-2 border-[#7100FF]" width={225} height={300} alt="project1"/>
              <p className="mt-2 ml-6 text-[#2c2536] sm:text-[20px] md:text-[32px] font-semibold sm:leading-6 md:leading-10">
                Check your <br/>earning potential
              </p>
              <button
                onClick={() => window.open("https://thevibes.buzz")}
                className="bg-[#7000ff] ml-6 max-w-[250.98px] mt-5 text-white font-medium px-[9%] sm:px-[10%] py-4 rounded-full flex items-center gap-2 shadow-md hover:bg-purple-700 hover:scale-105 justify-around transition-transform duration-200"
              >
                <p className="text-white text-center text-lg sm:text-2xl font-medium leading-normal">Check Now</p>
                <svg className="rotate-45 mx-[0]" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" fill="white"/>
                </svg>
              </button>
            </div>
            
            <div className="w-[45%] sm:h-[80%] md:h-[428.54px] bg-white rounded-[20px]">
              <Image src="/assets/imba.svg" className="w-full border-b-2 border-[#7100FF]" width={225} height={300} alt="project1"/>
              <p className="mt-2 ml-6 text-[#2c2536] sm:text-[20px] md:text-[32px] font-semibold sm:leading-6 md:leading-10">
                Join our 7 days i-MBA 
              </p>
              <p className="ml-6 text-[#2c2536] italic sm:text-[20px] md:text-[32px] font-normal sm:leading-6 md:leading-10">
                Influencer ka MBA
              </p>
              <button
                onClick={() => window.open("https://www.thevibes.academy/become-an-insta-influencer-within-a-week/")}
                className="bg-[#7000ff] ml-6 max-w-[250.98px] mt-5 text-white font-medium px-[9%] sm:px-[10%] py-4 rounded-full flex items-center gap-2 shadow-md hover:bg-purple-700 hover:scale-105 justify-around transition-transform duration-200"
              >
                <p className="text-white text-center text-lg sm:text-2xl font-medium leading-normal">Enrol Now</p>
                <svg className="rotate-45 mx-[0]" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
        
        )}
      </AnimatePresence>
      </span>
    </div>
    
  <div
    className={`sm:hidden relative z-20 overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen ? "h-[550px]" : "h-0"
    }`}
  >
    {menu.map((item, index) => (
      <a
        href={item.link}
        key={index}
        className="block bg-[#46009e] text-white text-lg font-semibold leading-[45px] text-center border-b border-white py-2"
      >
        {item.title}
      </a>
    ))}
    <a
      href="/blogs"
      className="block bg-[#46009e] text-white text-lg font-semibold leading-[45px] text-center border-b border-white py-2"
    >
      BLOG
    </a>
  </div>
    </div>
  );
}

export default Header;
