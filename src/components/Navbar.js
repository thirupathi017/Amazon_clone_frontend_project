import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#01012d] text-white">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 py-2 gap-4">
        <div className="flex items-center">
          <a href="/" className="mr-4">
            <img src="/assets/amazon_logo.png" width={80} md={100} alt="logo" />
          </a>
          
          <div className="hidden md:flex items-end text-[13px] text-[#d3d3d3]">
            <img src="/assets/location_icon.png" width={18} alt="location" className="mb-1 mr-1" />
            <div>
              <p className="text-[10px]">Deliver to</p>
              <h1 className="text-white text-[15px] font-bold leading-none">India</h1>
            </div>
          </div>
        </div>

        {/* Search Bar - Hidden on small screens, shown in second row */}
        <div className="hidden md:flex flex-1 items-center bg-white text-gray-500 max-w-[1000px] rounded-[4px] overflow-hidden">
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

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center font-semibold text-[13px] text-white gap-[5px] cursor-pointer">
            <img src="/assets/us_flag.png" alt="" width={25} />
            <p className="mt-[2px]">EN</p>
            <img src="/assets/dropdown_icon.png" alt="" width={8} height={8} className="mt-1" />
          </div>

          <div className="cursor-pointer">
            <p className="text-[10px] hidden md:block">Hello, sign in</p>
            <h1 className="text-[14px] md:text-[15px] font-bold flex items-center gap-1">
              <span className="hidden md:inline">Account & Lists</span>
              <span className="md:hidden">Sign In ›</span>
              <img src="/assets/dropdown_icon.png" width={8} height={8} alt="" className="hidden md:block" />
            </h1>
          </div>

          <div className="hidden md:block cursor-pointer">
            <p className="text-[10px]">Returns</p>
            <h1 className="text-[15px] font-bold">& Orders</h1>
          </div>

          <a href="/" className="flex items-center">
            <div className="relative">
              <img src="/assets/cart_icon.png" alt="" width={30} />
              <span className="absolute -top-1 -right-1 bg-amazon-yellow text-black text-[12px] font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </div>
            <h4 className="font-bold hidden md:block ml-1">Cart</h4>
          </a>
        </div>
      </div>

      {/* Second Row - Search bar on mobile */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center bg-white text-gray-500 rounded-[4px] overflow-hidden">
          <input 
            type="text" 
            className="border-none outline-none pl-4 w-full py-2" 
            placeholder="Search Amazon" 
          />
          <img 
            src="/assets/search_icon.png" 
            className="bg-[#f1b900] p-2 w-[40px] h-full cursor-pointer" 
            alt="search-icon" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
