import { useEffect, useState } from 'react';

/**
 * 3D Animated Loading Page for AGKS Catering
 * Features: Rotating 3D cube with food imagery, particle effects, progress bar
 */
export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 particle-bg opacity-30" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Cube Container */}
      <div className="relative z-10 mb-12">
        <div
          className="w-48 h-48 animate-rotate-3d"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-3d-cube-food-XTGbTGfS64GjtezDZWAAa9.webp"
            alt="Loading Cube"
            className="w-full h-full object-cover rounded-lg shadow-2xl animate-pulse-glow"
          />
        </div>
      </div>

      {/* Loading Text */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Preparing Your
          <span className="gradient-text"> Culinary Experience</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Crafting something extraordinary for you...
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 w-64 h-1 bg-card rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent/50 transition-all duration-300 rounded-full"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading dots */}
      <div className="relative z-10 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-accent rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}
