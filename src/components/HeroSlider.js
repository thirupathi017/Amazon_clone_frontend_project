import React, { useState } from 'react';

const HeroSlider = () => {
  const images = [
    "/assets/header1.jpg",
    "/assets/header2.jpg",
    "/assets/header3.jpg",
    "/assets/header4.jpg",
    "/assets/header5.jpg",
    "/assets/header6.jpg",
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <div className="relative overflow-hidden">
      <button 
        onClick={prevSlide}
        className="absolute top-[20%] left-0 z-10 px-[1vw] py-[5vh] bg-[#ffffff4f] text-[#0000007b] font-semibold text-[18px] cursor-pointer hover:bg-[#ffffff80]"
      >
        &#129144;
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-[20%] right-0 z-10 px-[1vw] py-[5vh] bg-[#ffffff4f] text-[#0000007b] font-semibold text-[18px] cursor-pointer hover:bg-[#ffffff80]"
      >
        &#129146;
      </button>
      
      <ul className="flex overflow-y-hidden">
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`Banner ${idx}`}
            className={`max-w-full [mask-image:linear-gradient(to_bottom,#000000_50%,transparent_100%)] transition-opacity duration-500 ${
              idx === currentIdx ? 'block' : 'hidden'
            }`}
          />
        ))}
      </ul>
    </div>
  );
};

export default HeroSlider;
