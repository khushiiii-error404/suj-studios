/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/assets/u25.mp4');
  const [isFallback, setIsFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && !isNaN(video.duration)) {
        const val = (video.currentTime / video.duration) * 100;
        setProgress(isNaN(val) ? 0 : val);
      } else {
        setProgress(0);
      }
    };

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      } else {
        setDuration(0);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch((err) => console.log('Video auto-playback interrupted:', err));
      }
    }
  }, [videoSrc]);

  const handleVideoError = () => {
    if (!isFallback) {
      console.warn("Custom showreel /assets/u25.mp4 was empty, missing, or could not be played. Loading cinematic fallback.");
      setVideoSrc('https://assets.mixkit.co/videos/preview/mixkit-cinematic-view-of-mountains-and-a-valley-41710-large.mp4');
      setIsFallback(true);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.log('Play interrupted:', err));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current || isNaN(duration) || duration === 0) return;
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      const newTime = (value / 100) * duration;
      if (!isNaN(newTime) && isFinite(newTime)) {
        videoRef.current.currentTime = newTime;
        setProgress(value);
      }
    }
  };

  const toggleFullScreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error('Fullscreen request failed:', err);
      });
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="showreel" className="bg-studio-bg py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-studio-secondary pb-8 gap-4">
          <div>
            <span className="mono-label text-studio-silver">Cinematic Narrative</span>
            <h2 className="serif-header text-4xl md:text-6xl font-bold text-studio-charcoal mt-2">
              Studio Showreel
            </h2>
          </div>
          <p className="serif-body italic text-lg text-studio-graphite max-w-md md:text-right">
            “A singular frame can speak of endless landscapes”
          </p>
        </div>

        {/* Premium Native Video Player Workspace */}
        <div
          ref={containerRef}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          className="relative group w-full h-[300px] sm:h-[450px] md:h-[650px] bg-black studio-video-container select-none shadow-2xl cursor-pointer"
          onClick={togglePlay}
          id="showreel-player-container"
        >
                {/* Native high-quality looping video from local assets */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onError={handleVideoError}
            className="w-full h-full object-cover transition-all duration-1000"
          />

          {/* Vignette effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

          {/* Quick Play/Pause Center Indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{
                opacity: showControls || !isPlaying ? 1 : 0,
                scale: showControls || !isPlaying ? 1 : 0.8,
              }}
              transition={{ duration: 0.4 }}
              className="h-20 w-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl"
            >
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 fill-current translate-x-0.5" />}
            </motion.div>
          </div>

          {/* Elegant Floating Bottom Controls Panel */}
          <div
            onClick={(e) => e.stopPropagation()} // Prevent double trigger
            className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 flex flex-col gap-4 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Seeking bar slider */}
            <div className="flex items-center gap-4 w-full">
              <span className="text-[10px] text-white/70 font-mono">
                {videoRef.current ? formatTime(videoRef.current.currentTime) : '0:00'}
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={isNaN(progress) ? 0 : progress}
                onChange={handleProgressChange}
                className="w-full h-1 bg-white/20 hover:h-1.5 rounded-lg appearance-none cursor-pointer accent-white transition-all duration-200"
                style={{
                  background: `linear-gradient(to right, #FFFFFF ${isNaN(progress) ? 0 : progress}%, rgba(255,255,255,0.2) ${isNaN(progress) ? 0 : progress}%)`,
                }}
              />
              <span className="text-[10px] text-white/70 font-mono">
                {formatTime(duration)}
              </span>
            </div>

            {/* Interaction icons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-studio-secondary transition-colors cursor-pointer focus:outline-none"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-studio-secondary transition-colors cursor-pointer focus:outline-none"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60 hidden sm:inline">
                  SUJ STUDIOS • ACTIVE SHOWREEL
                </span>
                <button
                  onClick={toggleFullScreen}
                  className="text-white hover:text-studio-secondary transition-colors cursor-pointer focus:outline-none"
                  aria-label="Full screen"
                >
                  <Maximize2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
