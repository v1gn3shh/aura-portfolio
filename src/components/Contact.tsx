import { motion } from 'framer-motion';
import { Mail, MoveUpRight, Camera } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 px-6 bg-foreground text-background rounded-t-[3rem] mt-[-2rem] z-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-8 hover:text-background/80 transition-colors cursor-default">
            Let's Talk.
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-background/60 max-w-2xl mb-16 font-light"
        >
          Open for collaborations, commissions, or just a good conversation about art and technology.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 md:gap-12"
        >
          <a 
            href="mailto:hello@aurastudio.com" 
            className="group flex items-center gap-4 text-xl font-medium border-b border-background/20 pb-2 hover:border-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 focus:border-transparent rounded-sm px-2"
          >
            <Mail className="group-hover:-rotate-12 transition-transform" />
            hello@aurastudio.com
            <MoveUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
          </a>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-xl font-medium border-b border-background/20 pb-2 hover:border-background transition-colors focus:outline-none focus:ring-2 focus:ring-background/50 focus:border-transparent rounded-sm px-2"
          >
            <Camera className="group-hover:scale-110 transition-transform" />
            Instagram
            <MoveUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
          </a>
        </motion.div>

        <div className="w-full mt-32 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-background/40 text-sm">
          <p>© {new Date().getFullYear()} Aura Studio. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed & Engineered with care.</p>
        </div>
      </div>
    </section>
  );
}
