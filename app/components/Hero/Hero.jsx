import Image from 'next/image';
import Button from '../Button';
import AnimatedWord from './Anim';
import Head from 'next/head';

function Hero() {
  return (
    <>
    <Head>
        <link rel="preload" href="/assets/vibesNetwork2.mp4" as="video" type="video/mp4" />
      </Head>
    <div className="relative">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0  w-full h-full object-cover z-[-1] "
        autoPlay
        loop
        muted
      >
        <source src="/assets/vibesNetwork2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="bg-[#2f006b]/90 z-10 sm:mt-0 mt-[-2px] flex-col flex md:flex-row justify-center">
        <div className="flex flex-col sm:mx-36 mx-14 md:pt-24 pt-12">
          <h1 className="text-white text-lg md:text-[28px] font-normal leading-tight md:leading-[45px]">
            Transform your business
          </h1>
          <div className="flex flex-row justify-start items-center">
            <h1 className="text-white text-lg md:text-[28px] font-normal leading-tight md:leading-[45px]">
              with{" "}
            </h1>
            <div className="mx-2 text-[#ffe49f] text-2xl md:text-4xl font-bold leading-[60px] tracking-widest">
              <AnimatedWord />
            </div>
          </div>
          <h1 className="text-white text-lg md:text-[28px] font-light leading-tight md:leading-[45px]">
            Influencer Campaigns
          </h1>
          <p className="w-[256px] sm:w-[354.86px] mt-6 text-[#ffe49f] text-sm sm:text-xl font-normal font-['Inter'] leading-[30px]">
            Unlock unparalleled visibility and engagement with The Vibes Network
          </p>
          <div className="w-fit mt-12">
            <Button text="Transform Now" />
          </div>
        </div>
        <div className="flex flex-col mt-10 md:mt-0 items-center justify-start">
          <div className="absolute z-0 w-[191.37px] h-[191.37px] sm:w-[363.80px] sm:h-[363.80px] mix-blend-overlay bg-gradient-to-b from-white to-white rounded-full"></div>
          <Image
            className="mx-auto relative bottom-0 z-10 mt-10"
            src="/assets/young-girl.svg"
            width={850}
            height={200}
            alt="girl"
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
