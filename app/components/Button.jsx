import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";
import Image from "next/image";
import axios from "axios";
function Button({ text }) {
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmited] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
  });

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
        setError("Please enter a valid 10-digit phone number");
        setIsError(true);
        return;
    }

    console.log(JSON.stringify(form));
    // If all validations pass
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setForm({ name: "", email: "", message: "", phone: "", website: "" });
      setIsSubmited(true)
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmited(false);
        setError("");
        setIsError(false);
      }, 3000);
    } 
    
};


  return (
    <>
      {/* Button */}
      <button
        className="bg-[#7000ff] w-full text-white font-medium px-[40px] sm:px-[38px] py-4 rounded-full flex items-center gap-2 shadow-md hover:bg-purple-700 hover:scale-105 justify-around transition-transform duration-200"
        onClick={() => setIsOpen(true)}
      >
        <p className="text-white text-center text-lg sm:text-2xl font-medium leading-normal">
          {text}
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

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          
          <motion.div
            className="fixed top-0 z-50 inset-0 w-screen  h-screen bg-opacity-[0.7] backdrop-filter flex items-center justify-evenly"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          
          >
            <motion.div
              className="w-[90%] max-w-[476.53px] shadow-2xl  h-[488.74px]  rounded-[20px] backdrop-blur-2xl absolute px-[47px] mt-12 z-20  pt-[36px]  bg-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
            <Image src="/assets/close.svg" width={40} height={40} alt="close" onClick={() =>{
            setError(""); 
            setIsSubmited(false);
              setIsOpen(!isOpen)}} className="absolute mr-[-16px] mt-[-15px] top-0 right-0 cursor-pointer" />
            
              
           {!isSubmitted && <>

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
                      className="w-[70%] bg-[#7000ff] mt-5 text-white font-medium px-[9%] sm:px-[10%] py-4 rounded-full flex items-center gap-2 shadow-md hover:bg-purple-700 hover:scale-105 justify-around transition-transform duration-200"
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
            </>}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Button;
