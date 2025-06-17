import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import {Inter} from 'next/font/google'
import Image from 'next/image'

import help1 from "@/public/help1.jpg";
import help2 from "@/public/help2.jpg";
import help3 from "@/public/help3.jpg";

const inter = Inter({subsets:['vietnamese'],weight:'500'});




const images=[
  {
    src:
  help1},
  {
    src:help2
  },
  {
    src:help3
  }
]
export default function LandingPage() {
  useEffect(()=>{
    const interval= setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex +1)% images.length)
    },3500)
    return ()=> clearInterval(interval)

  },[])
  
  
  const navItems= ["Home","About","Donation","Contact"];
  const [menuOpen,setMenuOpen]= useState(false);
   const [currentIndex,setCurrentIndex] = useState(0);
   const safeIndex = currentIndex % images.length;

     if (!images[safeIndex]?.src) {
    console.error("Missing image at index:", safeIndex);
    return <div className="text-red-500 p-4">Error: Image not found</div>;
  }
  
 
  return (
    <div className={ `inter.className shadow-sm`}>
        <header className='container mx-auto flex h-20 justify-between px-4 items-center text-xl font-bold text-orange-500'>
  
         <div className=' max-auto px-4 py-4 flex-1'>
          Fund <span className='text-gray-900'>Hive</span>

         </div>
        
         <nav className='hidden md:flex  flex-1 text-sm font-medium  justify-between'>
          {navItems.map((item)=>(
            <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className='text-black pb-1 transition-all duration-300 hover:font-bold border-b-2 border-transparent hover:border-orange-500'>
              {item}
            </Link>
          ))}
          
         </nav>
         <button onClick={()=>setMenuOpen(!menuOpen)} className='md:hidden text-gray-700 hover:text-orange-500 focus;outline-none'>
          <svg className='w-6 h-6' fill="none" stroke="currentColor" strokewidith="2" viewBox="0 0 24 24">
            <path strokeLinecap='round' strokeLinejoin='round' d={menuOpen? 'M6 18L18 6M6 6l12 12':'M4 6h16M4 12h16M4 18h16'}/>
            
          </svg>
          
         
         </button>
         {menuOpen && (
          <div className='md:hidden px-4 pb-4'>
            <nav className='flex flex-col space-y-2 text-sm font-medium'>
              {
                navItems.map((item)=>(
                  <Link key={item}
                  href={`/${item.toLowerCase()}`}
                  className='text-black border-b-2 border-gray-200 py-2 hover:font-bold hover:border-orange-500'>
                    {item}
                  </Link>
                ))
              }
              
            </nav>
            

          </div>
         )}
         
        </header>
        <div className=''>
              <Image
          src={images[safeIndex].src}
          alt={`Slider Image ${safeIndex + 1}`}
          fill
          className="rounded-xl object-cover"
          priority
        />
            </div>
             <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-10 mx-1 transition-all duration-300 ${
              index === currentIndex ? "bg-[#beff46]" : "bg-gray-300"
            } rounded-xl`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
