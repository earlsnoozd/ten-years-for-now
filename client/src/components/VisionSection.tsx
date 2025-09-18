import { useEffect, useState, useRef } from 'react';

interface VisionSectionProps {
  id: string;
  title: string;
  content: string;
  index: number;
}

export default function VisionSection({ id, title, content, index }: VisionSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="min-h-screen flex items-center py-24 px-8"
      data-testid={`section-${id}`}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="relative">
            {/* Section number indicator */}
            <div className="absolute -left-16 top-0 hidden md:block">
              <div className="w-12 h-12 rounded-full border-2 border-neural-cyan flex items-center justify-center">
                <span className="text-neural-cyan font-bold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <h2 
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                data-testid={`text-title-${id}`}
              >
                {title}
              </h2>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p 
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                  data-testid={`text-content-${id}`}
                >
                  {content}
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-96 h-96 bg-gradient-to-r from-neural-cyan/5 to-neural-purple/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}