import { Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface ControlsProps {
  isDark: boolean;
  toggleDark: () => void;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
}

export function Controls({ isDark, toggleDark, isAudioPlaying, toggleAudio }: ControlsProps) {

  useEffect(() => {
    // Generate a simple ambient drone using Web Audio API instead of an external file
    // for a fully self-contained experience.
    let audioCtx: AudioContext | null = null;
    let oscillator1: OscillatorNode | null = null;
    let oscillator2: OscillatorNode | null = null;
    let gainNode: GainNode | null = null;

    if (isAudioPlaying) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      gainNode = audioCtx.createGain();
      gainNode.gain.value = 0.05;
      gainNode.connect(audioCtx.destination);

      oscillator1 = audioCtx.createOscillator();
      oscillator1.type = 'sine';
      oscillator1.frequency.value = 220; // A3
      
      oscillator2 = audioCtx.createOscillator();
      oscillator2.type = 'triangle';
      oscillator2.frequency.value = 222; // Slight detune for a beating effect

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;

      oscillator1.connect(filter);
      oscillator2.connect(filter);
      filter.connect(gainNode);

      oscillator1.start();
      oscillator2.start();
    }

    return () => {
      if (audioCtx) {
        oscillator1?.stop();
        oscillator2?.stop();
        audioCtx.close();
      }
    };
  }, [isAudioPlaying]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="fixed top-6 right-6 z-40 flex items-center gap-4"
    >
      <button 
        onClick={toggleDark}
        className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-border text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/50"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <button 
        onClick={toggleAudio}
        className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-border text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/50"
        aria-label="Toggle audio"
      >
        {isAudioPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </motion.div>
  );
}
