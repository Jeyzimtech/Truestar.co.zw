import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpeg";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Clock, value: "30+", label: "Projects Completed" },
  { icon: Shield, value: "100%", label: "Quality Guaranteed" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={project1}
              alt="TrueStar Construction completed project"
              className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gold-gradient rounded-2xl p-4 md:p-6 shadow-xl hidden sm:block">
              <p className="font-display text-2xl md:text-3xl font-bold text-accent-foreground">8+</p>
              <p className="text-accent-foreground/80 font-medium text-xs md:text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Trusted Name in <span className="text-gradient-gold">Construction</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
              TrueStar Construction is a leading construction company based in Harare, Zimbabwe. We specialize in delivering comprehensive construction solutions from architectural design to finishing touches.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm sm:text-base">
              Our commitment to quality, professionalism, and customer satisfaction has made us a trusted name in the construction industry. We take pride in every project we undertake, ensuring that each structure we build meets the highest standards of excellence.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-secondary"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-lg sm:text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground text-[10px] sm:text-xs">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
