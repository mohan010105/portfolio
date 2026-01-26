import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Artificial Intelligence",
    issuer: "Corizo",
    year: "2024"
  },
  {
    title: "Front-End Developer",
    issuer: "Q-spider",
    year: "2025"
  },
  {
    title: "Web Devolopment",
    issuer: "Zidio",
    year: "2025"
  },
  {
    title: "Full-Stack Developer",
    issuer: "Labmantix",
    year: "2026"
  }
];

// const achievements = [
//   "Winner - National Hackathon 2024",
//   "Open Source Contributor - 500+ commits",
//   "Speaker - ReactConf 2023",
//   "Top 1% on Stack Overflow"
// ];

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">
            Certifications & Achievements
          </h2>
          {/* <p className="text-3xl md:text-4xl font-semibold mb-16 text-foreground">
            Recognition & milestones
          </p> */}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group h-full bg-card border border-border rounded-lg p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-accent">
                  {cert.year}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}