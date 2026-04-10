import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Modern construction project" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-navy-gradient opacity-75" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold font-medium uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm md:text-base"
        >
          Building Integrity | Quality & Trust
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Building Your Vision
          <br />
          <span className="text-gradient-gold">Into Reality</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          Professional construction services from design to completion in Harare, Zimbabwe.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gold-gradient text-accent-foreground font-semibold text-base sm:text-lg hover:scale-105 transition-transform">
            Get a Quote
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gold text-primary-foreground font-semibold text-base sm:text-lg hover:bg-gold/10 transition-colors">
            View Our Projects
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
