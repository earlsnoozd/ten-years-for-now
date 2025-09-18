import NeuralNetwork from '../NeuralNetwork';

export default function NeuralNetworkExample() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 relative">
      <NeuralNetwork />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-white text-center">
          Neural network background with animated nodes and connections.
          <br />
          Move your mouse to interact with the nodes.
        </p>
      </div>
    </div>
  );
}