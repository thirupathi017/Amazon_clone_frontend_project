import React from 'react';

const SecondaryNavbar = () => {
  const menus = [
    "Today's Deals",
    "Registry",
    "Prime Video",
    "Gift Cards",
    "Customer Service",
    "Sell"
  ];

  return (
    <div className="bg-[#1b1d3a] text-white flex font-sans">
      <div className="flex ml-[15px] p-2 justify-center items-center cursor-pointer hover:border hover:border-white">
        <img src="/assets/menu_icon.png" alt="" width={20} height={25} />
        <p className="ml-1 font-bold">All</p>
      </div>
      <div className="p-2 ml-[15px] flex justify-center items-center">
        {menus.map((menu, index) => (
          <p key={index} className="ml-[15px] text-[14px] cursor-pointer hover:border hover:border-white px-1">
            {menu}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SecondaryNavbar;
