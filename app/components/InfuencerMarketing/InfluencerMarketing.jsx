"use client"
import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function InfluencerMarketing() {
  // Setup Framer Motion controls and ref for inView detection
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  // Trigger animation when inView
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variants for each stat item with staggered delay
  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(4px)", x: -40 },
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    }),
  };
  return (
    <motion.div id="influencer-marketing"  ref={ref} className='max-w-[1350px] flex flex-col justify-around mx-auto mt-20 sm:mt-[160px]'>
        <div className='flex flex-col items-center '>

      <p className="hidden sm:block text-center text-[#2d2636] text-5xl font-semibold leading-[59px]">The Rise of <br/>Influencer Marketing in India</p>
      <p className="sm:hidden w-full  text-center text-[#2d2636] text-[28px] font-semibold leading-[34px]">The Rise of <br/>Influencer Marketing <br/>in India</p>
      <p className=" text-center text-[#001a29] mt-[20px] hidden sm:block sm:text-xl sm:font-normal leading-7">Fueled by digital innovation and a dynamic youth, the growth of influencer marketing in India has been<br></br> nothing short of phenomenal; transforming digital advertising, reshaping brand strategies and encouraging <br></br>a shift towards creator-led campaigns. As more brands incorporate influencer marketing into their media <br></br>plans, it continues to redefine how audiences connect with brands.</p>

      <div className='flex flex-col md:flex-row justify-around'>
        <div className='flex-col'>
  <motion.div custom={0}
          initial="hidden"
          animate={controls}
          variants={itemVariants} className="sm:w-[562.43px] mt-7 mx-auto w-[90%] px-2 py-6 sm:p-0 sm:h-[190.08px] bg-[#f6efff] rounded-[20px] flex flex-row justify-around " >
            <Image className="px-2 sm:p-0" src="assets/emerging.svg" width={110} height={100} alt="crown"/>
            <div className="flex flex-col justify-center">
            <p className=" text-[#46009e] max-w-[200px] sm:max-w-[1000px] sm:text-[28px] sm:font-semibold sm:leading-[35px] text-lg font-semibold font-['Inter'] leading-snug">Emerging Opportunities</p>
            <p className="hidden sm:block text-[#001a29] mt-2 sm:mt-0 sm:text-lg sm:font-normal sm:leading-snug text-xs font-normal leading-none">The demand for authentic and <br></br>engaging content continues to rise, <br></br>creating new avenues for innovative <br></br>marketing strategies.</p>
            <p className="sm:hidden text-[#001a29] mt-2 sm:mt-0 sm:text-lg sm:font-normal sm:leading-snug text-xs font-normal leading-none">The demand for authentic and <br></br>engaging content continues to rise, <br></br>creating new avenues for <br></br> innovativemarketing strategies.</p>
            </div>
        </motion.div>
  <motion.div custom={1}
          initial="hidden"
          animate={controls}
          variants={itemVariants} className="sm:w-[562.43px] mt-5 sm:my-5 mx-auto w-[90%] p-6  sm:p-0 sm:h-[190.08px] bg-[#f6efff] rounded-[20px] flex flex-row justify-around " >
            <Image className="px-2 sm:p-0" src="assets/youth.svg" width={110} height={100} alt="crown"/>
            <div className="flex flex-col justify-center">
            <p className="  text-[#46009e] max-w-[200px] sm:max-w-[1000px] sm:text-[28px] sm:font-semibold sm:leading-[35px] text-lg font-semibold font-['Inter'] leading-snug">Youth Engagement</p>
            <p className=" text-[#001a29] mt-2 sm:mt-0 sm:text-lg sm:font-normal sm:leading-snug text-xs font-normal leading-none">Younger demographics are more <br></br>engaged with influencers, presenting a<br></br> prime opportunity for brands to<br></br> connect with them.</p>
            </div>
        </motion.div>
  <motion.div custom={2}
          initial="hidden"
          animate={controls}
          variants={itemVariants} className="sm:w-[562.43px] sm:mt-0 mt-5  mx-auto w-[90%] p-6  sm:p-0 sm:h-[190.08px] bg-[#f6efff] rounded-[20px] flex flex-row justify-around  " >
            <Image className="px-5 sm:p-0" src="assets/shift.svg" width={110} height={100} alt="crown"/>
            <div className="flex flex-col justify-center">
            <p className=" text-[#46009e] max-w-[200px] sm:max-w-[1000px] sm:text-[28px] sm:font-semibold sm:leading-[35px] text-lg font-semibold font-['Inter'] leading-snug">Shift in Ad Spends</p>
            <p className=" text-[#001a29] mt-2 sm:mt-0 sm:text-lg sm:font-normal sm:leading-snug text-xs font-normal leading-none">Influencer marketing is booming in India, <br></br>with brands increasingly integrating it <br></br>into their media plans.</p>
            </div>
        </motion.div>

        </div>

        <motion.div custom={3}
          initial="hidden"
          animate={controls}
          variants={itemVariants} className="h-[613.23px] px-[55px] mt-[30px] ml-[20px] w-[332.78px] bg-[#f6efff] hidden sm:flex flex-col justify-evenly rounded-[20px]">
        <Image className="ml-[-10px]" src="assets/india.svg" width={230} height={100} alt="crown"/>
        <div className='flex flex-col justify-evenly'>
            <span>
                <p className='text-[#46009e] text-[28px] font-semibold leading-[35px]'>
                ₹3375 cr
                </p>
                <p className="text-[#001b2a] text-lg font-normal  leading-7">by 2026</p>
            </span>
            
            <div data-svg-wrapper className='my-[15px]'>
<svg width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.896973 1.66699H39.1598" stroke="#BC9EE2" strokeWidth="1.65077" strokeDasharray="3.3 3.3"/>
</svg>
</div>
            <span>
                <p className='text-[#46009e] text-[28px] font-semibold leading-[35px]'>
                75 Cr Indians
                </p>
                <p className="text-[#001b2a] text-lg font-normal  leading-7">on Social Media</p>
            </span>

            <div data-svg-wrapper className='my-[15px]'>
<svg width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.896973 1.66699H39.1598" stroke="#BC9EE2" strokeWidth="1.65077" strokeDasharray="3.3 3.3"/>
</svg>
</div>

<span>
                <p className='text-[#46009e] text-[28px] font-semibold leading-[35px]'>
                25% Growth
                </p>
                <p className="text-[#001b2a] text-lg font-normal  leading-7">in 2024 alone</p>
            </span>
        </div>
        </motion.div>
        <motion.div custom={4}
          initial="hidden"
          animate={controls}
          variants={itemVariants} className="h-[184.59px] sm:hidden m-auto py-5 mt-5 w-[350.77px] bg-[#f6efff] rounded-[20px] flex flex-row">
        <Image className="" src="assets/india.svg" width={190} height={100} alt="crown"/>
        <div className='flex flex-col justify-evenly'>
            <span>
                <p className='text-[#46009e] text-xl font-semibold leading-none'>
                ₹3375 cr
                </p>
                <p className="text-[#001b2a] text-xs font-normal leading-none">by 2026</p>
            </span>
            
            <div data-svg-wrapper className='my-[10px]'>
<svg width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.896973 1.66699H39.1598" stroke="#BC9EE2" strokeWidth="1.65077" strokeDasharray="3.3 3.3"/>
</svg>
</div>
            <span>
                <p className='text-[#46009e] text-xl font-semibold leading-none'>
                75 Cr Indians
                </p>
                <p className="text-[#001b2a] text-xs font-normal leading-none">on Social Media</p>
            </span>

            <div data-svg-wrapper className='my-[10px]'>
<svg width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.896973 1.66699H39.1598" stroke="#BC9EE2" strokeWidth="1.65077" strokeDasharray="3.3 3.3"/>
</svg>
</div>

<span>
                <p className='text-[#46009e] text-xl font-semibold leading-none'>
                25% Growth
                </p>
                <p className="text-[#001b2a] text-xs font-normal leading-none">in 2024 alone</p>
            </span>
        </div>
        </motion.div>
        <div>
            
        </div>
      </div>
      <div className="mt-[50px] mb-[-50px] w-fit">

      <Button text="Talk to our Experts"/>
      </div>
        </div>
    </motion.div>
  )
}

export default InfluencerMarketing
