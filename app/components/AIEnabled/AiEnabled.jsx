import React from "react";
import Image from "next/image";
import Button from "../Button";

function AiEnabled() {
  return (
    <div  id="ai-enabled"  className="mt-20 sm:mt-[120px]">
      <p className=" text-center sm:text-5xl text-2xl font-semibold sm:leading-[59px]">
        AI enabled Influencer
        <br></br>Selection System
      </p>
      <p className=" text-center px-16 mt-[20px] text-[#001a29] sm:text-xl font-normal sm:leading-7">
        Ensuring best fit and optimal pricing for your Influencer campaigns.
      </p>
      <div className="relative mt-[-8vh] hidden sm:flex z-[-10] flex-row">
        <div className="absolute left-[-325px] w-[649.76px] h-[649.76px] bg-gradient-to-t from-[#7000ff] to-[#430099] rounded-full"></div>
        <div className=" absolute right-[-325px] w-[649.76px] h-[649.76px] bg-gradient-to-t from-[#7000ff] to-[#430099] rounded-full"></div>
      </div>
      <div className="relative  sm:hidden z-[-10] mt-7 flex-row">
        <div className="absolute left-[-300px] w-[377.76px] h-[377.76px] bg-gradient-to-t from-[#7000ff] to-[#430099] rounded-full"></div>
        <div className=" absolute right-[-300px] w-[377.76px] h-[377.76px] bg-gradient-to-t from-[#7000ff] to-[#430099] rounded-full"></div>
      </div>

      <div className="max-w-[1007.75px] hidden sm:block mt-40 w-[90%] m-auto h-[359.29px] bg-white/0 rounded-[25.10px] ">
        <div className=" w-[25%] relative pt-[15px] z-[-10] mx-auto top-[-60px] h-[141.45px] bg-[#d3b1ff]  rounded-[49px]">
          <p className=" text-center  text-[#2f006b] text-xl font-normal font-['Inter'] leading-[29px]">
            Tracking Metrics
          </p>
        </div>
        <div className="w-full bg-white rounded-[25px] mt-[-150.25px] h-full  flex flex-col">
          <div className="w-full h-1/2 flex flex-row">
            <div className="w-1/3 flex flex-row py-[55px] pl-[40px] h-full border rounded-tl-[23px] border-[#8e35ff]">
              <Image
                src="./assets/planner.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className=" text-[#1e1e1e]  text-base md:text-2xl font-medium leading-[31.20px">
                View
                <br />
                Rates
              </p>
            </div>
            <div className="w-1/3 flex flex-row py-[55px] pl-[40px]  h-full border border-[#8e35ff]">
              <Image
                src="./assets/like.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className="mt-[-10px] text-[#1e1e1e]  text-base md:text-2xl  font-medium leading-[31.20px">
                Like
                <br />
                Comment
                <br /> Ratio
              </p>
            </div>
            <div className="w-1/3 flex flex-row py-[55px] pl-[40px]  h-full border rounded-tr-[23px] border-[#8e35ff]">
              <Image
                src="./assets/person.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className=" text-[#1e1e1e] mr-6 text-base md:text-2xl  font-medium leading-[31.20px">
                Engagement
                <br /> Rates
              </p>
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-row">
            <div className="w-1/3 flex flex-row py-[55px] pl-[40px]  h-full border rounded-bl-[23px] border-[#8e35ff]">
              {" "}
              <Image
                src="./assets/grain.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className="text-base mr-5 md:text-2xl text-[#1e1e1e]  font-medium leading-[31.20px">
                Post <br />
                Frequency
              </p>
            </div>
            <div className="w-1/3 flex flex-row py-[55px] pl-[40px]  h-full border border-[#8e35ff]">
              {" "}
              <Image
                src="./assets/play.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className="text-base md:text-2xl text-[#1e1e1e]  font-medium leading-[31.20px">
                Video <br />
                Quality
              </p>
            </div>
            <div className=" w-1/3 flex flex-row py-[55px] pl-[40px]  h-full border rounded-br-[23px] border-[#8e35ff]">
              {" "}
              <Image
                src="./assets/edit.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className="text-base md:text-2xl text-[#1e1e1e] font-medium leading-[31.20px">
                Follower <br />
                Growth Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1007.75px] sm:hidden mt-[-15px] w-[90%] mx-auto min-h-[440.29px] bg-white/0 rounded-[25.10px] ">
        <div className="w-[155.85px] h-[196.46px] bg-[#d3b1ff] rounded-[20px] m-auto">
          <p className=" text-center pt-1 text-[#2f006b] text-sm font-normal font-['Inter'] leading-[29px]">
            Tracking Metrics
          </p>
        </div>
        <div className="w-full bg-white rounded-[25px] mt-[-160.25px] h-full  flex flex-col">
        <div className=" flex flex-row py-2 pl-[40px] border rounded-t-[20px] border-[#8e35ff]">
              <Image
                src="./assets/planner.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className=" text-base mr-5 md:text-2xl text-[#1e1e1e]  font-medium leading-[31.20px]">
                View
                <br /> Rates
              </p>
            </div>
            <div className=" flex flex-row py-2 pl-[40px] border  border-[#8e35ff]">
              <Image
                src="./assets/like.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className=" text-base mr-5 md:text-2xl text-[#1e1e1e]  font-medium leading-[31.20px]">
              Like Comment<br/>Ratio
              </p>
            </div>
            <div className=" flex flex-row py-2 pl-[40px] border  border-[#8e35ff]">
              <Image
                src="./assets/person.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className=" text-base mr-5 md:text-2xl text-[#1e1e1e]  font-medium leading-[31.20px]">
                Engagement
                <br /> Rates
              </p>
            </div>
            <div className=" flex flex-row py-2 pl-[40px] border  border-[#8e35ff]">
              {" "}
              <Image
                src="./assets/grain.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className="text-base mr-5 md:text-2xl text-[#1e1e1e]  font-medium leading-[31.20px]">
                Post <br />
                Frequency
              </p>
            </div>
            <div className=" flex flex-row py-2 pl-[40px] border border-[#8e35ff]">
              {" "}
              <Image
                src="./assets/play.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className="text-base md:text-2xl text-[#1e1e1e]  font-medium leading-[31.20px]">
                Video <br />
                Quality
              </p>
            </div>
            <div className="  flex flex-row py-2 pl-[40px] border rounded-b-[23px] border-[#8e35ff]">
              {" "}
              <Image
                src="./assets/edit.svg"
                width={50}
                height={100}
                alt="alt"
              />
              <p className="text-base md:text-2xl text-[#1e1e1e] font-medium leading-[31.20px]">
                Follower <br />
                Growth Rate
              </p>
            </div>
        </div>
      </div>
      <div className="w-fit m-auto mt-20">


<Button text="Request a call back" />
</div>
    </div>
  );
}

export default AiEnabled;
