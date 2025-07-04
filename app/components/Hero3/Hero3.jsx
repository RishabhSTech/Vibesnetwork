"use client";
import { useState } from "react";
import React from "react";
import { motion } from "motion/react";
import Button from "../Button";
import { Mail, Phone, Globe } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
function Hero3() {
  const router = useRouter();
   const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [isError, setIsError] = useState(false);
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmited] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim inputs to remove leading/trailing spaces
    const { name, phone, email, website } = form;

    // Basic empty field validation
    if (!name.trim() || !phone.trim() || !email.trim() || !website.trim()) {
        setError("Please fill all the fields");
        setIsError(true);
        return;
    }

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        setError("Please enter a valid email address");
        setIsError(true);
        return;
    }

    // Phone number validation (Only digits and length check)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        setError("Please enter a valid phone number");
        setIsError(true);
        return;
    }

    
    // If all validations pass
    setForm({ name: "", email: "", message: "", phone: "", website: "" });
    setIsSubmited(true)

    setTimeout(() => {
      setIsOpen(false);
      setIsSubmited(false);
      setError("");
      setIsError(false);
    }, 3000);
    
};
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} // Start position (blurred & lower)
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} // End position (clear & normal)
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      className="flex flex-col items-center justify-center pl-5 sm:pl-10 py-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col">
          <div>
            <div className="relative text-[#7000ff] text-6xl font-bold leading-[60px]">
              50K+ Influencers
              <motion.span
                className="absolute z-10 -top-10 left-20  bg-[#b981ff] text-white text-sm px-3 py-1 rounded-full rotate-45 shadow-md"
                animate={{ y: [0, -5, 0], rotate: [-16, 10, -16] }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                }}
              >
                <div className=" sm:w-[129px] text-center text-white text-2xl font-normal  leading-normal">
                  Hyperlocal
                </div>
              </motion.span>
              <br />
              <motion.span
                className=" absolute z-10 top-56 sm:top-20 md:right-[1.5rem] right-5  bg-[#b981ff] text-white text-sm px-3 py-1 rounded-full rotate-45 shadow-md"
                animate={{ y: [0, -10, 0], rotate: [10, -10, 10] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <div className="w-[135px]  text-center text-white text-2xl font-normal font-['Inter'] leading-normal">
                  Multilingual
                </div>
              </motion.span>
              across India{" "}
            </div>
            <p className="text-[#46009e] mt-5 text-left sm:text-[28px] font-normal font-['Inter'] sm:leading-[45px]">
              Get the right influencer at the right cost
            </p>
          </div>
              {/* Floating Labels */}
                  <div className="hidden sm:block sm:mb-0">

          <p className="text-[#554469] mx-auto sm:mx-0 mt-14 md:mr-[-10px]  text-xl font-normal leading-normal">Media Coverage</p>
          <div className='flex mb-10 items-center scale-90 mt-10  sm:scale-100  flex-row max-w-[900px] justify-between'>
                  <Image onClick={()=>{
                    router.push('https://www.educationtimes.com/article/editor-s-pick/99735357/the-vibes-academy-voices-inspiring-a-better-society')
                  }} src="assets/education.svg" width={90} height={50} alt="forbes" className='mr-5 hover:cursor-pointer'/>
                  <Image onClick={()=>{
                    router.push('https://www.timesnownews.com/business-economy/industry/indias-vibes-academy-embarks-on-ambitious-skill-revolution-to-shape-formidable-workforce-article-110369285')
                  }} src="assets/times.svg" width={90} height={50} alt="forbes" className=' mr-5 hover:cursor-pointer'/>
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
        <div className="md:ml-14 sm:w-auto m-auto w-3/4 mt-14 sm:mt-0 md:-mt-5">
          <motion.div
            className="max-w-[433px] m-auto sm:w-[433px]  h-[488.74px] bg-white/80 pt-10 px-10 border shadow-xl shadow-[#7000ff]/20 rounded-[20px] backdrop-blur-[134.35px] "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >{!isSubmitted && <>
            <p className="text-[#7000ff] mt-4 text-4xl font-semibold leading-[45px]">
              Interested?
            </p>
            <div className="w-full max-w-md mx-auto  ">
              <div className="flex flex-col space-y-4 mt-5">
                {["name", "phone", "email", "website"].map((field, index) => (
                  <motion.div
                    key={field}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={staggerVariants}
                    className="flex items-center space-x-2 border-b border-gray-300 py-2"
                  >
                    {field === "phone" && (
                      <Phone className="w-5 h-5 text-gray-500" />
                    )}
                    {field === "email" && (
                      <Mail className="w-5 h-5 text-gray-500" />
                    )}
                    {field === "website" && (
                      <Globe className="w-5 h-5 text-gray-500" />
                    )}
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      value={form[field]}
                      onChange={handleChange}
                      required
                      className="w-full border-none bg-transparent focus:outline-none placeholder-gray-500"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerVariants}
                  custom={4}
                >
                  <button
                    onClick={handleSubmit}
                    className="w-fit bg-[#7000ff] mt-5 text-white font-medium px-[9%] sm:px-[10%] py-4 rounded-full flex items-center gap-2 shadow-md hover:bg-purple-700 hover:scale-105 justify-around transition-transform duration-200"
                  >
                    <p className="text-white text-center text-lg sm:text-2xl font-medium leading-normal">
                      Let's Talk
                    </p>

                    <svg
                      className="rotate-45 mx-[0]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  {isError && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-3 text-[#7000ff] text-lg font-semibold"
                    >
                      {error}
                    </motion.p>
                  )}
                </motion.div>
              </div>
            </div>
          </>

          }
           {isSubmitted && (<>
            <Image src="/assets/success.svg" width={300} height={100} alt="success" className="mx-auto mt-10" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-[#7000ff] text-lg font-semibold"
              >
                Successfully submitted!
              </motion.p>
           </>
            )}
          </motion.div>
        </div>
        <div className=" sm:hidden sm:mb-0">

          <p className="text-[#554469] mx-auto sm:mx-0 mt-14 md:mr-[-10px] text-center text-xl font-normal leading-normal">Media Coverage</p>
          <div className='flex mb-10 items-center scale-90 mt-10  sm:scale-100  flex-row max-w-[900px] justify-between'>
                  <Image onClick={()=>{
                    router.push('https://www.educationtimes.com/article/editor-s-pick/99735357/the-vibes-academy-voices-inspiring-a-better-society')
                  }} src="assets/education.svg" width={90} height={50} alt="forbes" className='mr-5 hover:cursor-pointer'/>
                  <Image onClick={()=>{
                    router.push('https://www.timesnownews.com/business-economy/industry/indias-vibes-academy-embarks-on-ambitious-skill-revolution-to-shape-formidable-workforce-article-110369285')
                  }} src="assets/times.svg" width={90} height={50} alt="forbes" className=' mr-5 hover:cursor-pointer'/>
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
    </motion.div>
  );
}

export default Hero3;
