import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Mr Chirozvi.", role: "Homeowner", text: "TrueStar built our dream home from scratch. The quality of work and attention to detail was outstanding. Highly recommended!" },
  { name: "Honorable Tendai Pinduka.", role: "Business Owner", text: "Professional, reliable, and incredibly skilled. They completed our commercial project ahead of schedule and within budget." },
  { name: "Mr Mungwadzi.", role: "Property Developer", text: "I've worked with many contractors, but TrueStar stands out for their commitment to quality and transparent communication." },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Testimonials</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-6 sm:p-8 shadow-md border border-border relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              <p className="text-muted-foreground mb-6 leading-relaxed italic text-sm sm:text-base">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
