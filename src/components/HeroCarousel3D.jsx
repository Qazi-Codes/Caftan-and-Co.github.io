import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants';

const HeroCarousel3D = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Filter keys for product images (caftan, djellaba, gandoura, accessories)
    const keys = Object.keys(images).filter(key => /^(c|d|g|ac)\d+/.test(key));
    // Shuffle and pick first 8 images
    const shuffled = keys.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 8).map(key => images[key]);
    setItems(selected);
  }, []);

  const itemCount = items.length;

  return (
    <motion.div
      className="relative w-full h-[50vh] max-h-[400px] flex items-center justify-center"
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      animate={{ rotateY: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    >
      {items.map((src, idx) => {
        const angle = (360 / itemCount) * idx;
        return (
          <motion.img
            key={idx}
            src={src}
            alt={`carousel-item-${idx}`}
            className="absolute object-cover rounded-lg"
            style={{
              width: 200,
              height: 200,
              transform: `rotateY(${angle}deg) translateZ(300px)`,
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default HeroCarousel3D; 