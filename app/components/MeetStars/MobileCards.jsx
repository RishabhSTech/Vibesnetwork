import React from 'react'
import Image from 'next/image'
import "./Style.css"

function MobileCards({username,image , followers, engagement}) {
  return (
    <>
    <div className="mt-10 min-h-[268.05px]  group max-w-[250px]  rounded-lg shadow-lg pb-4 bg-white overflow-hidden">
      <div
         
        className="absolute z-[0] w-full h-[60%] bg-[#7100ff] rounded-[10px]"
      />

      {/* Username */}
      <h2 className={`${username.length > 19 ? 'animate-marquee' : ''} relative ml-4 mt-4 mb-2 transition-all duration-500 group-hover:text-white z-10 text-white text-xl font-medium leading-7`}>
        {username}
      </h2>
      {/* Profile Image */}
      <div className="relative left-28 top-24 z-30" data-svg-wrapper>
<svg width="44" height="49" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.9097 20.1782C44.243 22.1027 44.243 26.9139 40.9097 28.8384L8.19897 47.724C4.86564 49.6485 0.698968 47.2428 0.698969 43.3938L0.69897 5.62277C0.69897 1.77377 4.86564 -0.631857 8.19897 1.29264L40.9097 20.1782Z" fill="white" fillOpacity="0.6"/>
</svg>
</div>
      <div className="relative px-3 w-full z-10 mt-[-40px] h-56 mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          width={450}
          height={450}
          alt={`${username} profile`}
          className="w-full h-full rounded-md"
          priority

        />
      </div>

      {/* Stats */}
      <div className="flex flex-row justify-between px-7">
        <div className="text-left overflow-hidden">
          <p className=" text-lg text-[22px] font-semibold leading-[31.13px]">
            {followers.toLocaleString()}
          </p>
          <p className="text-xs  mix-blend-multiply text-[#797979] text-[10px] font-normal leading-[14.99px]">
            Followers
          </p>
        </div>
        <div className="text-left ml-4">
          <p className=" text-lg text-[22px] font-semibold  leading-[31.13px]">
            {engagement}
          </p>
          <p className="text-xs mix-blend-multiply text-[#797979] text-[10px] font-normal leading-[14.99px]">
            Engagement Rate
          </p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default MobileCards
