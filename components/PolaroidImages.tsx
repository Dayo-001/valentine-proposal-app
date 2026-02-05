"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PolaroidImage {
  id: number;
  src: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
}

export default function PolaroidImages({ show }: { show: boolean }) {
  const [images, setImages] = useState<PolaroidImage[]>([]);

  useEffect(() => {
    if (!show) return;

    // Initialize polaroid images with random positions and velocities
    const wifeyImages = [
      "/images/wifey/wifey1.jpg",
      "/images/wifey/wifey2.jpg",
      "/images/wifey/wifey3.jpg",
    ];

    const initialImages: PolaroidImage[] = wifeyImages.map((src, index) => ({
      id: index,
      src,
      x: Math.random() * (window.innerWidth - 150),
      y: Math.random() * (window.innerHeight - 200),
      vx: (Math.random() - 0.5) * 3, // velocity x
      vy: (Math.random() - 0.5) * 3, // velocity y
      rotation: Math.random() * 20 - 10, // -10 to 10 degrees
    }));

    setImages(initialImages);

    // Animation loop for bouncing effect
    const animate = () => {
      setImages((prevImages) =>
        prevImages.map((img) => {
          let newX = img.x + img.vx;
          let newY = img.y + img.vy;
          let newVx = img.vx;
          let newVy = img.vy;

          // Bounce off edges
          const imageWidth = 120;
          const imageHeight = 150;

          if (newX <= 0 || newX >= window.innerWidth - imageWidth) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(newX, window.innerWidth - imageWidth));
          }

          if (newY <= 0 || newY >= window.innerHeight - imageHeight) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(newY, window.innerHeight - imageHeight));
          }

          return {
            ...img,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
    };

    const intervalId = setInterval(animate, 1000 / 60); // 60 FPS

    return () => clearInterval(intervalId);
  }, [show]);

  if (!show || images.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      {images.map((img) => (
        <div
          key={img.id}
          className="absolute transition-transform duration-100"
          style={{
            left: `${img.x}px`,
            top: `${img.y}px`,
            transform: `rotate(${img.rotation}deg)`,
          }}
        >
          <div className="bg-white p-2 shadow-xl">
            <Image
              src={img.src}
              alt={`Wifey ${img.id + 1}`}
              width={120}
              height={120}
              className="object-cover"
            />
            <div className="h-6 bg-white"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
