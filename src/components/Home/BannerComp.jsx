import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import bannerVideo1 from "../../assets/videos/video1.mp4";
import bannerVideo2 from "../../assets/videos/video2.mp4";
import bannerVideo3 from "../../assets/videos/video3.mp4";
import "./BannerComp.css";

const BannerComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Disable loading screen
  const [videosLoaded, setVideosLoaded] = useState(false);
  const videoRefs = useRef([]);
  const videos = [bannerVideo1, bannerVideo2, bannerVideo3];

  useEffect(() => {
    // Show content immediately, load videos in background
    setVideosLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo && videosLoaded) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {
        // Ignore video play errors
      });
    }
  }, [currentIndex, videosLoaded]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {videosLoaded && videos.map((video, index) => (
        <video
          key={index}
          ref={(el) => (videoRefs.current[index] = el)}
          src={video}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          muted
          playsInline
          preload="metadata"
        />
      ))}

      <div className="absolute inset-0 bg-black opacity-60 z-20"></div>

      <div className="relative h-full flex items-center justify-center z-30">
        <img src={logo} alt="Beonpix Logo" className="h-[200px] w-auto" />
      </div>
    </div>
  );
};

export default BannerComp;
