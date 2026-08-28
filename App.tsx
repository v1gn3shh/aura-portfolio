import { useState, useEffect } from 'react';
import { BootLoader } from './components/BootLoader';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Controls } from './components/Controls';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isBooting && <BootLoader key="bootloader" />}
      </AnimatePresence>

      <Controls 
        isDark={isDark} 
        toggleDark={() => setIsDark(!isDark)}
        isAudioPlaying={isAudioPlaying}
        toggleAudio={() => setIsAudioPlaying(!isAudioPlaying)}
      />

      <main className="relative w-full h-full">
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
