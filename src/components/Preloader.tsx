import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HardHat } from "lucide-react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Scroll to top to ensure we are at the top when the preloader vanishes
    window.scrollTo(0, 0);
    
    // Hide preloader after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Construction animation */}
          <div className="relative w-64 h-64 flex items-end justify-center border-b-4 border-gold">
            {/* Building 1 */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "50%" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="w-12 bg-white/10 mx-2 relative flex flex-col justify-end p-1 gap-1"
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 1 + i * 0.1 }}
                  className="w-full h-3 bg-gold/80"
                />
              ))}
            </motion.div>

            {/* Building 2 (Taller) */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "85%" }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="w-16 bg-white/10 mx-2 relative flex flex-col justify-end p-1 gap-1"
            >
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 1.2 + i * 0.1 }}
                  className="w-full h-4 bg-gold/80"
                />
              ))}
            </motion.div>

            {/* Building 3 */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "65%" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="w-12 bg-white/10 mx-2 relative flex flex-col justify-end p-1 gap-1"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 1.4 + i * 0.1 }}
                  className="w-full h-3 bg-gold/80"
                />
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="mt-8 flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-2 text-gold">
              <HardHat className="w-6 h-6 animate-pulse" />
              <h2 className="text-2xl font-display font-bold text-white tracking-widest uppercase">
                TrueStar <span className="text-gold">Building...</span>
              </h2>
            </div>
            <div className="w-64 h-1.5 bg-white/20 rounded-full mt-4 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="h-full bg-gold rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
