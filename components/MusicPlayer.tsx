"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { CONFIG } from "@/lib/config";
import { MusicPlayerProps } from "@/lib/types";
const initialCondition = {
  autoStart: false,
};

export default function MusicPlayer({
  autoStart = initialCondition.autoStart,
  musicUrl = CONFIG.musicStart.musicUrl,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const previousMusicUrl = useRef<string | null>(null);
  const hasInitialized = useRef(false);

  // Handle music URL changes and initialization
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const isUrlChange = previousMusicUrl.current !== null && previousMusicUrl.current !== musicUrl;
    const isFirstLoad = !hasInitialized.current;
    
    // Only update source if it's the first load or URL has changed
    if (isFirstLoad || isUrlChange) {
      const wasPlaying = !audio.paused;
      
      // Update audio source
      audio.src = musicUrl;
      audio.load();

      // Set volume
      audio.volume = CONFIG.musicStart.volume;

      // Update tracking refs
      previousMusicUrl.current = musicUrl;
      hasInitialized.current = true;

      // Play in these cases:
      // 1. First load with autoplay enabled
      // 2. URL changed and music was already playing
      if ((isFirstLoad && CONFIG.musicStart.autoplay && autoStart) || (isUrlChange && wasPlaying)) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [musicUrl, autoStart]);

  // Toggle music playback
  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [isPlaying]);

  return (
    <div className="mb-3 sm:mb-4">
      <button
        onClick={toggleMusic}
        className="bg-gradient-to-r from-[#667eea] to-[#764ba2] border-none px-3 py-1.5 sm:px-4 sm:py-2 rounded-[20px] text-white text-xs sm:text-sm cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        aria-label={isPlaying ? "Stop music" : "Play music"}
      >
        {isPlaying ? CONFIG.musicStart.stopText : CONFIG.musicStart.startText}
      </button>
      <audio ref={audioRef} loop>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
