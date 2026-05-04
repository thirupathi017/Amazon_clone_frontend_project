import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#01012d] px-5 py-2.5 flex justify-between items-center text-white">
      <a href="/">
        <img src="/assets/amazon_logo.png" width={100} alt="logo" />
      </a>
      
      <div className="flex items-end text-[13px] ml-[15px] text-[#d3d3d3]">
        <img src="/assets/location_icon.png" width={18} alt="location" className="mb-1 mr-1" />
        <div>
          <p className="text-[10px]">Deliver to</p>
          <h1 className="text-white text-[15px] font-bold leading-none">India</h1>
        </div>
      </div>

      <div className="flex-1 flex items-center bg-white text-gray-500 max-w-[1000px] rounded-[4px] ml-[15px] overflow-hidden">
        <div className="bg-[#dfdfdb] text-[#474545] flex items-center px-[15px] py-[10px] gap-[5px] font-medium text-[14px]">
          <p>All</p>
          <img src="/assets/dropdown_icon.png" alt="drop-down" width={8} height={8} />
        </div>
        <input 
          type="text" 
          className="border-none outline-none pl-5 w-full h-full py-2.5" 
          placeholder="Search Amazon" 
        />
        <img 
          src="/assets/search_icon.png" 
          className="max-w-[40px] bg-[#f1b900] p-2 rounded-r-[4px] cursor-pointer" 
          alt="search-icon" 
          width={50} 
        />
      </div>

      <div className="flex items-center justify-center font-semibold text-[13px] ml-[15px] text-white gap-[5px] mb-1 cursor-pointer">
        <img src="/assets/us_flag.png" alt="" width={25} />
        <p className="mt-[2px]">EN</p>
        <img src="/assets/dropdown_icon.png" alt="" width={8} height={8} className="mt-1" />
      </div>

      <div className="ml-[15px] cursor-pointer">
        <p className="text-[10px]">Hello, sign in</p>
        <h1 className="text-[15px] font-bold flex items-center gap-1">
          Account & Lists 
          <img src="/assets/dropdown_icon.png" width={8} height={8} alt="" />
        </h1>
      </div>

      <div className="ml-[15px] cursor-pointer">
        <p className="text-[10px]">Returns</p>
        <h1 className="text-[15px] font-bold">& Orders</h1>
      </div>

      <a href="/" className="ml-[15px] flex items-center">
        <img src="/assets/cart_icon.png" alt="" width={30} />
        <h4 className="font-bold">Cart</h4>
      </a>
    </nav>
  );
};

export default Navbar;
