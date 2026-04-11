import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/truestarconstruction2@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: form.name,
          Phone: form.phone,
          Email: form.email,
          Message: form.message,
          _subject: `New Website Lead: ${form.name}`,
          _template: "table"
        }),
      });

      if (response.ok) {
        toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again later or contact us directly via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Ready to start your project? Get in touch with us today for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-5"
          >
            <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="h-11 sm:h-12" />
            <Input placeholder="Phone Number" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="h-11 sm:h-12" />
            <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="h-11 sm:h-12" />
            <Textarea placeholder="Tell us about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} />
            <Button disabled={isSubmitting} type="submit" className="w-full h-11 sm:h-12 bg-gold-gradient text-accent-foreground font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity">
              <Send className={`w-4 h-4 mr-2 ${isSubmitting ? "animate-pulse" : ""}`} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5 sm:space-y-6"
          >
            {[
              { 
                icon: MapPin, 
                label: "Our Location", 
                content: (
                  <p className="text-muted-foreground text-xs sm:text-sm whitespace-pre-line">
                    TrueStar Construction{"\n"}Borrowdale Hatcliffe 7835{"\n"}Along Domboshava Road{"\n"}Harare, Zimbabwe
                  </p>
                )
              },
              { 
                icon: Phone, 
                label: "Phone", 
                content: (
                  <div className="flex flex-col gap-1.5">
                    <a href="https://wa.me/263716369870" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-gold hover:underline transition-colors text-xs sm:text-sm">
                      +263 71 636 9870 (WhatsApp / Call)
                    </a>
                    <a href="tel:+263775570531" className="block text-muted-foreground hover:text-gold hover:underline transition-colors text-xs sm:text-sm">
                      +263 77 557 0531 (Alternative)
                    </a>
                  </div>
                ) 
              },
              { 
                icon: Mail, 
                label: "Email", 
                content: (
                  <a href="mailto:truestarconstruction2@gmail.com" className="block text-muted-foreground hover:text-gold hover:underline transition-colors text-xs sm:text-sm">
                    truestarconstruction2@gmail.com
                  </a>
                )
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base mb-0.5">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden shadow-md h-[200px] sm:h-[250px]">
              <iframe
                title="TrueStar Construction Location"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-17.6961718,31.1141778&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
