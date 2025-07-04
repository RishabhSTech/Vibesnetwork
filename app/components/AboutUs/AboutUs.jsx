"use client"
import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function AboutUs() {
  
  // Setup Framer Motion controls and refs for inView detection
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref1, inView1] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({ threshold: 0.3 });

  // Trigger animation when inView1
  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  // Trigger animation when inView2
  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  // Variants for each stat item with staggered delay
  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(4px)", y: 40 },
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    }),
  };

  const variant2 = {
    hidden : {opacity : 0 , y : 40},
    visible : {opacity : 1 , y : 0 , transition : {duration : 0.6 , ease : "easeOut"}}
  }

  return (
    <div  id="about-us"  ref={ref1} className="mt-[150px] pb-[100px] sm:pb-[200px] pt-[163px] md:min-h-[1938.67px] bg-[#46009e]">
      <p  className="mt-[-100px] sm:mt-0 text-center text-white text-[28px] sm:text-5xl font-semibold leading-[59px]">
        About Us
      </p>
      <p className="hidden sm:block px-10 text-center text-white text-base font-normal  leading-normal mt-[30px] ">
        The Vibes Network is a pioneering initiative brought to life by the accomplished team at Thinquilab, an organisation known for its<br/> innovative problem-solving initiatives. We are committed to creating solutions that are effective and sustainable, ensuring that both <br/>brands and influencers thrive. Our team comprises professionals and experts in Strategy, Creative Content, Large-Scale Operations,<br/> Technology, and Data Analytics to address issues head-on. <br/><br/>The Vibes Network was conceived with a singular vision: to address the critical challenges faced by brands in the increasingly<br/> complex world of influencer marketing. We recognise the growing complexities in the industry-from pricing to tracking the right <br/>social campaign metrics to executing large-scale influencer marketing campaigns effectively. With a commitment to transparency <br/>and excellence, The Vibes Network team is dedicated to helping brands with impactful and successful campaigns every time.
      </p>
      <p className="sm:hidden px-10 text-center text-white text-sm  font-normal  leading-normal mt-[30px] ">
        The Vibes Network is a pioneering initiative <br/>brought to life by the accomplished team at <br/>Thinquilab, an organisation known for its <br/>innovative problem-solving initiatives. We are<br/> committed to creating solutions that are effective<br/>  and sustainable, ensuring that both brands and <br/> influencers thrive. Our team comprises<br/>  professionals and experts in Strategy, Creative <br/> Content, Large-Scale Operations, Technology,<br/> and Data Analytics to address issues head-on. <br/><br/>The Vibes Network was conceived with a <br/>singular vision: to address the critical challenges<br/> faced by brands in the increasingly complex<br/> world of influencer marketing. We recognise the<br/> growing complexities in the industry-from pricing<br/> to tracking the right social campaign metrics to<br/> executing large-scale influencer marketing<br/> campaigns effectively. With a commitment to <br/> transparency and excellence, The Vibes Network <br/> team is dedicated to helping brands with <br/> impactful and successful campaigns every time.
      </p>
      <p id="lead" className="sm:mt-[30px] w-[60%] m-auto sm:w-full mt-14 text-center text-white text-[28px] sm:text-5xl font-semibold sm:leading-[59px]">
        Meet Our Leadership Team
      </p>
      <div className='flex flex-col items-center'>
        
      <motion.div className="sm:px-0 px-8 w-[70%] items-center justify-evenly flex md:flex-row flex-col m-auto mt-[40px]">
        <motion.div custom={0}
          initial="hidden"
          animate={controls1}
          variants={itemVariants} className="flex flex-col ">

          <Image src="./assets/sagar.svg" width={300} height={300} alt="leader1"/>
          <p className=" text-white text-2xl font-medium  mt-[10px] leading-9">Sagar Boddeda</p>
          <span onClick={()=>{
                window.open("https://www.linkedin.com/in/sagar-boddeda-085791147/")
              }} className="flex flex-row cursor-pointer group">
            <div className="w-[77.52px] text-[#d7b8ff] text-lg font-normal font-['Inter'] leading-[27px]">LinkedIn</div>
            <div data-svg-wrapper className="mt-[8px] ml-[5px] group-hover:rotate-45 transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.27486 11.9507L0.0566406 10.7325L8.41016 2.37899H0.926799V0.638672H11.3687V11.0806H9.62838V3.59721L1.27486 11.9507Z" fill="#D8B9FF"/>
              </svg>
            </div>
          </span>
        </motion.div>
        <motion.div custom={1}
          initial="hidden"
          animate={controls1}
          variants={itemVariants} className="flex flex-col sm:my-0 my-10 md:mx-[80px]">

          <Image src="./assets/porwal.svg" width={300} height={300} alt="leader1"/>
          <p className=" text-white text-2xl font-medium  mt-[10px] leading-9">Sandiip Porwal</p>
          <span onClick={()=>{
                window.open("https://www.linkedin.com/in/sandiipporwal/")
              }} className="flex flex-row cursor-pointer group">
            <div className="w-[77.52px] text-[#d7b8ff] text-lg font-normal font-['Inter'] leading-[27px]">LinkedIn</div>
            <div data-svg-wrapper className="mt-[8px] ml-[5px] group-hover:rotate-45 transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.27486 11.9507L0.0566406 10.7325L8.41016 2.37899H0.926799V0.638672H11.3687V11.0806H9.62838V3.59721L1.27486 11.9507Z" fill="#D8B9FF"/>
              </svg>
            </div>
          </span>
        </motion.div>
        <motion.div custom={2}
          initial="hidden"
          animate={controls1}
          variants={itemVariants} className="flex flex-col">

          <Image src="./assets/rabiul.svg" width={300} height={300} alt="leader1"/>
          <p className=" text-white text-2xl font-medium  mt-[10px] leading-9">Rabiul Islam</p>
          <span onClick={()=>{
                window.open("https://www.linkedin.com/in/designgundey/")
              }}  className="flex flex-row cursor-pointer group">
            <div className="w-[77.52px] text-[#d7b8ff] text-lg font-normal font-['Inter'] leading-[27px]">LinkedIn</div>
            <div data-svg-wrapper className="mt-[8px] ml-[5px] group-hover:rotate-45 transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.27486 11.9507L0.0566406 10.7325L8.41016 2.37899H0.926799V0.638672H11.3687V11.0806H9.62838V3.59721L1.27486 11.9507Z" fill="#D8B9FF"/>
              </svg>
            </div>
          </span>
        </motion.div>
      </motion.div>
      <motion.div ref={ref1} className="sm:px-0 px-8 w-[70%] sm:w-[55%] items-center justify-evenly flex md:flex-row flex-col m-auto mt-[50px]">
        <motion.div custom={0}
          initial="hidden"
          animate={controls1}
          variants={itemVariants} className="flex flex-col ">

          <Image src="./assets/Anupriya.svg" width={300} height={300} alt="leader1"/>
          <p className=" text-white text-2xl font-medium  mt-[10px] leading-9">Anupriya Khare</p>
          <span onClick={()=>{
                window.open("https://www.linkedin.com/in/anupriyakhare1012/")
              }} className="flex flex-row cursor-pointer group">
            <div className="w-[77.52px] text-[#d7b8ff] text-lg font-normal font-['Inter'] leading-[27px]">LinkedIn</div>
            <div data-svg-wrapper className="mt-[8px] ml-[5px] group-hover:rotate-45 transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.27486 11.9507L0.0566406 10.7325L8.41016 2.37899H0.926799V0.638672H11.3687V11.0806H9.62838V3.59721L1.27486 11.9507Z" fill="#D8B9FF"/>
              </svg>
            </div>
          </span>
        </motion.div>
        <motion.div custom={1}
          initial="hidden"
          animate={controls1}
          variants={itemVariants} className="flex flex-col sm:my-0 my-10">

          <Image src="./assets/salman.svg" width={300} height={300} alt="leader1"/>
          <p className=" text-white text-2xl font-medium  mt-[10px] leading-9">Salman Saleem</p>
          <span onClick={()=>{
                window.open("https://www.linkedin.com/in/salman-saleem-2105281b7/")
              }} className="flex flex-row cursor-pointer group">
            <div className="w-[77.52px] text-[#d7b8ff] text-lg font-normal font-['Inter'] leading-[27px]">LinkedIn</div>
            <div data-svg-wrapper className="mt-[8px] ml-[5px] group-hover:rotate-45 transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.27486 11.9507L0.0566406 10.7325L8.41016 2.37899H0.926799V0.638672H11.3687V11.0806H9.62838V3.59721L1.27486 11.9507Z" fill="#D8B9FF"/>
              </svg>
            </div>
          </span>
        </motion.div>
       
        
      </motion.div>
      </div>
      <div className="mt-[50px] mb-[200px] w-fit m-auto">
        <Button text="Schedule Meeting"/>
      </div>
      <motion.div ref={ref2} initial="hidden" animate={controls2} variants={variant2}>
        <p className=" text-center text-[#ffe49f] sm:text-[28.77px] text-base font-medium uppercase leading-[41.72px] tracking-wide mt-[-120px] sm:mt-0">Our Mission</p>
        <p className="text-center text-white sm:text-[85.30px] font-light text-[28px] leading-[34px] sm:leading-[102.37px]">Empowering Creativity<br/> & Driving Impact</p>
        <p className="hidden sm:block text-center mt-[30px] text-white text-base font-normal leading-normal">The Vibes Network is a leading influencer marketing platform with 50,000+ exclusive influencers across diverse <br/>categories. We deliver high-impact influencer marketing campaigns that amplify your brand's reach and engagement. <br/>By empowering young, creative talent, we're reshaping influencer marketing and offering brands unmatched visibility<br/> and conversion rates. Together, we drive positive change in society and the economy.</p>
        <p className="sm:hidden px-14 text-center mt-[30px] text-white text-base font-normal leading-normal">The Vibes Network is a leading <br/>influencer marketing platform with <br/>50,000+ exclusive influencers across<br/> diverse categories. We deliver high-<br/>impact influencer marketing <br/>campaigns that amplify your brand's <br/>reach and engagement.By empowering young, creative talent,<br/> we're reshaping influencer marketing<br/> and offering brands unmatched<br/> visibility and conversion rates.<br/> Together, we drive positive change <br/>in society and the economy.</p>

      </motion.div>
      <div className="mt-[50px] w-fit m-auto">
        <Button text="Contact Campaign Expert"/>
      </div>
    </div>
  )
}

export default AboutUs
