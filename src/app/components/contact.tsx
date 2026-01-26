import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, MessageCircle,Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    value: "mohanrajit05@gmail.com",
    icon: Mail,
    href: "mailto:mohanrajit05@gmail.com"
  },
  {
    name: "GitHub",
    value: "github.com/mohanraj",
    icon: Github,
    href: "https://github.com/mohan010105"
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/mohanraj",
    icon: Linkedin,
    href: "www.linkedin.com/in/mohanraj05"
  },
  {
    name: "Instagram",
    value: "@mohanraj_insta",
    icon: Instagram,
    href: "https://www.instagram.com/mr._.mohan._.05?igsh=MWlzaG15bGZleGN2dw=="
  }
];

export function Contact({ onOpenChat }: { onOpenChat: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">
              Get In Touch
            </h2>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Interested in building something impactful?
            </p>
            <p className="text-xl text-muted-foreground mb-12">
              Let's connect and create scalable solutions together.
            </p>

            {/* Let's Talk Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenChat}
              className="mb-16 inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg shadow-lg shadow-accent/20 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Let's Talk
            </motion.button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 p-6 bg-card border border-border rounded-lg transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-sm text-muted-foreground mb-1">
                      {link.name}
                    </div>
                    <div className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {link.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border pt-12"
          >
            <p className="text-muted-foreground text-sm">
              © 2026 Mohan Raj. Crafted with precision and passion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}