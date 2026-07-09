
import React from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ beforeImage, afterImage, title, category, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border-2 border-primary/30 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl bg-white"
    >
      <div className="grid grid-cols-2 gap-0">
        <div className="relative overflow-hidden">
          <div className="absolute top-3 left-3 z-10 bg-accent/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
            Öncesi
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={beforeImage}
              alt={`${title} - Öncesi`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute top-3 right-3 z-10 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium">
            Sonrası
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={afterImage}
              alt={`${title} - Sonrası`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="p-4 bg-gradient-to-br from-white to-primary/5">
        <h3 className="text-lg font-semibold mb-1 text-accent" style={{ fontFamily: "Playfair Display, serif" }}>
          {title}
        </h3>
        {category && (
          <p className="text-sm text-muted-foreground font-medium">
            {category}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default GalleryCard;
