import React from 'react';

const CategoryBox = ({ title, image, link }) => {
  return (
    <div className="flex flex-col gap-[10px] w-full sm:w-[48%] lg:w-[24%] min-h-[200px] p-[15px_20px] bg-white relative">
      <h3 className="font-bold text-[18px]">{title}</h3>
      <img src={image} alt={title} className="w-full h-auto object-cover flex-1" />
      <a href={link} className="text-[13px] text-[#29bac4] absolute bottom-2 font-light hover:underline">
        Shop more
      </a>
    </div>
  );
};

const CategoryGrid = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-y-5 justify-between mx-[30px] my-5">
      {categories.map((cat, idx) => (
        <CategoryBox key={idx} {...cat} />
      ))}
    </div>
  );
};

export default CategoryGrid;
