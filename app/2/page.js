"use client"
import Stats from "../components/Stats/Stats";
import InfluencerMarketing from "../components/InfuencerMarketing/InfluencerMarketing";
import MarketingEdge from "../components/MarketingEdge/MarketingEdge";
import WhyVibes from "../components/WhyVibes/WhyVibes";
import ExploreProjects from "../components/ExploreProjects/ExploreProjects";
import AiEnabled from "../components/AIEnabled/AiEnabled";
import AboutUs from "../components/AboutUs/AboutUs";
import Faqs from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";
import MeetStars from "../components/MeetStars/MeetStars";

import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Header1 from "../components/Header1/Header1";
import Hero3 from "../components/Hero3/Hero3";
import Hero2 from "../components/Hero2/Hero2";
import Hero1 from "../components/Hero1/Hero1";
export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  // Start animation when element is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      filter: "blur(4px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="overflow-hidden">
      {/* <Header /> */}
      <Header1 />
      {/* <Hero /> */}
      <Hero1 />
      {/* <Hero2 /> */}
      {/* <Hero3 /> */}
      <Stats/>
      <MeetStars />
      <InfluencerMarketing />
      <MarketingEdge />
      <WhyVibes  />
      <ExploreProjects  />
      <AiEnabled/>
      <AboutUs/>
      <Faqs  />
      <Footer/>
    </div>
  );
}
