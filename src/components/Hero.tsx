"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(() => import("./FaultyTerminal"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-900" />
});

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth } = containerRef.current;
        const viewportHeight = window.innerHeight;
        const height = viewportHeight * 0.5;

        setDimensions({ width: offsetWidth, height });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ height: `${dimensions.height}px` }}
    >
      <FaultyTerminal
        scale={2}
        gridMul={[1.5, 1]}
        digitSize={1.2}
        timeScale={0.2}
        scanlineIntensity={0.4}
        glitchAmount={0.8}
        flickerAmount={0.6}
        noiseAmp={0.7}
        chromaticAberration={1}
        curvature={0.1}
        tint="#9067C6"
        mouseReact={true}
        mouseStrength={0.5}
        brightness={1.0}
        className="w-full h-full"
      />
    </div>
  );
}