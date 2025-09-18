import VisionSection from '../VisionSection';

export default function VisionSectionExample() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 space-y-0">
      <VisionSection
        id="career"
        title="Career Vision"
        content="In ten years, I see myself thriving in a career I love. I work with technology, building AI systems that solve real problems and make life easier. My job gives me freedom, doesn't require me to work long hours and stable enough to provide for my family while still having time for them and myself. I'm confident, skilled, and respected in my field, using my knowledge to grow and help others around me."
        index={0}
      />
      <VisionSection
        id="lifestyle"
        title="Lifestyle & Growth"
        content="My life is balanced and peaceful. I live in a home filled with love and laughter, surrounded by my beautiful wife and children. Every day, I prioritize health, personal growth, and family time. I travel with my loved ones, create memories, and enjoy the simple joys of life. I wake up energized, knowing my work and my personal life support each other."
        index={1}
      />
    </div>
  );
}