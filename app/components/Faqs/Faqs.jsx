"use client"
import React from 'react'
import { useState } from "react";
import { motion } from "motion/react";
import Button from '../Button';


const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-300 py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex justify-between items-center w-full text-left text-lg font-medium `}
        >
          {question}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div data-svg-wrapper className={`${isOpen ? 'text-black' : 'text-purple-600'}`}>
<svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M6.54583 13.2822H11.1413V17.8777C11.1413 18.3447 11.5255 18.7365 12.0001 18.7365C12.4747 18.7365 12.8589 18.3447 12.8589 17.8777V13.2822H17.4543C17.9214 13.2822 18.3131 12.898 18.3131 12.4234C18.3131 11.9488 17.9214 11.5646 17.4543 11.5646H12.8589V6.96917C12.8589 6.50209 12.4747 6.11035 12.0001 6.11035C11.5255 6.11035 11.1413 6.50209 11.1413 6.96917V11.5646H6.54583C6.07875 11.5646 5.68701 11.9488 5.68701 12.4234C5.68701 12.898 6.07875 13.2822 6.54583 13.2822Z" />
</svg>
</div>
          </motion.div>
        </button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mt-2 px-4 whitespace-pre-line text-gray-600">{answer}</p>
        </motion.div>
      </div>
    );
  };

  
function Faqs() {
    const faqs = [
        {
          question: "What is an influencer marketing network?",
          answer:
            "An influencer marketing network is a platform that connects brands with a curated pool of \ninfluencers to facilitate marketing collaborations. It streamlines the process by offering services \nsuch as influencer discovery, campaign management, content creation support, and performance \nanalytics. Brands can leverage the network's resources to execute effective influencer marketing \nstrategies. The Vibes Network is a unique amalgamation of technology and expertise that solves \nsome of biggest issues like\n\n\n1.Influencer Matchmaking - finding the right influencer set for targeted campaign concepts.\n2.Campaigns at scale - now executing influencer marketing campaigns with 100, 200, 500 or even 1000 is easily possible.\n3.Creative coordination, Vetting and execution - A team of expert creatives briefs the influencers and guides them though the content creation process ensuring minimal deviation from the brief.\n4.End to end campaign management - Cliched but yes we are the one-stop-shop for all your influencer marketing campaigns. ",
        },
        {
          question: "How is working with an Influencer network different?",
          answer:
            "Working with an influencer network provides streamlined access to vetted influencers, campaign management tools, and performance analytics...",
        },
        {
          question: "What is required from a brand when working with an Influencer network?",
          answer:
            "Brands need to provide clear campaign objectives, target audience details, and any content guidelines to ensure alignment with marketing goals...",
        },
      ];
  return (
    <div className='flex flex-col bg-[#f5edff] items-center py-[200px]'>
        <p className=" sm:mt-0 mt-[-70px] text-center text-black text-[28px] sm:text-5xl font-semibold leading-[59px]">
        Your FAQs, Answered
      </p>
      <p className="hidden sm:block text-center text-[#001a29] text-base font-normal  leading-normal mb-[50px] mt-[20px] ">
      Find answers to the most commonly asked questions right here.<br/> We've got everything you need to know in one place!
      </p>
      <p className="sm:hidden px-12 text-center text-[#001a29] text-sm font-normal  leading-normal mb-[50px] mt-[10px] ">
      Find answers to the most commonly asked<br/> questions right here. We've got everything<br/> you need to know in one place!
      </p>
      <div className="max-w-4xl mx-auto sm:p-4 py-4 px-10">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
    <div className="mt-[30px] mb-[-40px] w-fit m-auto">

<Button text="Talk to our Experts"/>
</div>
    </div>
  )
}

export default Faqs
