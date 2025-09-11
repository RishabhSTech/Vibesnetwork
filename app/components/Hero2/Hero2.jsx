"use client";
import Image from 'next/image';
import Button from '../Button';
import {motion} from 'motion/react'
import LanguageCircles from './India';
import { useRouter } from 'next/navigation';
const data = [
  { video: "./assets/explore/1.mp4" },
  { video: "./assets/explore/2.mp4" },
  { video: "./assets/explore/3.mp4" },
  { video: "./assets/explore/4.mp4" },
  { video: "./assets/explore/5.mp4" },
  { video: "./assets/explore/6.mp4" },
  { video: "./assets/explore/7.mp4" },
  { video: "./assets/explore/8.mp4" },
  { video: "./assets/explore/9.mp4" },
  { video: "./assets/explore/10.mp4" },
  { video: "./assets/explore/11.mp4" },
  { video: "./assets/explore/12.mp4" },
];
function Hero2() {
  const router = useRouter();
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} // Start position (blurred & lower)
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // End position (clear & normal)
  transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
     className='flex flex-col items-center justify-center sm:-mt-5 md:-mt-[50px] md:-mb-[50px] pl-5 sm:pl-10 py-0'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='flex flex-col  md:mt-0'>

      <div>

        <div className="relative text-[#7000ff] text-6xl font-bold leading-[60px]">50K+ Influencers
          
      <motion.span
        className="absolute z-10 -top-10 left-20  bg-[#b981ff] text-white text-sm px-3 py-1 rounded-full rotate-45 shadow-md"
        animate={{ y: [0, -5, 0]  , rotate : [-16, 10, -16]}}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <div className=" sm:w-[129px] text-center text-white text-2xl font-normal  leading-normal">Hyperlocal</div>
      </motion.span>
          <br/>
        
      <motion.span
        className=" absolute z-10 top-56 sm:top-20 md:right-[1.5rem] right-5  bg-[#b981ff] text-white text-sm px-3 py-1 rounded-full rotate-45 shadow-md"
        animate={{ y: [0, -10, 0]  , rotate : [10, -10, 10]}}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
       <div className="w-[135px]  text-center text-white text-2xl font-normal font-['Inter'] leading-normal">Multilingual</div>
      </motion.span>
        across India </div>
        <p className="text-[#46009e] mt-5 text-left sm:text-[28px] font-normal font-['Inter'] sm:leading-[45px]">Get the right influencer at the right cost</p>

      </div>
        {/* Floating Labels */}
        <div className='w-fit mt-6'>
          <Button text="Get now"/>
        </div>
        
            </div>
            <div className="sm:ml-14 md:hidden sm:w-auto w-full px-5 sm:mb-0 mt-10 sm:-mt-5">
                <Image src="assets/indiaHero1.svg" width={500} height={500} alt="hero2"/>

            </div>
            <div className="sm:ml-14 hidden md:block sm:w-auto w-3/4 mb-20 sm:mb-0 mt-10 sm:-mt-5">
               <LanguageCircles/>
            </div>

            

        </div>
        


    </motion.div>
  );
}

export default Hero2;
