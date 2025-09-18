import NeuralNetwork from '@/components/NeuralNetwork';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import Navigation from '@/components/Navigation';

const visionData = [
  {
    id: 'career',
    title: 'Career Vision',
    content: "In ten years, I see myself thriving in a career I love as an AI Engineer specializing in AI Security. I work with technology, building AI systems that solve real problems and make life easier while ensuring they are safe and secure. My job gives me freedom, it doesn't require me to work long hours and stable enough to provide for my family while still having time for them and myself. I'm confident, skilled, and respected in my field, using my knowledge to grow and help others around me.",
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle & Growth',
    content: "My life is balanced and peaceful. I live in a home filled with love and laughter, surrounded by my beautiful wife and children. Every day, I prioritize health, personal growth, and family time. I travel with my loved ones, create memories, and enjoy the simple joys of life. I wake up energized, knowing my work and my personal life support each other.",
  },
  {
    id: 'impact',
    title: 'Impact & Legacy',
    content: "I want to leave a positive mark on the people around me. Through my work and actions, I inspire others to follow their dreams and grow. I mentor, guide, and share knowledge to help others succeed. My legacy is not just what I achieve, but the love, guidance, and support I give to my family, friends, and community.",
  },
  {
    id: 'closing',
    title: 'Closing Note',
    content: "In ten years, my life is simple, fulfilling, and full of love. I have a family I cherish, a career I enjoy, and the freedom to live life my way. I am successful not just in work, but in love, happiness, and peace of mind. This vision motivates me every day to create the life I dream of.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 relative overflow-x-hidden">
      {/* Neural Network Background */}
      <NeuralNetwork />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection 
        name="Hi, I'm Jairus Earl S. Baquiran"
        tagline="Welcome to my vision of life ten years from now - a journey of growth, love, and purpose."
      />
      
      {/* Vision Sections */}
      <div className="relative z-10">
        {visionData.map((section, index) => (
          <VisionSection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            index={index}
          />
        ))}
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-16 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neural-cyan to-transparent mx-auto mb-8"></div>
          <p className="text-gray-400 text-sm">
            © 2025 Jairus Earl S. Baquiran. A vision of tomorrow, built today.
          </p>
        </div>
      </footer>
    </div>
  );
}