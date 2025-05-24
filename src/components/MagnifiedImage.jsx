import { useState, useRef, useEffect } from 'react';

const MagnifiedImage = ({ src, alt, className = '' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-200"
        style={{
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          transformOrigin: `${position.x}% ${position.y}%`
        }}
      />
      {isHovering && (
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <p className="text-white text-sm bg-black/50 px-2 py-1 rounded">
            Hover to zoom
          </p>
        </div>
      )}
    </div>
  );
};

export default MagnifiedImage; 