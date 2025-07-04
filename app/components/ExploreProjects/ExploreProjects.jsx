"use client"
import React, { useState } from 'react';
import Button from '../Button';
import VideoPlayer from './VideoPlayer';

function ExploreProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playingIndex, setPlayingIndex] = useState(null); // Track the currently playing video index

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

    const onLeft = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const onRight = () => {
        if (currentIndex < data.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const handleVideoClick = (index) => {
        setPlayingIndex(playingIndex === index ? null : index); // Toggle play/pause
    };

    return (
        <div id="explore-projects" className='mt-20 sm:mt-[120px] flex flex-col items-center'>
            <p className="text-center w-1/2 leading-[34px] text-[28px] sm:text-5xl font-semibold sm:leading-[59px]">
                Explore Our Latest Projects
            </p>
            <p className="hidden sm:block text-center mt-[20px] text-[#424242] text-xl font-normal leading-7">
                Experience the transformative power of innovative influencer marketing campaigns that drive growth <br />
                and create lasting impact. Explore and see how we have empowered brands towards success.
            </p>

            <div className="relative z-[-1] ml-[-50%] mt-44 h-[138.02px] w-[200%] bg-[#7000ff] blur-[60px]"></div>

            {/* Desktop View: 4 Videos */}
            <div className='relative w-[70%] max-w-[1550px] mt-[-250px] mx-auto z-10 hidden md:flex flex-col md:flex-row justify-evenly'>
                {data.slice(0, 4).map((item, index) => (
                    <div className="relative" key={index}>
                        <div className="rounded-[20px] mx-5 max-w-[246.08px] max-h-[410.13px]">
                            <VideoPlayer 
                                src={item.video} 
                                isPlaying={playingIndex === index} 
                                onPlay={() => handleVideoClick(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View: Single Video with Navigation */}
            <div className="w-[270px] sm:w-[350px] m-auto mt-10">
                <div className="relative md:hidden z-10 my-10 flex justify-center mt-[-300px] w-[98%] flex-row m-auto">
                    <div className="relative z-10  flex justify-center items-center" onClick={onLeft}>
                        <div className="flex justify-center w-10" data-svg-wrapper>
                            <svg width="7" height="11" viewBox="0 0 7 11"  fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.19727 0.547119L1.59619 5.14819L6.19727 9.74927" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>

                    <div className="relative min-h-[328px] flex justify-center">
                        <div className="rounded-[10px]">
                            <VideoPlayer 
                                src={data[currentIndex].video} 
                                isPlaying={playingIndex === currentIndex} 
                                onPlay={() => handleVideoClick(currentIndex)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-around items-center" onClick={onRight}>
                        <div className="flex justify-center w-10" data-svg-wrapper>
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.802734 10.5156L5.40381 5.91455L0.802735 1.31348" strokeWidth="2" stroke="black" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-[300px] sm:w-[350px] md:w-fit sm:ml-0  ml-[-5%]">

                <Button text="Get Influencers Now!" />
                </div>
            </div>
        </div>
    );
}

export default ExploreProjects;
