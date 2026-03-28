import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const REVIEWS = [
  {
    text: "My skin is smooth and less red. I use morning and night then moisturizer.",
    author: "Darcy"
  },
  {
    text: "My skin feels smooth and looks brighter. Its part of my everyday skin care routine now.",
    author: "Sandra Mackenzie"
  },
  {
    text: "Great product, does exactly what it's supposed to.",
    author: "irshad"
  },
  {
    text: "Very refreshing. It absorbs into my skin super fast and I use it mostly in the morning.",
    author: "Shawper"
  },
  {
    text: "Great product and great economic value",
    author: "Julie Ezeh"
  },
  {
    text: "Healed skin on the way… My skin has started to repair and it is glowing.",
    author: "Toma"
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section 
      className="py-32 bg-[#FAF9F6] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="absolute w-full text-center flex flex-col items-center"
            >
              <div className="flex gap-1 mb-8 text-black/20">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-black/60" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-serif italic text-black leading-relaxed mb-8 max-w-2xl px-4">
                "{REVIEWS[currentIndex].text}"
              </blockquote>
              
              <cite className="text-xs uppercase tracking-[0.3em] font-medium text-black/40 not-italic">
                — {REVIEWS[currentIndex].author}
              </cite>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-black/20 hover:text-black transition-colors z-10"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-black/20 hover:text-black transition-colors z-10"
            aria-label="Next review"
          >
            <ChevronRight size={24} strokeWidth={1} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-1 h-1 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'bg-black w-4' : 'bg-black/20'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
