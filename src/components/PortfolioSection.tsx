import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";
import project5 from "@/assets/project-5.jpeg";
import project6 from "@/assets/project-6.jpeg";
import project7 from "@/assets/project-7.jpeg";
import project8 from "@/assets/project-8.jpeg";
import project9 from "@/assets/project-9.jpeg";
import project10 from "@/assets/project-10.jpeg";
import project11 from "@/assets/project-11.jpeg";
import project12 from "@/assets/project-12.jpeg";
import project13 from "@/assets/project-13.jpeg";
import project14 from "@/assets/project-14.jpeg";
import project15 from "@/assets/22.jpeg";
import project16 from "@/assets/project-16.jpeg";
import project17 from "@/assets/project-17.jpeg";
import project18 from "@/assets/project-18.jpeg";

const projects = [
  { image: project1, title: "Completed Residential Complex", category: "Residential" },
  { image: project2, title: "Modern Kitchen Finish", category: "Interior" },
  { image: project4, title: "Kitchen Renovation", category: "Interior" },
  { image: project15, title: "Commercial Building Exterior", category: "Commercial" },
  { image: project14, title: "Two-Storey Residential Build", category: "Residential" },
  { image: project11, title: "Roof Truss Installation", category: "Roofing" },
  { image: project12, title: "Brick & Structural Work", category: "Construction" },
  { image: project13, title: "Reinforcement Steel Work", category: "Construction" },
  { image: project3, title: "Face Brick Masonry", category: "Commercial" },
  { image: project16, title: "Commercial Brickwork Facade", category: "Commercial" },
  { image: project17, title: "Skilled Bricklayer at Work", category: "Construction" },
  { image: project18, title: "Circular Floor Plan Design", category: "Design" },
  { image: project6, title: "Architectural Floor Plan", category: "Design" },
  { image: project5, title: "Team at Work", category: "Construction" },
  { image: project7, title: "Aerial Slab Construction", category: "Construction" },
  { image: project8, title: "Aerial Foundation Work", category: "Construction" },
  { image: project9, title: "Reinforcement & Formwork", category: "Construction" },
  { image: project10, title: "Foundation & Ground Work", category: "Construction" },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const { ref, isVisible } = useScrollAnimation();
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Our Work</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Explore our portfolio of completed projects showcasing our commitment to quality and craftsmanship.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${active === cat
                  ? "bg-gold-gradient text-accent-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/3] transform-gpu"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6">
                  <div>
                    <span className="text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                    <h3 className="font-display text-base sm:text-xl font-bold text-primary-foreground">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
