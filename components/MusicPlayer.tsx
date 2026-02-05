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
  const previousMusicUrl = useRef(musicUrl);

  // Initialize audio on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume
    audio.volume = CONFIG.musicStart.volume;

    // Add event listeners to track playback state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // Attempt autoplay if enabled
    if (CONFIG.musicStart.autoplay && autoStart) {
      audio.play().catch(() => {
        // Autoplay failed, but don't worry - user can click to play
      });
    }

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [autoStart]);

  // Handle music URL changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicUrl !== previousMusicUrl.current) {
      const wasPlaying = !audio.paused;
      
      // Update the URL
      previousMusicUrl.current = musicUrl;
      audio.src = musicUrl;
      audio.load();

      // If music was playing, restart it with the new URL
      if (wasPlaying) {
        audio.play().catch(() => {
          // Play failed, state will be updated by pause event
        });
      }
    }
  }, [musicUrl]);

  // Toggle music playback
  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Play failed, state will be updated by pause event
      });
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
        <source src={musicUrl} type="audio/mpeg" />
      </audio>
    </div>
  );
}
