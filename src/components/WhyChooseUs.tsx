import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Star, Clock, Heart, DollarSign } from "lucide-react";

const reasons = [
  { icon: Star, title: "Experienced Professionals", desc: "Our team brings decades of combined experience in all aspects of construction." },
  { icon: CheckCircle, title: "High-Quality Workmanship", desc: "We use premium materials and proven techniques for lasting results." },
  { icon: Clock, title: "Reliable & Timely Delivery", desc: "We respect deadlines and deliver projects on schedule, every time." },
  { icon: Heart, title: "Customer Satisfaction Focus", desc: "Your vision is our priority. We work closely with you at every stage." },
  { icon: DollarSign, title: "Affordable & Transparent Pricing", desc: "Competitive rates with no hidden costs. Clear quotes from the start." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="py-16 md:py-20 lg:py-28 bg-navy-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Why Us</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Why Choose <span className="text-gradient-gold">TrueStar</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-sm sm:text-base">
            We stand apart through our unwavering commitment to excellence, transparency, and client satisfaction.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-primary-foreground mb-1">{reason.title}</h3>
                <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
