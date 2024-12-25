import React from 'react';

export const CarouselDots = ({ slides, currentSlide, onDotClick }) => {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            currentSlide === index ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};