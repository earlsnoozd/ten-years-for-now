import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Connection {
  node1: Node;
  node2: Node;
  distance: number;
}

interface NeuralNetworkProps {
  className?: string;
}

export default function NeuralNetwork({ className = '' }: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      nodesRef.current = [];
      
      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
      updateConnections();
    };

    const updateConnections = () => {
      connectionsRef.current = [];
      const maxDistance = 150;
      
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const dx = nodesRef.current[i].x - nodesRef.current[j].x;
          const dy = nodesRef.current[i].y - nodesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            connectionsRef.current.push({
              node1: nodesRef.current[i],
              node2: nodesRef.current[j],
              distance,
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodesRef.current.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Boundary bouncing
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Mouse interaction
        const mouseDistance = Math.sqrt(
          (node.x - mouseRef.current.x) ** 2 + (node.y - mouseRef.current.y) ** 2
        );
        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100;
          node.vx += (node.x - mouseRef.current.x) * force * 0.001;
          node.vy += (node.y - mouseRef.current.y) * force * 0.001;
        }
      });

      updateConnections();

      // Draw connections
      connectionsRef.current.forEach(connection => {
        const opacity = 1 - (connection.distance / 150);
        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(connection.node1.x, connection.node1.y);
        ctx.lineTo(connection.node2.x, connection.node2.y);
        ctx.stroke();
      });

      // Draw nodes with pulsing effect
      const time = Date.now() * 0.001;
      nodesRef.current.forEach((node, index) => {
        const pulse = 0.5 + 0.5 * Math.sin(time * 2 + index * 0.5);
        const size = 2 + pulse * 2;
        
        ctx.fillStyle = `rgba(34, 211, 238, ${0.6 + pulse * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowColor = '#22d3ee';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${className}`}
      data-testid="neural-network-canvas"
    />
  );
}