"use client"
import React, { useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying, onPlay }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }, [isPlaying]);

    return (
        <div className="relative cursor-pointer" onClick={onPlay}>
            <video 
                ref={videoRef} 
                src={src} 
                className="w-full rounded-[20px]" 
            />
            {/* Play Button Overlay (only shows when video is paused) */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center rounded-[10px]">
                    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default VideoPlayer;
