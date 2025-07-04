import Image from 'next/image';
import Button from '../Button';
import {motion} from 'motion/react'
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
function Hero1() {
  const router = useRouter();
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} // Start position (blurred & lower)
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // End position (clear & normal)
    transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
     className='flex flex-col items-center justify-center bg-[white] py-10'>
      <div>

        <div className="text-center text-[#7000ff] text-[40px] sm:text-[80px] font-bold sm:leading-[80px relative">50K+ Influencers
          
      <motion.span
        className="absolute -top-5 left-32 z-10 bg-[#b981ff] text-white text-sm px-3 py-1 rounded-full rotate-45 shadow-md"
        animate={{ y: [0, -5, 0]  , rotate : [-16, 10, -16]}}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <div className="w-fit origin-top-left text-center text-white sm:text-2xl font-normal px-2 leading-normal">Hyperlocal</div>
      </motion.span>
          <br/>across India 
        
      <motion.span
        className=" absolute  bottom-8 sm:bottom-5 right-0 sm:-right-14 z-10 bg-[#b981ff] text-white text-sm px-3 py-1 rounded-full rotate-45 shadow-md"
        animate={{ y: [0, -10, 0]  , rotate : [10, -10, 10]}}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
       <div className="w-fit  text-center text-white sm:text-2xl font-normal leading-normal px-2">Multilingual</div>
      </motion.span>
        </div>
        <p className="text-[#46009e] mt-5 text-center sm:text-4xl font-normal font-['Inter'] sm:leading-[45px] relative">Get the right influencer at the right cost


        </p>

      </div>
        {/* Floating Labels */}
        <div className='w-fit mt-10'>
          <Button text="Get now"/>
        </div>
        <div className="hidden w-[90%] mt-10 md:flex gap-2 overflow-x-auto p-4 justify-center">
  {data.map((video, index) => (
    <div
      key={index}
      className="w-32 relative transform transition-all duration-300 peer hover:scale-110"
    >
      <video
        src={video.video}
        className="w-full h-full object-cover rounded-lg"
        muted
        loop
        onMouseEnter={(e) => e.target.play()}
        onMouseLeave={(e) => e.target.pause()}
      />
    </div>
  ))}
</div>
        <div className="md:hidden w-[90%] mt-10 flex gap-2 overflow-x-auto p-4 justify-center">
  {data.map((video, index) => {
    if(index<4)
    return(
    <div
      key={index}
      className="w-32 relative transform transition-all duration-300 peer hover:scale-110"
    >
      <video
        src={video.video}
        className="w-full h-full object-cover rounded-lg"
        muted
        loop
        onMouseEnter={(e) => e.target.play()}
        onMouseLeave={(e) => e.target.pause()}
      />
    </div>
  )})}
</div>


<div className="flex flex-wrap items-center justify-center md:justify-between max-w-[900px] w-[80%] m-auto gap-4 mt-10 mb-10">
  <p className="text-[#554469] text-lg md:text-xl font-normal leading-normal w-full text-center md:w-auto md:mr-2">
  Media Coverage
  </p>

  <Image onClick={()=>{
    router.push('https://www.educationtimes.com/article/editor-s-pick/99735357/the-vibes-academy-voices-inspiring-a-better-society')
  }} src="assets/education.svg" width={100} height={50} alt="education" className="w-20 sm:w-24 md:w-28 hover:cursor-pointer" />
  <Image onClick={()=>{
    router.push('https://www.timesnownews.com/business-economy/industry/indias-vibes-academy-embarks-on-ambitious-skill-revolution-to-shape-formidable-workforce-article-110369285')
  }} src="assets/times.svg" width={100} height={50} alt="times" className="w-20 sm:w-24 md:w-28 hover:cursor-pointer "/>
  <Image onClick={()=>{
    router.push('https://www.bhaskarhindi.com/education/vibes-academy-pioneering-positive-change-in-the-field-of-social-messaging-and-skill-training-1032784')
  }} src="assets/dainik.svg" width={100} height={50} alt="dainik" className="w-20 sm:w-24 md:w-28 hover:cursor-pointer" />
  <Image onClick={()=>{
    router.push('https://www.abplive.com/brand-wire/the-best-online-platform-for-developing-and-training-influencers-who-set-social-media-trends-2695545')
  }} src="assets/abp.svg" width={100} height={50} alt="abp" className="w-20 sm:w-24 md:w-28 hover:cursor-pointer" />
  <Image onClick={()=>{
    router.push('https://english.newsnationtv.com/brand-stories/brand-stories-english/introducing-the-vibes-academy-pioneering-positive-change-in-social-messaging-and-skill-training-259877.html')
  }} src="assets/nation.svg" width={100} height={50} alt="nation" className="w-20 sm:w-24 md:w-28 hover:cursor-pointer" />
</div>


    </motion.div>
  );
}

export default Hero1;
