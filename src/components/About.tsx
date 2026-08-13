import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="relative w-full py-32 px-6 bg-background text-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1556858548-525d80424dd7?q=80&w=1974&auto=format&fit=crop" 
            alt="Portrait" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            I capture the unspoken moments that define our shared reality.
          </h3>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
            <p>
              What began as an obsession with the mechanics of light has evolved into a lifelong pursuit of cinematic truth. Based out of the city, my work straddles the line between raw documentary and polished commercial art.
            </p>
            <p>
              I believe in the power of restraint. In a world saturated with visual noise, clarity and intention are the highest forms of aesthetics. Every frame should earn its place on the screen.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <h4 className="font-bold text-2xl mb-1">50+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-1">12</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Awards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
