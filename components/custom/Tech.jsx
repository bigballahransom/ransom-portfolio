'use client'
import React, { useState, useEffect } from 'react';
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { motion } from 'framer-motion';

const Tech = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const techStack = [
    <FaReact className='h-8 w-8'/>,
    <SiNextdotjs className='h-8 w-8'/>,
    <SiNextdotjs className='h-8 w-8'/>,
    <SiNextdotjs className='h-8 w-8'/>,
    <SiNextdotjs className='h-8 w-8'/>,
    <SiNextdotjs className='h-8 w-8'/>,
    <SiNextdotjs className='h-8 w-8'/>,
    <SiNextdotjs className='h-8 w-8'/>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === techStack.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Change slides every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-red-400 bg-transparent py-4 border-t border-b border-spacing-2 border-red-300 shadow-lg shadow-red-200'>
      <div className='flex items-center justify-between gap-4'>
        <motion.div 
          className='rounded-2xl border-4 border-red-300 p-4 text-white bg-black hover:bg-zinc-900 hover:rounded-xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {techStack[currentIndex]}
        </motion.div>
      </div>
    </div>
  )
}

export default Tech;

