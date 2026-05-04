import React, { useRef } from 'react';

const ProductCard = ({ image, offer, price, listPrice, description }) => {
  return (
    <div className="relative min-w-[200px] flex flex-col p-2">
      <div className="flex justify-center items-center h-[150px] mb-2">
        <img src={image} alt="" className="max-w-full max-h-full object-contain" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-1">
          <p className="bg-[#d20303] text-white px-1 py-0.5 text-[12px] font-bold">
            {offer}
          </p>
          <span className="text-[#d20303] text-[12px] font-extrabold uppercase">Deal</span>
        </div>
        <p className="text-[13px] text-[#474545] font-light mb-1">
          $ <span className="text-[16px] font-medium">{price}</span> 
          <span className="ml-2">List Price: <strike className="opacity-60">${listPrice}</strike></span>
        </p>
        <h4 className="text-[13px] font-light italic leading-tight">{description}</h4>
      </div>
    </div>
  );
};

const ProductSliderWithPrice = ({ title, products }) => {
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
        className="flex overflow-x-auto gap-2.5 mt-2.5 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSliderWithPrice;
