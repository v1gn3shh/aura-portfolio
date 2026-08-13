import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const WORKS = [
  { id: 1, title: 'Echoes', category: 'Short Film', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop' },
  { id: 2, title: 'Neon Nights', category: 'Music Video', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, title: 'Raw Nature', category: 'Documentary', img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Urban Flow', category: 'Commercial', img: 'https://images.unsplash.com/photo-1600180758890-a78b5ce53818?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'Silhouettes', category: 'Photography', img: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop' },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % WORKS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + WORKS.length) % WORKS.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="work" className="relative w-full min-h-screen py-24 flex flex-col justify-center bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 mb-12 flex justify-between items-end z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Selected Works</h2>
          <p className="text-background/60 text-lg uppercase tracking-wider">Portfolio 2026</p>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button 
            onClick={prev}
            className="p-4 rounded-full border border-background/20 hover:bg-background hover:text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-background/50"
            aria-label="Previous work"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="p-4 rounded-full border border-background/20 hover:bg-background hover:text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-background/50"
            aria-label="Next work"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 md:inset-x-24 md:inset-y-8 lg:inset-x-32 rounded-2xl md:rounded-[3rem] overflow-hidden group cursor-pointer"
            onClick={next} // Fallback interaction for mobile
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10" />
            <img 
              src={WORKS[currentIndex].img} 
              alt={WORKS[currentIndex].title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
              loading="lazy"
            />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full bg-gradient-to-t from-black/80 to-transparent">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest bg-white/20 backdrop-blur-md rounded-full text-white">
                {WORKS[currentIndex].category}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{WORKS[currentIndex].title}</h3>
              <a 
                href="#" 
                onClick={(e) => { e.stopPropagation(); }}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-0 w-full flex justify-center gap-12 text-background/50 font-mono text-sm">
        <div className="flex items-center gap-4">
          <span className="text-background font-bold text-xl">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="w-12 h-px bg-background/30"></span>
          <span>{String(WORKS.length).padStart(2, '0')}</span>
        </div>
      </div>
      
      {/* Keyboard Hint for Desktop */}
      <div className="hidden lg:flex absolute bottom-8 right-12 items-center gap-4 text-background/40 font-mono text-xs uppercase tracking-widest">
        <span>Use arrow keys</span>
        <div className="flex gap-1">
          <kbd className="px-2 py-1 rounded border border-background/20 bg-background/5">&larr;</kbd>
          <kbd className="px-2 py-1 rounded border border-background/20 bg-background/5">&rarr;</kbd>
        </div>
      </div>
    </section>
  );
}
