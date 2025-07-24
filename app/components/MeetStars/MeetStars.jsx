"use client"
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Cards from "./Cards";
import MobileCards from "./MobileCards";
import Image from "next/image";
import Head from "next/head";
import { Play } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";

const tabs = ["Food", "Fashion", "Entertainment", "Lifestyle", "Travel"];
const data = {
  Food: [
    {
      id: 1,
      username: "@foodineerishita",
      followers: "59K",
      engagement: "4.18%",
      image: "/assets/stars/Ishita-Khajuria.webp",
      video: "/assets/video/Ishita.mp4"
    },
    {
      id: 2,
      username: "@flavours_of_wok",
      followers: "2M",
      engagement: "5.02%",
      image: "/assets/stars/Aiswarya-kesh.webp",
      video: "/assets/video/Aishwariya.mp4"
    },
    {
      id: 3,
      username: "@savorytales",
      followers: "500K",
      engagement: "3.04%",
      image: "/assets/stars/Richa.webp",
      video: "/assets/video/Richa.mp4"
    }
  ],
  Fashion: [
    {
      id: 1,
      username: "@kanishanancy_mn",
      followers: "51K",
      engagement: "4.05%",
      image: "/assets/stars/Kanisha.webp",
      video: "/assets/video/Kanisha.mp4"
    },
    {
      id: 2,
      username: "@that_crazy_bee",
      followers: "23K",
      engagement: "8.85%",
      image: "/assets/stars/Sreyashi-Biswas.webp",
      video: "/assets/video/Sreyashi.mp4"
    },
    {
      id: 3,
      username: "@jinita_sanghvi",
      followers: "66K",
      engagement: "3.97%",
      image: "/assets/stars/Jinita.webp",
      video: "/assets/video/Jinita.mp4"
    }
  ],
  Entertainment: [
    {
      id: 1,
      username: "@mehul_chugh0089",
      followers: "2M",
      engagement: "2.61%",
      image: "/assets/stars/Mehul-Chugh.webp",
      video: "/assets/video/Mehul.mp4"
    },
    {
      id: 2,
      username: "@mn_thapar",
      followers: "500K",
      engagement: "4.05%",
      image: "/assets/stars/Mohali.webp",
      video: "/assets/video/Mohali.mp4"
    },
    {
      id: 3,
      username: "@sajal_verma77",
      followers: "33K",
      engagement: "2.82%",
      image: "/assets/stars/Sajal-Verma.webp",
      video: "/assets/video/Sajal.mp4"
    }
  ],
  Lifestyle: [
    {
      id: 1,
      username: "@saaniyachaudhari_official",
      followers: "87K",
      engagement: "7.30%",
      image: "/assets/stars/Saaniya-Chaudhari.webp",
      video: "/assets/video/Saaniya.mp4"
    },
    {
      id: 2,
      username: "@lucknowigirl_ruchi",
      followers: "8K",
      engagement: "4.01%",
      image: "/assets/stars/Ruchi.webp",
      video: "/assets/video/Richa.mp4"
    },
    {
      id: 3,
      username: "@preet12189",
      followers: "1M",
      engagement: "2.59%",
      image: "/assets/stars/Preet.webp",
      video: "/assets/video/Preet.mp4"
    }
  ],
  Travel: [
    {
      id: 1,
      username: "@gargi_gangopadhyay",
      followers: "71K",
      engagement: "2.17%",
      image: "/assets/stars/Gargi.webp",
      video: "/assets/video/Gargi.mp4"
    },
    {
      id: 2,
      username: "@monaa_aashish",
      followers: "64K",
      engagement: "2.73%",
      image: "/assets/stars/Monaa.webp",
      video: "/assets/video/Monaa.mp4"
    },
    {
      id: 3,
      username: "@dishamotwani",
      followers: "97K",
      engagement: "6.43%",
      image: "/assets/stars/Disha-Motwani.webp",
      video: "/assets/video/Disha.mp4"
    }
  ]
};


export default function MeetStars() {
  const [activeTab, setActiveTab] = useState("Travel");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen2, setIsOpen2] = useState(false);
  const [video , setVideo] = useState("");
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const onLeft = () => {
    if(currentIndex>0)
    {setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? starData.length - 1 : prevIndex - 1
    );}
  };
  const onRight = () => {
    if(currentIndex<starData[activeTab].length-1)
    {setCurrentIndex((prevIndex) =>
      prevIndex === starData.length - 1 ? 0 : prevIndex + 1
    );}
  };
  return (
    <div id="meet-stars"  className="w-full max-w-4xl mx-auto mt-20 sm:mt-[160px]">
      <p className=" text-center text-[#2d2636] sm:text-5xl sm:font-semibold text-[28px] font-semibold leading-[59px]">Meet Our Stars</p>
      <div className="flex mt-[40px] space-x-4 justify-center pb-2  border-b-2 border-[#E7DAFF]">
        <div className="flex flex-row">

        <div className="hidden md:flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setCurrentIndex(0); }}
              className={`relative px-4 py-2 font-medium transition-colors ${
                activeTab === tab ? "text-purple-600" : "text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute rounded-full top-12 left-0 right-0 h-1 bg-purple-600 bottom-0"
                />
              )}
            </button>
          ))}
        </div>
        <button
              onClick={() => setIsOpen(true)}
              className={`relative hidden md:block px-4 py-2 font-medium transition-colors text-gray-600 `}
            >
              + More
            </button>
            


        </div>
        <div className="relative w-1/2 z-20 md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-1/2 m-auto flex  items-center py-2 text-center text-[#46009e] text-base font-semibold justify-evenly leading-normal rounded-md "
      >
        <p>
          {activeTab}
          </p>
          <div data-svg-wrapper>
<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.51837 1.66064L7.97394 8.11597L14.4293 1.66064" stroke="#A98EC9" strokeWidth="2" strokeLinecap="round"/>
</svg>
</div>

      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 mt-2 flex flex-col items-center bg-white border border-gray-300 rounded-md shadow-md"
          >
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsOpen(false);
                  setCurrentIndex(0);
                }}
                className="py-2 hover:bg-gray-100 cursor-pointer"
              >
                {tab}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex flex-row mt-6 justify-center"
        >
          {data[activeTab]?.map((user , index) => {
            if(data[activeTab].length<=3)
              return(
                <motion.div
                  key={user.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsOpen2(true)}
                  onMouseEnter={() => setVideo(user.video)}
                  className="relative mx-5 border-2 border-purple-600 overflow-hidden rounded-2xl cursor-pointer"
                >
                  <motion.div
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <Cards {...user} />
                </motion.div>
              );
            else if(index>=data[activeTab].length-3)
              return(
                <motion.div
                  key={user.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsOpen2(true)}
                  onMouseEnter={() => setVideo(user.video)}
                  className="relative mx-5 border-2 border-purple-600 overflow-hidden rounded-2xl cursor-pointer"
                >
                  <motion.div
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <Cards {...user} />
                </motion.div>
              );
          })}
        </motion.div>
      </AnimatePresence>
      <div className="md:hidden flex justify-center w-[98%] flex-row m-auto">
        <div
          className="flex justify-center items-center"
          onClick={onLeft}
        >
          <div className="flex justify-center w-10" data-svg-wrapper>
<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.19727 0.547119L1.59619 5.14819L6.19727 9.74927" stroke="#A98EC9" strokeLinecap="round"/>
</svg>
</div>
        </div>

        <div onClick={() => { setIsOpen2(true); setVideo(data[activeTab][currentIndex].video) }} className="relative flex justify-center">
          {data[activeTab]?.[currentIndex] && (
            <MobileCards {...data[activeTab][currentIndex]} />
          )}
        </div>
        <div
          className="flex justify-around items-center"
          onClick={onRight}
        >
          <div className="flex justify-center w-10" data-svg-wrapper>
<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.802734 10.5156L5.40381 5.91455L0.802735 1.31348" stroke="#A98EC9" strokeLinecap="round"/>
</svg>
</div>
        </div>
      </div>
            {/* Modal */}
    <AnimatePresence>
        {isOpen2 && (
          <motion.div
            className="fixed z-40 inset-0 flex bg-gray-500 w-screen h-screen justify-center pt-20 md:pt-8 bg-opacity-[0.7] backdrop-filter backdrop-blur-sm "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            
          >
            <div className="flex sm:m-0 mx-5 px-10 pt-16 sm:pt-8 justify-center bg-white/0 rounded-[20px] max-h-[700px] relative">
  <div className="relative">
    {/* Close Button */}
    <Image 
      src="/assets/close.svg" 
      width={40} 
      height={40} 
      alt="close" 
      onClick={() => setIsOpen2(!isOpen2)} 
      className="absolute z-40 top-[-10px] right-[-10px] cursor-pointer"
    />

    {/* Video Element */}
    <video
        ref={videoRef}
        preload="auto"
        loop
        autoPlay
        width="360"
        height="640"
        className="rounded-[20px] border-[10px] border-white"
        onClick={togglePlay}
        onPause={() => setIsPaused(true)}
        onPlay={() => setIsPaused(false)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {isPaused && (
        <button
          onClick={togglePlay}
          className="absolute flex inset-0 items-center justify-center rounded-[20px] transition-opacity duration-300"
        >
          <div className="relative top-[-20px] z-30" data-svg-wrapper>
<svg width="44" height="49" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.9097 20.1782C44.243 22.1027 44.243 26.9139 40.9097 28.8384L8.19897 47.724C4.86564 49.6485 0.698968 47.2428 0.698969 43.3938L0.69897 5.62277C0.69897 1.77377 4.86564 -0.631857 8.19897 1.29264L40.9097 20.1782Z" fill="white" fillOpacity="0.6"/>
</svg>
</div>
        </button>
      )}
  </div>
</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
