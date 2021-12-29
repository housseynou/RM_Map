import React, { useState } from 'react';
import { ImagePosts } from './Post';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { PublicContainer } from './PublicElements';

const Publications = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
        <PublicContainer id="publications">
        <FaArrowLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowRight className='right-arrow' onClick={nextSlide} />
        {ImagePosts.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='publication'  />
              )}
            </div>
          );
        })}
            
        </PublicContainer>
    )
};

export default Publications;
