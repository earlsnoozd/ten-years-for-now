import { useEffect, useState } from 'react';

interface HeroSectionProps {
  name: string;
  tagline: string;
}

export default function HeroSection({ name, tagline }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative px-8"
      data-testid="hero-section"
    >
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            data-testid="text-hero-name"
          >
            {name}
          </h1>
        </div>
        
        <div 
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p 
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            data-testid="text-hero-tagline"
          >
            {tagline}
          </p>
        </div>

        <div 
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-neural-cyan to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}