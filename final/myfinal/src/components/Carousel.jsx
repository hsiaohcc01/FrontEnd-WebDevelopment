import React, { useState, useEffect } from 'react';
import '../static/css/Carousel.css';
import '../static/css/css-gg.css';
import bluewhale from '../static/images/bluewhale.jpg';
import finwhale from '../static/images/finwhale.jpg';
import killerwhale from '../static/images/killerwhale.jpg';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    bluewhale,
    finwhale,
    killerwhale
  ];

  const scrollInterval = 2000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, scrollInterval);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const handleArrowClick = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    } else if (direction === 'next') {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }
  };

  return (
    <div className="carousel">
      <div className='carousel-container'>
        <button className='left-arrow' onClick={() => handleArrowClick('prev')} aria-label='Previous Photo'><i className='gg-chevron-left'></i></button>
        <img className='carousel-img' src={images[currentIndex]} aria-label='Carousel Photo' alt={`Land Scape ${currentIndex}`} />
        <button className='right-arrow' onClick={() => handleArrowClick('next')} aria-label='Post Photo'><i className='gg-chevron-right'></i></button>
      </div>
    </div>
  );
};

export default Carousel;
