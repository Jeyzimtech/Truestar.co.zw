import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import footerBg from "@/assets/1.jpg";

const Footer = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100092759285681" },
    { icon: Instagram, href: "https://www.instagram.com/truestar_constructions?igsh=MXdnbGRjeTVtMGdieg==" },
    { icon: Twitter, href: "https://x.com/Valoh_The_Great" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/truestar-construction-b87285402?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  ];

  return (
    <footer className="relative text-primary-foreground py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={footerBg} alt="Footer Background" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-navy-gradient opacity-80" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <img src={logo} alt="TrueStar Construction" className="h-16 md:h-24 w-auto object-contain" />
              <span className="text-primary-foreground font-display font-bold text-xl md:text-2xl tracking-wide">
                TrueStar <span className="text-gold">Construction</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 mt-4 text-sm leading-relaxed">
              Building your vision into reality. Professional construction services from design to completion in Harare, Zimbabwe.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} TrueStar Construction. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-sm">
            Developed by <a href="https://teramark.tech" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">teramark.tech</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
