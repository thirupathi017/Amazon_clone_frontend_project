import React, { useRef } from 'react';

const ProductSlider = ({ title, images }) => {
  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="bg-white mx-[30px] p-5 mb-[15px]">
      <h2 className="text-[22px] font-bold mb-2">{title}</h2>
      <div 
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex overflow-x-auto gap-4 mt-2.5 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt="" 
            className="max-w-[200px] max-h-[200px] object-contain cursor-pointer transition-transform hover:scale-105" 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
