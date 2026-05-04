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
    <div className="relative overflow-hidden bg-gray-100">
      <button 
        onClick={prevSlide}
        className="absolute top-[10%] md:top-[20%] left-0 z-10 px-2 md:px-[1vw] py-8 md:py-[5vh] bg-[#ffffff4f] text-[#0000007b] font-semibold text-[18px] cursor-pointer hover:bg-[#ffffff80] transition-colors"
      >
        &#129144;
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-[10%] md:top-[20%] right-0 z-10 px-2 md:px-[1vw] py-8 md:py-[5vh] bg-[#ffffff4f] text-[#0000007b] font-semibold text-[18px] cursor-pointer hover:bg-[#ffffff80] transition-colors"
      >
        &#129146;
      </button>
      
      <ul className="flex overflow-y-hidden min-h-[200px] md:min-h-[400px]">
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`Banner ${idx}`}
            className={`w-full h-auto object-cover md:object-contain [mask-image:linear-gradient(to_bottom,#000000_60%,transparent_100%)] md:[mask-image:linear-gradient(to_bottom,#000000_80%,transparent_100%)] transition-opacity duration-500 ${
              idx === currentIdx ? 'block' : 'hidden'
            }`}
          />
        ))}
      </ul>
    </div>
  );
};

export default HeroSlider;
