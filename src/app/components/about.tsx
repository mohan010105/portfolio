import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-large">
              About
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="text-foreground font-medium">Software Engineer</span> with hands-on experience in
                Full-Stack Web Developer and Data Analyst, focused on building scalable and user-centric web applications
                using modern technologies such as React and JavaScript.
              </p>

              <p className="text-accent/90">
                I have worked on real-world projects including <span className="text-foreground font-medium">Musify,
                a Cloud-based file management system, and an Excel Analytics Platform</span>, following clean code practices,
                agile workflows, and a strong focus on performance, usability, and production-ready solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
