'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [rotation, setRotation] = useState(resolvedTheme === 'dark' ? 180 : 0);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setRotation(rotation === 0 ? 180 : 0); // Toggle rotation
  };

  if (!mounted) return null;

  return (
    <div
      className='m-5 w-14 h-14 rounded-full p-2 relative cursor-pointer flex items-center justify-center'
      onClick={toggleTheme}
      style={{
        transition: 'transform 0.5s',
        transform: `rotate(${rotation}deg)`,
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: resolvedTheme === 'dark' ? 'white' : 'black',
      }}
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className='text-white w-8 h-8' />
      ) : (
        <FiMoon className='text-black w-8 h-8' />
      )}
    </div>
  );
}
