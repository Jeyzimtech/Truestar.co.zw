import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Compass, FileText, Blocks, SquareStack, Hammer, PaintBucket,
  Grid3X3, Wrench, Paintbrush, Zap, Droplets, Home, LayoutGrid,
} from "lucide-react";

const services = [
  { icon: Compass, title: "Architecture & Engineering", desc: "Expert architectural design and structural engineering for residential and commercial projects." },
  { icon: FileText, title: "Plan Interpretation", desc: "Accurate interpretation and execution of architectural plans to ensure precision in every build." },
  { icon: Blocks, title: "Masonry & Bricklaying", desc: "Skilled masonry work using quality materials for durable and aesthetically pleasing structures." },
  { icon: SquareStack, title: "Foundations", desc: "Solid foundation construction that ensures the structural integrity of your entire building." },
  { icon: Hammer, title: "Paving & Driveways", desc: "Beautiful and durable paving solutions for driveways, walkways, and outdoor spaces." },
  { icon: PaintBucket, title: "Plastering & Skimming", desc: "Smooth, professional plastering and skimming finishes for interior and exterior walls." },
  { icon: Grid3X3, title: "Tiling & Flooring", desc: "Premium tiling and flooring installations with precision cutting and elegant patterns." },
  { icon: Wrench, title: "Renovations & Extensions", desc: "Transform and expand your existing spaces with our expert renovation services." },
  { icon: Paintbrush, title: "Painting & Decorating", desc: "Professional painting and decorating services to bring color and life to your spaces." },
  { icon: Zap, title: "Electrical Installations", desc: "Safe and certified electrical installations, wiring, and lighting solutions." },
  { icon: Droplets, title: "Plumbing & Drainage", desc: "Complete plumbing and drainage systems installed by certified professionals." },
  { icon: Home, title: "Roof Installations & Repairs", desc: "Quality roofing solutions from new installations to repairs and waterproofing." },
  { icon: LayoutGrid, title: "Ceiling Installation & Repairs", desc: "Expert ceiling installations including suspended, plaster, and decorative ceilings." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">What We Do</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            From concept to completion, we offer a full range of construction services to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.5) }}
              className="group bg-card rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
