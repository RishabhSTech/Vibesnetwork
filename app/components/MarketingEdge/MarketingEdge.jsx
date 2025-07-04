"use client"
import Card from './Card'
import Button from '../Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const cards = [
    {
      icon: "./assets/g_translate.svg",
      title: "Multilingual & \nMulti Cultural Reach",
      description: "Engage with diverse audiences\nin their native languages across \nmetros and tier 1/2/3 cities."
    },
    {
      icon: "./assets/bulb.svg",
      title: "Affordable Creative \nProduction",
      description: "Cheaper than traditional media,\nenabling quick testing and \niterations."
    },
    {
      icon: "./assets/category_search.svg",
      title: "Creative testing like \nnever before",
      description: "Test 100+ creatives concurrently.\nIdentify top-performing content\nfor better ROI."
    },
    {
      icon: "./assets/plus.svg",
      title: "Targeted \nEngagements",
      description: "Hyper-focused content to \nrelevant audiences,ensuring \nhigher visibility & interactions."
    },
    {
      icon: "./assets/shop.svg",
      title: "Influence \nPurchase",
      description: "Over 80% of consumers have \nmade a purchase based on an \ninfluencer's recommendation."
    },
    {
      icon: "./assets/question.svg",
      title: "Did \nyou know?",
      description: "Most campaigns often yield better \nconversion rates due to trust and \nauthenticity of influencers."
    }
  ];

function MarketingEdge() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animate, setAnimate] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5, ease: 'easeOut' }
    })
  };

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);
  return (
    <div ref={ref} className='my-[160px] '>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={animate ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="./assets/roi.svg"
          width={1920}
          height={1080}
          alt="Marketing Edge"
          className='z-0 w-full'
        />
      </motion.div>
      <div className="hidden sm:block relative scale-105  sm:mt-[-200px] z-10 h-[622.10px] bg-[#7000ff] rounded-bl-[800px] rounded-br-[800px]"></div>
      <div className="sm:hidden z-10  scale-105  h-[1535.24px] bg-[#7000ff] rounded-bl-[200px] rounded-br-[200px]"></div>
      <div className='relative w-[80%] m-auto max-w-[1400px] mt-[-1490px] sm:mt-[-550px] z-20'>
      <p className=" text-center m-auto w-[80%] sm:w-full text-white text-[28px] leading-[34px] sm:text-5xl font-semibold sm:leading-[59px]">The Influencer Marketing Edge</p>
      <p className=" text-center text-white mt-[20px] sm:text-xl text-sm font-normal leading-tight sm:leading-7">Access an extensive network of 50,000+ Social Media Influencers, an expert team,<br></br>proprietary tools, transparent campaign reporting, seamless campaign execution and a <br/>commitment to deliver innovative & impactful Influencer campaigns.</p>

    <div className="grid max-w-[1000px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-auto">
      {cards.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} description={card.description} />
      ))}
    </div>
      </div>
      <div className="w-fit m-auto mt-20">


      <Button text="Talk to our Experts" />
      </div>
    </div>
  )
}

export default MarketingEdge
