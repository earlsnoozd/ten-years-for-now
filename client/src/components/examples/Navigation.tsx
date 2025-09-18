import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 min-h-screen">
      <Navigation />
      
      {/* Demo sections for testing navigation */}
      <div id="hero" className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl">Hero Section</h1>
      </div>
      <div id="career" className="min-h-screen flex items-center justify-center bg-slate-800/50">
        <h1 className="text-white text-4xl">Career Section</h1>
      </div>
      <div id="lifestyle" className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl">Lifestyle Section</h1>
      </div>
      <div id="impact" className="min-h-screen flex items-center justify-center bg-slate-800/50">
        <h1 className="text-white text-4xl">Impact Section</h1>
      </div>
      <div id="closing" className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl">Closing Section</h1>
      </div>
    </div>
  );
}