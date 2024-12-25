import React, { useState, useEffect } from 'react';
import { CarouselSlide } from './CarouselSlide';
import { CarouselDots } from './CarouselDots';
import { CarouselArrows } from './CarouselArrows';
import { carouselSlides } from './carouselData';

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? carouselSlides.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => 
      (prev + 1) % carouselSlides.length
    );
  };

  return (
    <div className="relative bg-green-700 h-[400px] overflow-hidden">
      {carouselSlides.map((slide, index) => (
        <CarouselSlide
          key={index}
          {...slide}
          isActive={currentSlide === index}
        />
      ))}
      <CarouselArrows onPrev={goToPrevSlide} onNext={goToNextSlide} />
      <CarouselDots
        slides={carouselSlides}
        currentSlide={currentSlide}
        onDotClick={goToSlide}
      />
    </div>
  );
};