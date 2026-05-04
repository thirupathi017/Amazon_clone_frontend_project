import React from 'react';
import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import HeroSlider from './components/HeroSlider';
import CategoryGrid from './components/CategoryGrid';
import ProductSlider from './components/ProductSlider';
import ProductSliderWithPrice from './components/ProductSliderWithPrice';
import Footer from './components/Footer';

function App() {
  const row1Categories = [
    { title: "Free international returns", image: "/assets/box1-1.jpg", link: "/" },
    { title: "Lunar New Year", image: "/assets/box1-2.jpg", link: "/" },
    { title: "Toy under $25", image: "/assets/box1-3.jpg", link: "/" },
    { title: "Deals in PCs", image: "/assets/box1-4.jpg", link: "/" },
    { title: "Grooming Products", image: "/assets/box2-1.jpg", link: "/" },
    { title: "Latest Devices", image: "/assets/box2-2.jpg", link: "/" },
    { title: "Pets Food", image: "/assets/box2-3.jpg", link: "/" },
    { title: "Fashion Mart", image: "/assets/box2-4.jpg", link: "/" },
  ];

  const row2Categories = [
    { title: "Stationery", image: "/assets/box3-1.jpg", link: "/" },
    { title: "Laptops for study", image: "/assets/box3-2.jpg", link: "/" },
    { title: "Office chairs", image: "/assets/box3-3.jpg", link: "/" },
    { title: "Monitor", image: "/assets/box3-4.jpg", link: "/" },
  ];

  const row3Categories = [
    { title: "Free international returns", image: "/assets/box1-1.jpg", link: "/" },
    { title: "Lunar New Year", image: "/assets/box2-2.jpg", link: "/" },
    { title: "Toy under $25", image: "/assets/box2-3.jpg", link: "/" },
    { title: "Deals in PCs", image: "/assets/box3-1.jpg", link: "/" },
  ];

  const productSlider1 = [
    "/assets/product1-1.jpg",
    "/assets/product1-2.jpg",
    "/assets/product1-3.jpg",
    "/assets/product1-4.jpg",
    "/assets/product1-5.jpg",
    "/assets/product1-6.jpg",
    "/assets/product1-7.jpg",
    "/assets/product1-9.jpg",
    "/assets/product1-10.jpg",
  ];

  const productSlider2 = [
    "/assets/product2-1.jpg",
    "/assets/product2-9.jpg",
    "/assets/product2-3.jpg",
    "/assets/product2-4.jpg",
    "/assets/product2-5.jpg",
    "/assets/product2-6.jpg",
    "/assets/product2-7.jpg",
    "/assets/product2-2.jpg",
    "/assets/product2-10.jpg",
  ];

  const dealProducts = [
    { image: "/assets/product2-1.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-2.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-3.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-4.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-5.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-6.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-7.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-8.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-9.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-10.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
    { image: "/assets/product2-11.jpg", offer: "27% off", price: "14.49", listPrice: "19.95", description: "This product is the best for you" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <SecondaryNavbar />
      <main className="flex-1">
        <HeroSlider />
        <div>
           <CategoryGrid categories={row1Categories} />
           <ProductSlider title="Best Seller in Sports & Outdoors" images={productSlider1} />
           <CategoryGrid categories={row2Categories} />
           <ProductSliderWithPrice title="Deals Under $25" products={dealProducts} />
           <CategoryGrid categories={row3Categories} />
           <ProductSlider title="Best Seller in Sports & Outdoors" images={productSlider2} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
