import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050220] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-11 py-6 md:py-4 mt-auto gap-4 md:gap-0">
      <img src="/assets/amazon_logo.png" width="80" md="100" alt="Amazon Logo" />
      <p className="text-[12px] md:text-[14px] text-center md:text-left opacity-80">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
    </footer>
  );
};

export default Footer;
