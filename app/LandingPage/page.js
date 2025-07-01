import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import help1 from '@/public/help1.jpg';
import help2 from '@/public/help2.jpg';
import help3 from '@/public/help3.jpg';

const inter = Inter({ subsets: ['vietnamese'], weight: '500' });

const images = [
  { src: help1 },
  { src: help2 },
  { src: help3 },
];

export default function LandingPage() {
  const navItems = ['Home', 'About', 'Donation', 'Contact'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const safeIndex = currentIndex % images.length;

  // fail‑fast guard
  if (!images[safeIndex]?.src) {
    console.error('Missing image at index:', safeIndex);
    return <div className="p-4 text-red-500">Error: Image not found</div>;
  }

  return (
    <div className={inter.className}>
      {/* ───────── HEADER ───────── */}
      <header className="sticky top-0 z-10 mx-auto flex h-20 w-full max-w-6xl items-center justify-between bg-white px-4 text-xl font-bold text-orange-500 shadow-sm">
        <div className="flex-1">
          Fund <span className="text-gray-900">Hive</span>
        </div>

        {/* desktop nav */}
        <nav className="hidden flex-1 justify-between text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="border-b-2 border-transparent pb-1 text-black transition-all duration-300 hover:border-orange-500 hover:font-bold"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* burger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 hover:text-orange-500 focus:outline-none md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </header>

      {/* mobile nav */}
      {menuOpen && (
        <div className="px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="border-b-2 border-gray-200 py-2 text-black hover:border-orange-500 hover:font-bold"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* ─────────  SLIDER ───────── */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          key={safeIndex} 
          src={images[safeIndex].src}
          alt={`Slide ${safeIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-700"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-4xl font-bold text-white drop-shadow">
            Together We Can Make A Difference
          </h1>
        </div>
      </div>

      {/* ───────── DONATE BUTTON ───────── */}
      <div className="my-8 flex justify-center">
        <button className="rounded-full bg-orange-500 px-6 py-3 text-lg text-white shadow-md transition-all hover:bg-orange-600">
          Donate Now
        </button>
      </div>

       {/*footer */}
      <footer className="mt-auto bg-gray-900 py-6 text-center text-white">
        <p className="text-sm">
          © {new Date().getFullYear()} FundHive. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
