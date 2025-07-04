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
     className='flex flex-col items-center justify-center pl-5 sm:pl-10 py-10'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='flex flex-col  md:mt-0 sm:pt-20'>

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
        <div className='hidden sm:block'>

        <p className="text-[#554469] mx-auto sm:mx-0 mt-10 md:mr-[-10px] text-xl font-normal leading-normal">Media Coverage</p>
<div className='flex mb-10 items-center scale-90 sm:scale-100 mt-4 flex-row max-w-[900px] justify-between'>
        <Image onClick={()=>{
          router.push('https://www.educationtimes.com/article/editor-s-pick/99735357/the-vibes-academy-voices-inspiring-a-better-society')
        }} src="assets/education.svg" width={90} height={50} alt="forbes" className='mr-5 hover:cursor-pointer'/>
        <Image onClick={()=>{
          router.push('https://www.timesnownews.com/business-economy/industry/indias-vibes-academy-embarks-on-ambitious-skill-revolution-to-shape-formidable-workforce-article-110369285')
        }} src="assets/times.svg" width={90} height={50} alt="forbes" className=' mr-5  hover:cursor-pointer'/>
        <Image onClick={()=>{
          router.push('https://www.bhaskarhindi.com/education/vibes-academy-pioneering-positive-change-in-the-field-of-social-messaging-and-skill-training-1032784')
        }} src="assets/dainik.svg" width={90} height={50} alt="forbes" className='mr-5 hover:cursor-pointer'/>
        <Image onClick={()=>{
          router.push('https://www.abplive.com/brand-wire/the-best-online-platform-for-developing-and-training-influencers-who-set-social-media-trends-2695545')
        }} src="assets/abp.svg" width={90} height={50} alt="forbes" className='mr-5 hover:cursor-pointer'/>
        <Image onClick={()=>{
          router.push('https://english.newsnationtv.com/brand-stories/brand-stories-english/introducing-the-vibes-academy-pioneering-positive-change-in-social-messaging-and-skill-training-259877.html')
        }} src="assets/nation.svg" width={90} height={50} alt="forbes" className=' hover:cursor-pointer'/>
    </div>
        </div>
            </div>
            <div className="sm:ml-14 md:hidden sm:w-auto w-full px-5 sm:mb-0 mt-10 sm:-mt-5">
                <Image src="assets/indiaHero1.svg" width={500} height={500} alt="hero2"/>
                <div className='sm:hidden'>

        <p className="text-[#554469] mx-auto sm:mx-0 mt-10 md:mr-[-10px]  text-xl font-normal leading-normal">Media Coverage</p>
<div className='flex mb-10 items-center scale-90 sm:scale-100 mt-4 flex-row max-w-[900px] justify-between'>
        <Image onClick={()=>{
          router.push('https://www.educationtimes.com/article/editor-s-pick/99735357/the-vibes-academy-voices-inspiring-a-better-society')
        }} src="assets/education.svg" width={90} height={50} alt="forbes" className='mr-5 hover:cursor-pointer'/>
        <Image onClick={()=>{
          router.push('https://www.timesnownews.com/business-economy/industry/indias-vibes-academy-embarks-on-ambitious-skill-revolution-to-shape-formidable-workforce-article-110369285')
        }} src="assets/times.svg" width={90} height={50} alt="forbes" className=' mr-5  hover:cursor-pointer'/>
        <Image onClick={()=>{
          router.push('https://www.bhaskarhindi.com/education/vibes-academy-pioneering-positive-change-in-the-field-of-social-messaging-and-skill-training-1032784')
        }} src="assets/dainik.svg" width={90} height={50} alt="forbes" className='mr-5 hover:cursor-pointer'/>
        <Image onClick={()=>{
          router.push('https://www.abplive.com/brand-wire/the-best-online-platform-for-developing-and-training-influencers-who-set-social-media-trends-2695545')
        }} src="assets/abp.svg" width={90} height={50} alt="forbes" className='mr-5 hover:cursor-pointer'/>
        <Image onClick={()=>{
          router.push('https://english.newsnationtv.com/brand-stories/brand-stories-english/introducing-the-vibes-academy-pioneering-positive-change-in-social-messaging-and-skill-training-259877.html')
        }} src="assets/nation.svg" width={90} height={50} alt="forbes" className=' hover:cursor-pointer'/>
    </div>
        </div>
            </div>
            <div className="sm:ml-14 hidden md:block sm:w-auto w-3/4 mb-20 sm:mb-0 mt-10 sm:-mt-5">
               <LanguageCircles/>
            </div>

            

        </div>
        


    </motion.div>
  );
}

export default Hero2;
