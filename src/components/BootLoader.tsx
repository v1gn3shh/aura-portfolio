import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function BootLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
    >
      <div className="w-64 max-w-[80vw]">
        <div className="h-1 w-full bg-muted rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-foreground"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>
        <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span>Initializing</span>
          <span>{Math.min(progress, 100).toString().padStart(3, '0')}%</span>
        </div>
      </div>
    </motion.div>
  );
}
