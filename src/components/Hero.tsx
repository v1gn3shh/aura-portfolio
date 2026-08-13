import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/20 via-background to-background -z-10 pointer-events-none" />
      
      {/* Abstract floating shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-foreground/5 to-transparent blur-2xl -z-10"
      />
      
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[20%] right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-foreground/5 to-transparent blur-3xl -z-10"
      />

      <div className="max-w-5xl w-full mx-auto text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-foreground/30 hidden sm:block"></span>
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/70 font-medium">Creative Studio</p>
          <span className="h-px w-12 bg-foreground/30 hidden sm:block"></span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
          className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-foreground mb-6"
        >
          Aura.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.8, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-16"
        >
          We craft immersive visual experiences, blending narrative storytelling with modern digital aesthetics.
        </motion.p>
      </div>

      <motion.a 
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-12 p-4 rounded-full border border-border/50 text-foreground/50 hover:text-foreground hover:bg-muted/50 transition-all focus:outline-none focus:ring-2 focus:ring-foreground/50"
        aria-label="Scroll to work"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
