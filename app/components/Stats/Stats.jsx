"use client"
import Image from "next/image";
import Button from "../Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Stats() {
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
    hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    }),
  };

  return (
    <div id="stats" className="max-w-[1350px]  px-10 sm:px-0 flex flex-col justify-around m-auto">
      <motion.div
        ref={ref}
        className="pt-[100px] flex flex-col md:flex-row justify-around m-auto"
      >
        <motion.div
          custom={0}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          id="stat1"
          className="flex flex-row justify-around"
        >
          <Image
            className="  scale-90 sm:scale-[1] mt-[-23px] mr-[10px]"
            src="assets/crown.svg"
            width={130}
            height={100}
            alt="crown"
          />
          <div className="flex flex-col">
            <p className=" text-[#7000ff] sm:text-[32px] text-[22px] font-semibold sm:font-semibold leading-10">
              50,000+
            </p>
            <p className="text-[#2d2636] text-sm sm:text-xl font-normal sm:leading-[25px]">
              Star Instagram
              <br />
              Influencers across India
            </p>
          </div>
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          id="stat2"
          className="flex flex-row my-10 sm:my-0 sm:mx-10"
        >
          <Image
            className="mt-[-23px] mr-[10px]"
            src="assets/rocket.svg"
            width={130}
            height={100}
            alt="rocket"
          />
          <div className="flex flex-col">
            <p className=" text-[#7000ff] sm:text-[32px] text-[22px] font-semibold sm:font-semibold leading-10">
              Partnerships
            </p>
            <p className="text-[#2d2636] text-sm sm:text-xl font-normal sm:leading-[25px]">
              with influencers who
              <br />
              collaborate only with us
            </p>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          id="stat3"
          className="flex flex-row"
        >
          <Image
            className=" scale-90 sm:scale-[1] mt-[-23px] mr-[10px]"
            src="assets/target.svg"
            width={130}
            height={100}
            alt="target"
          />
          <div className="flex flex-col">
            <p className=" text-[#7000ff] sm:text-[32px] text-[22px] font-semibold sm:font-semibold leading-10">
              50+ Genres
            </p>
            <p className="text-[#2d2636] text-sm sm:text-xl font-normal sm:leading-[25px]">
              Target your niche and
              <br />
              relevant audience
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className="w-fit m-auto mt-20">
        <Button text="Talk to our Experts" />
      </div>
    </div>
  );
}

export default Stats;
